import React, { Fragment } from 'react'

import ODataStore from 'devextreme/data/odata/store'
import {
  Column,
  DataGrid,
  FilterRow,
  HeaderFilter,
  GroupPanel,
  Scrolling,
  Editing,
  Grouping,
  Paging,
  Lookup,
  MasterDetail,
  Button,
  Toolbar,
  Item, SearchPanel
} from 'devextreme-react/data-grid'
import './AllProjectList.scss'
import { allProjectList, projectDescription } from './data.js'
// import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent, Select, MenuItem, InputLabel, FormControl} from '@mui/material'
import {FormGroup, Input} from 'reactstrap'
import { Activity, BookOpen, ChevronDown, Copy, Disc, Download, Edit, File, FilePlus, Plus, RefreshCw, Settings, Upload } from 'react-feather'
import CustomItem from './CustomItem'
import { Sync } from '@mui/icons-material'
import 'devextreme/integration/jquery'
import axios from "../../utility/axios"
// import baseURL from "../../utility/axios"
const pageSizes = [2, 10, 25, 50, 100]

const dataSourceOptions = {
  store: new ODataStore({
    url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
    key: 'Id',
    beforeSend(request) {
      request.params.startDate = '2020-05-10'
      request.params.endDate = '2020-05-15'
    }
  })
}
// const  data = [
//   {
//     pj_ID: "62592d4a5c4b8a9d970b56aa",
//     projectCode: "iRMS-Extrnal-Exchange",
//     projectName: "i-RMS Exteernal Exchange Data",
//     projectDescr:
//       "all External Parties requested integrate data will be added in here",
//     group: "",
//     isActive: "1",
//     createdAt: "2022-04-15T08:31:06.196Z",
//     updatedAt: "2022-05-19T06:42:06.239Z",
//     items: [
//       {
//         item_ID: "62592d715c4b8a9d970b56a1",
//         itemCode: "BGRS-Initiations-Synchronize",
//         itemName: "BGRS Initiations Synchronize",
//         itemDescr: "BGRS will share their business to multiple parties",
//         isActive: "1",
//         version: "1.7",
//         inboundType: "DDEP API",
//         inboundFormat: "JSON",
//         outboundFormat: "JSON",
//         scheduleDescr: "Daily 18:00"
//       },
//       {
//         item_ID: "62592d715c4b8a9d970b5634",
//         itemCode: "BGRS-Initiations",
//         itemName: "BGRS Initiations",
//         itemDescr: "BGRS will share their business to multiple parties",
//         isActive: "1",
//         version: "1.7",
//         inboundType: "DDEP API",
//         inboundFormat: "JSON",
//         outboundFormat: "JSON",
//         scheduleDescr: "Daily 18:00"
//       }
//     ]
//   },
//   {
//     pj_ID: "62592d4a5c4b8a9d970b56ab",
//     projectCode: "iRMS-Exchange",
//     projectName: "i-RMS External Exchange Data",
//     projectDescr:
//       "all External Parties requested integrate data will be added in here",
//     group: "",
//     isActive: "1",
//     createdAt: "2022-04-15T08:31:06.196Z",
//     updatedAt: "2022-05-19T06:42:06.239Z",
//     items: [
//       {
//         item_ID: "62592d715c4b8a9d970b56a1",
//         itemCode: "BGRS-Initiations-Synchronize",
//         itemName: "BGRS Initiations Synchronize",
//         itemDescr: "BGRS will share their business to multiple parties",
//         isActive: "1",
//         version: "1.7",
//         inboundType: "DDEP API",
//         inboundFormat: "JSON",
//         outboundFormat: "JSON",
//         scheduleDescr: "Daily 18:00"
//       },
//       {
//         item_ID: "62592d715c4b8a9d970b5634",
//         itemCode: "BGRS-Initiations",
//         itemName: "BGRS Initiations",
//         itemDescr: "BGRS will share their business to multiple parties",
//         isActive: "1",
//         version: "1.7",
//         inboundType: "DDEP API",
//         inboundFormat: "JSON",
//         outboundFormat: "JSON",
//         scheduleDescr: "Daily 18:00"
//       }
//     ]
//   },
//   {
//     pj_ID: "62592d4a5c4b8a9d970b56ac",
//     projectCode: "iRMS-External",
//     projectName: "i-RMS External Exchange Data",
//     projectDescr:
//       "all External Parties requested integrate data whas maill be added in here",
//     group: "",
//     isActive: "1",
//     createdAt: "2022-04-15T08:31:06.196Z",
//     updatedAt: "2022-05-19T06:42:06.239Z",
//     items: [
//       {
//         item_ID: "62592d715c4b8a9d970b56a1",
//         itemCode: "BGRS-Initiations-Synchronize",
//         itemName: "BGRS Initiations Synchronize",
//         itemDescr: "BGRS will share their business to multiple parties",
//         isActive: "1",
//         version: "1.7",
//         inboundType: "DDEP API",
//         inboundFormat: "JSON",
//         outboundFormat: "JSON",
//         scheduleDescr: "Daily 18:00"
//       },
//       {
//         item_ID: "62592d715c4b8a9d970b5634",
//         itemCode: "BGRS-Initiations",
//         itemName: "BGRS Initiations",
//         itemDescr: "BGRS will share their business to multiple parties",
//         isActive: "1",
//         version: "1.7",
//         inboundType: "DDEP API",
//         inboundFormat: "JSON",
//         outboundFormat: "JSON",
//         scheduleDescr: "Daily 18:00"
//       }
//     ]
//   }
// ]
class AllProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          collapsed: false,
          Allprojectdata:[]  
        //  history: this.props
        }
        this.onContentReady = this.onContentReady.bind(this)
        this.onRowPreparedFunction = this.onRowPreparedFunction.bind(this)
        this.handleopen = this.handleopen.bind(this)
        this.editBtn = this.editBtn.bind(this)
        this.Handleadd = this.Handleadd.bind(this)
      }
    onRowPreparedFunction (e) {
      e.rowElement.css({ height: 70, alignItems: "center"})
    }
    editBtn = () => {
      window.location.href = "/edit" 
    }
    Handleadd = () => {
      window.location.href = "/newitem"
    }  
   
     componentDidMount() {
       axios
          .get(`/project/fulllist`)
          .then((res) => {
            if (res.status === 200) { 
              /*eslint no-var: "error"*/
              /*eslint-env es6*/
              const sortedData = res?.data?.data
              const redesignArray = []
              sortedData?.map((item, index) => {
                const obj = {
                  ...item,
                  ID: item?.pj_ID
                }
                return (
                  redesignArray[index] = obj
                )
              })  
       
              this.setState({ Allprojectdata: redesignArray })  
              /*eslint no-var: "error"*/ 
              /*eslint-env es6*/
              let formattedArray = []
              sortedData.forEach(obj => {
               /*eslint-env es6*/
               
                const subArray = []
                const subArr = obj?.items
               
                subArr.map((subitem, j) => {
                  const object = {
                    ...subitem,
                    id: obj?.pj_ID,
                    ID: j
                  }
                  return  (
                    subArray[j] = object
                  )
                })
                formattedArray = formattedArray.concat(subArray)
              })
              const finalArray = JSON.stringify(formattedArray)
             
              localStorage.setItem('projectFullData', finalArray)
              console.log("res", res)
            }
          })
          .catch((error) => { console.log("error", error); this.setState({ isLoading: false }) })
        }
    handleopen() {
              this.props.history.push("/secondPage/Add")
            }
      render() {
      
      const { Allprojectdata } = this.state
        return ( 
          <Fragment>
            <div className='bg-white main-class'>
            <div className='clearfix '>
            <div className='float-right'>
              <div className='d-flex ' style={{columnGap: "1.5em", marginTop:"15px"}}>
              <button className='btn-Create-New-Project' onClick={() => this.handleopen()} ><Plus size={15}/>Item Page</button>
              </div>
            </div>
          </div>
          <hr></hr>
      
           {/* {Allprojectdata && Allprojectdata.map((item, index) => { 
               return ( */}
                <DataGrid
                  // dataSource={allProjectList}
                  dataSource={Allprojectdata}
                  keyExpr="ID"
                  showColumnLines= {false}
                  showRowLines= {true}
                  showBorders={true}
                  height="auto" 
                  onRowPrepared={this.onRowPreparedFunction}
                  remoteOperations={true}
                  className="data-Grid"
                  location="center"
                  >
                    {/* {console.log('item', item)} */}
                      <MasterDetail
                        enabled={true}
                        component={CustomItem}
                      />
                      <FilterRow visible={false} />
                      <HeaderFilter visible={false} />
                      <SearchPanel visible={true} highlightCaseSensitive={true} />
                      <GroupPanel visible={true} className="group-Panel" />
                      <Scrolling mode="virtual" />
                      <Grouping autoExpandAll={false} />
                      <Column
                        dataField="projectName"
                        caption="PROJECT/ITEM NAME"
                        width="auto"
                        cssClass="col-field"
                        alignment="center"
                      />
                      <Column
                        caption="VERSION"
                      />
                      <Column
                        caption="IN TYPE"
                      />
                      <Column  caption="IN/OUT FORMAT"  />
                      <Column caption="SCHEDULE"  />
                      <Column  caption="SYNC STATUS"  />
                      <Column dataField="" caption="ACTION" type="buttons" width="auto" className="text-wrap" alignment="center" >
                      
                      <Button className="btn-Action"><span className='btn-Edit' style={{cursor:"pointer"}}> <Disc size={25}/></span></Button>
                      <Button  className="btn-Action" onClick={this.Handleadd} style={{cursor:"pointer"}}><span className='btn-Edit'>  <FilePlus size={25}/></span></Button>
                      <Button  className="btn-Action"><span className='btn-Edit' style={{cursor:"pointer"}}>  <RefreshCw size={25}/></span></Button>
                      <Button onClick={this.editBtn} className="btn-Action"><span style={{cursor:"pointer"}} className='btn-Edit'>  <Edit size={25}/></span></Button> 
                
                      </Column>
                      <Toolbar>
                      <Item location="after"
                      locateInMenu="auto"
                      name="searchPanel">
                      </Item>
                  </Toolbar>
                      <Paging
                         defaultPageSize={1}
                         defaultPageIndex={0} 
                      />
                </DataGrid>
                {/* ) 
              })
           }  */}
            </div>
          </Fragment>
         
        )
      }
    
      onContentReady(e) {
        if (!this.state.collapsed) {
          e.component.expandRow(['EnviroCare'])
          this.setState({
            collapsed: true
          })
        }
      }
    }

export default AllProjectList