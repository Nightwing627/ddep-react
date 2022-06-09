
import React, { useState } from "react"
import * as go from "gojs"
import { ReactDiagram } from "gojs-react"
import "./index.scss"
import GraphLinksModel from "./go.json"
class TreeNode extends go.Node {
    constructor() {
        super()
        this.treeExpandedChanged = (node) => {
            if (node.containingGroup !== null) {
                node.containingGroup
                    .findExternalLinksConnected()
                    .each((l) => l.invalidateRoute())
            }
        }
    }

    findVisibleNode() {
        // redirect links to lowest visible "ancestor" in the tree
        let n: any = this

        while (n !== null && !n.isVisible()) {
            n = n.findTreeParentNode()
        }
        return n
    }
}
// end TreeNode

// Control how Mapping links are routed:
// - "Normal": normal routing with fixed fromEndSegmentLength & toEndSegmentLength
// - "ToGroup": so that the link routes stop at the edge of the group,
//     rather than going all the way to the connected nodes
// - "ToNode": so that they go all the way to the connected nodes
//     but only bend at the edge of the group
const ROUTINGSTYLE = "Normal"

// If you want the regular routing where the Link.[from/to]EndSegmentLength controls
// the length of the horizontal segment adjacent to the port, don't use this class.
// Replace MappingLink with a go.Link in the "Mapping" link template.
class MappingLink extends go.Link {

    computePoints() {
        const result = super.computePoints()
        if (result) {
            const fn = this.fromNode
            const tn = this.toNode
            if (fn && tn) {
                const fg = fn.containingGroup
                const fb = fg ? fg.actualBounds : fn.actualBounds
                const fpt = this.getPoint(0)
                const tg = tn.containingGroup
                const tb = tg ? tg.actualBounds : tn.actualBounds
                const tpt = this.getPoint(this.pointsCount - 1)
                this.setPoint(
                    1,
                    new go.Point(fpt.x < tpt.x ? fb.right : fb.left, fpt.y)
                )
                this.setPoint(
                    this.pointsCount - 2,
                    new go.Point(fpt.x < tpt.x ? tb.left : tb.right, tpt.y)
                )
            }
        }
        return result
    }
}
// end MappingLink

// Create some random trees in each group
const nodeDataArray = [
    { isGroup: true, key: -1, text: "Left Side", xy: "0 0", width: 150 },
    { isGroup: true, key: -2, text: "Right Side", xy: "300 0", width: 150 }
]
const linkDataArray = [
    { from: 6, to: 1012, category: "Mapping" },
    { from: 4, to: 1006, category: "Mapping" },
    { from: 9, to: 1004, category: "Mapping" },
    { from: 1, to: 1009, category: "Mapping" },
    { from: 14, to: 1010, category: "Mapping" }
]

