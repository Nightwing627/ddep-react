import React from 'react'
import DataGrid from 'devextreme-react/data-grid'
import { allProjectList, projectDescription, companies } from './data.js'
import '../componets/CustomItem.scss'
import CustomTitle from './CustomTitle.js'
const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi'

class customItem extends React.Component {
  constructor(props) {
    super(props)
    this.projectDescription = allProjectList
    this.state = {
      selectedItems: [this.projectDescription[0]],
      multiple: false,
      collapsible: false,
      animationDuration: 300
    }
    this.selectionChanged = this.selectionChanged.bind(this)
    this.selectedItemsChanged = this.selectedItemsChanged.bind(this)
    this.multipleChanged = this.multipleChanged.bind(this)
    this.collapsibleChanged = this.collapsibleChanged.bind(this)
    this.animationDurationChanged = this.animationDurationChanged.bind(this)
  }

  render() {
    const {
      selectedItems, multiple, collapsible, animationDuration
    } = this.state
    return (
      <div id="accordion">
        {this.projectDescription.map(item => {
          // console.log(item.PROJECTNAME)
          return <div style={{marginBottom:"10px"}}>{item.PROJECTNAME}</div>
        })}
    
      </div>
    )
  }

  selectionChanged(e) {
    let newItems = [...this.state.selectedItems]
    e.removedItems.forEach((item) => {
      const index = newItems.indexOf(item)
      if (index >= 0) {
        newItems.splice(index, 1)
      }
    })
    if (e.addedItems.length) {
      newItems = [...newItems, ...e.addedItems]
    }
    this.setState({
      selectedItems: newItems
    })
  }

  selectedItemsChanged(e) {
    this.setState({
      selectedItems: e.value
    })
  }

  multipleChanged(e) {
    this.setState({
      multiple: e.value
    })
  }

  collapsibleChanged(e) {
    this.setState({
      collapsible: e.value
    })
  }

  animationDurationChanged(e) {
    this.setState({
      animationDuration: e.value
    })
  }
}

export default customItem