export default function TreeMapper() {
    // All links must go from a node inside the "Left Side" Group to a node inside the "Right Side" Group.
    function checkLink(
        fn: {
            [x: string]: any;
            containingGroup: { data: { key: number } } | null
        },
        fp: any,
        tn: {
            [x: string]: any;
            containingGroup: { data: { key: number } } | null
        },
        tp: any,
        link: any
    ) {
        // make sure the nodes are inside different Groups
        if (fn.containingGroup === null || fn.containingGroup.data.key !== -1) return false
        if (tn.containingGroup === null || tn.containingGroup.data.key !== -2) return false
        //// optional limit to a single mapping link per node
        if (fn.linksConnected.any((l: { category: string }) => l.category === "Mapping")) return (false)
        if (tn.linksConnected.any((l: { category: string }) => l.category === "Mapping")) return (false)
        return true
    }
    function initDiagram() {
        const $ = go.GraphObject.make
        // set your license key here before creating the diagram: go.Diagram.licenseKey = "..."
        const diagram = $(go.Diagram, {
            "undoManager.isEnabled": true, // must be set to allow for model change listening
            "undoManager.maxHistoryLength": 0, // uncomment disable undo/redo functionality
            "clickCreatingTool.archetypeNodeData": {
                text: "new node",
                color: "lightblue"
            },
            "commandHandler.copiesTree": true,
            "commandHandler.deletesTree": true,
            // newly drawn links always map a node in one tree to a node in another tree
            "linkingTool.archetypeLinkData": { category: "Mapping" },
            "linkingTool.linkValidation": checkLink,
            "relinkingTool.linkValidation": checkLink,
            model: new go.GraphLinksModel({
                linkKeyProperty: "key" // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
            })

        })

        //  define a simple Node template
        diagram.nodeTemplate = $(
            go.Node,
            "Auto", // the Shape will go around the TextBlock
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
                go.Point.stringify
            ),
            $(
                go.Shape,
                "RoundedRectangle",
                { name: "SHAPE", fill: "white", strokeWidth: 0 },
                // Shape.fill is bound to Node.data.color
                new go.Binding("fill", "color")
            ),
            $(
                go.TextBlock,
                { margin: 8, editable: true }, // some room around the text
                new go.Binding("text").makeTwoWay()
            )
        )
        diagram.nodeTemplate = $(
            TreeNode,
            { movable: false, copyable: false, deletable: false }, // user cannot move an individual node
            // no Adornment: instead change panel background color by binding to Node.isSelected
            {
                selectionAdorned: false,
                background: "white",
                mouseEnter: (e, node) => (node.background = "aquamarine"),
                mouseLeave: (e, node) => (node.background = "white")
            },
            new go.Binding("background", "isSelected", (s) => (s ? "skyblue" : "white")).ofObject(),
            // whether the user can start drawing a link from or to this node depends on which group it's in
            new go.Binding("fromLinkable", "group", (k) => k === -1),
            new go.Binding("toLinkable", "group", (k) => k === -2),
            $(
                "TreeExpanderButton", // support expanding/collapsing subtrees
                {
                    width: 14,
                    height: 14,
                    "ButtonIcon.stroke": "white",
                    "ButtonIcon.strokeWidth": 2,
                    "ButtonBorder.fill": "goldenrod",
                    "ButtonBorder.stroke": null,
                    "ButtonBorder.figure": "Rectangle",
                    _buttonFillOver: "darkgoldenrod",
                    _buttonStrokeOver: null,
                    _buttonFillPressed: null
                }
            ),
            $(
                go.Panel,
                "Horizontal",
                { position: new go.Point(16, 0) },
                // // optional icon for each tree node
                // $(
                //   go.Picture,
                //   {
                //     width: 14,
                //     height: 14,
                //     margin: new go.Margin(0, 4, 0, 0),
                //     imageStretch: go.GraphObject.Uniform,
                //     source: "images/defaultIcon.png",
                //   },
                //   new go.Binding("source", "src")
                // ),
                $(go.TextBlock, new go.Binding("text", "key", (sitem) => "item "))
            ) // end Horizontal Panel
        ) // end Node

        // These are the links connecting tree nodes within each group.

        diagram.linkTemplate = $(go.Link) // without lines

        diagram.linkTemplate = // with lines
            $(
                go.Link,
                {
                    selectable: false,
                    routing: go.Link.Orthogonal,
                    fromEndSegmentLength: 4,
                    toEndSegmentLength: 4,
                    fromSpot: new go.Spot(0.001, 1, 7, 0),
                    toSpot: go.Spot.Left
                },
                $(go.Shape, { stroke: "lightgray" })
            )

        // These are the blue links connecting a tree node on the left side with one on the right side.
        diagram.linkTemplateMap.add(
            "Mapping",
            $(
                MappingLink,
                {
                    isTreeLink: false,
                    isLayoutPositioned: false,
                    layerName: "Foreground"
                },
                { fromSpot: go.Spot.Right, toSpot: go.Spot.Left },
                { relinkableFrom: true, relinkableTo: true },
                $(go.Shape, { stroke: "blue", strokeWidth: 2 })
            )
        )
        function updateNodeWidths(
            group: {
                memberParts: {
                    each: (arg0: {
                        (n: any): void;
                        (n: any): void;
                        (n: any): void;
                    }) => void;
                }
            },
            width: number
        ) {
            if (isNaN(width)) {
                group.memberParts.each((n: { width: number }) => {
                    if (n instanceof go.Node) n.width = NaN // back to natural width
                })
            } else {
                let minx = Infinity// figure out minimum group width
                group.memberParts.each((n: { actualBounds: { x: number } }) => {
                    if (n instanceof go.Node) {
                        minx = Math.min(minx, n.actualBounds.x)
                    }
                })
                if (minx === Infinity) return
                const right = minx + width
                group.memberParts.each(
                    (n: { width: number; actualBounds: { x: number } }) => {
                        if (n instanceof go.Node) n.width = Math.max(0, right - n.actualBounds.x)
                    }
                )
            }
        }
        function makeGroupLayout() {
            return $(
                go.TreeLayout, // taken from samples/treeView.html
                {
                    alignment: go.TreeLayout.AlignmentStart,
                    angle: 0,
                    compaction: go.TreeLayout.CompactionNone,
                    layerSpacing: 16,
                    layerSpacingParentOverlap: 1,
                    nodeIndentPastParent: 1.0,
                    nodeSpacing: 0,
                    setsPortSpot: false,
                    setsChildPortSpot: false
                    // after the tree layout, change the width of each node so that all
                    // of the nodes have widths such that the collection has a given width
                    // commitNodes: () => {
                    //   // overriding TreeLayout.commitNodes

                    //   go.TreeLayout.prototype.commitNodes.call(this);
                    //   if (ROUTINGSTYLE === "ToGroup") {
                    //     updateNodeWidths(group, group.data.width || 100);
                    //   }
                    // },
                }
            )
        }
        diagram.groupTemplate = $(
            go.Group,
            "Auto",
            { deletable: false, layout: makeGroupLayout() },
            new go.Binding("position", "xy", go.Point.parse).makeTwoWay(
                go.Point.stringify
            ),
            new go.Binding("layout", "width", makeGroupLayout),
            $(go.Shape, { fill: "white", stroke: "lightgray" }),
            $(
                go.Panel,
                "Vertical",
                { defaultAlignment: go.Spot.Left },
                $(
                    go.TextBlock,
                    { font: "bold 14pt sans-serif", margin: new go.Margin(5, 5, 0, 5) },
                    new go.Binding("text")
                ),
                $(go.Placeholder, { padding: 5 })
            )
        )

        // help create a random tree structure
        function makeTree(
            level: number,
            count: number,
            max: number,
            nodeDataArray:
                | {
                    isGroup: boolean;
                    key: number;
                    text: string;
                    xy: string;
                    width: number;
                }[]
                | { key: any; group: any }[],
            linkDataArray: { from: any; to: any }[],
            parentdata: { key: any; group?: any },
            groupkey: number,
            rootkey: number
        ) {
            const numchildren = Math.floor(Math.random() * 10)
            for (let i = 0; i < numchildren; i++) {
                if (count >= max) return count
                count++
                const childdata: any = { key: rootkey + count, group: groupkey }
                nodeDataArray.push(childdata)
                linkDataArray.push({ from: parentdata.key, to: childdata.key })
                if (level > 0 && Math.random() > 0.5) {
                    count = makeTree(
                        level - 1,
                        count,
                        max,
                        nodeDataArray,
                        linkDataArray,
                        childdata,
                        groupkey,
                        rootkey
                    )
                }
            }
            return count
        }

        // initialize tree on left side
        let root: any = { key: 0, group: -1 }
        nodeDataArray.push(root)
        for (let i = 0; i < 11;) {
            i = makeTree(3, i, 17, nodeDataArray, linkDataArray, root, -1, root.key)
        }

        // initialize tree on right side
        root = { key: 1000, group: -2 }
        nodeDataArray.push(root)
        for (let i = 0; i < 15;) {
            i = makeTree(3, i, 15, nodeDataArray, linkDataArray, root, -2, root.key)
        }
        diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
        return diagram
    }
    function handleModelChange(changes: any) {
        alert("GoJS model changed!")
    }
    return (
        <div>
            <ReactDiagram
                initDiagram={initDiagram}
                divClassName="diagram-component"
                nodeDataArray={nodeDataArray}
                linkDataArray={linkDataArray}
                onModelChange={handleModelChange}
            />
        </div>
    )
}

// import React from 'react'

// interface AppProps {
//   title: string,
//   href: string
// }

// const Hello: React.FC<AppProps> = ({ title, href }) => (
//   <div
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh'
//     }}
//   >
//     <h1>
//       Hello World from <a href={href}>{title}</a>
//     </h1>
//   </div>
// )

// export default Hello