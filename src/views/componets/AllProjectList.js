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
import customItem from './CustomItem'
import { Sync } from '@mui/icons-material'
// import Index from "./CreateNewProject.js"

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

class AllProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          collapsed: false,
          title:""
        }
        this.onContentReady = this.onContentReady.bind(this)
        this.handleopen = this.handleopen.bind(this)
      }
    
      // const handleopen = () =>{

      // }
      onContentReady(e) {
        if (!this.state.collapsed) {
          e.component.expandRow(['EnviroCare'])
          this.setState({
            collapsed: true
          })
        }
      }
      
      handleopen() {
        // this.setState({title: "Hello World"})
        console.log('Hello')
        // window.location.href = "/newitem"
        this.props.history.push("/newitem")
        // < Index/>
      }
      render() {
      
        return (
         
          <Fragment>
            <div className='bg-white main-class'>
            <div className='clearfix '>
            <div className='float-right'>
              <div className='d-flex ' style={{columnGap: "1.5em", marginTop:"15px"}}>
                <button className='btn-Create-New-Project' onClick={() => this.handleopen()} ><Plus size={15}/> Create New Project</button>
              </div>
              
            </div>

          </div>
          <hr></hr>
          <DataGrid
            dataSource={allProjectList}
            showColumnLines= {false}
            showRowLines= {true}
            showBorders={true}
            height={600}
            remoteOperations={true}
            className="data-Grid"
            >
                <MasterDetail
                  enabled={true}
                  component={customItem}
                />
                <FilterRow visible={false} />
                <HeaderFilter visible={false} />
                <SearchPanel visible={true} highlightCaseSensitive={true} />
                <GroupPanel visible={true} className="group-Panel" />
                <Scrolling mode="virtual" />
                <Editing
                  mode="row"
                  allowAdding={true}
                  allowDeleting={true}
                  allowUpdating={true}
                />
                <Grouping autoExpandAll={false} />
                
                <Column
                  dataField="ITEM NAME"
                  caption="PROJECT/ITEM NAME"
                  width="auto"
                  
                />
                <Column
                  dataField="VERSION"
                  caption="VERSION"
                  
                  
                />
                <Column
                  dataField="IN TYPE"
                  caption="IN TYPE"
                
                />
                <Column dataField="IN/OUT FORMAT" caption="IN/OUT FORMAT"  />
                <Column dataField="SCHEDULE" caption="SCHEDULE"  />
                <Column dataField="SYNC STATUS" caption="SYNC STATUS"  />
                
                <Column dataField="ACTIONNAME" caption="ACTION" type="buttons" width="auto" className="text-wrap" >
                
                <Button><span className='btn-Edit'> <Disc size={15}/></span></Button>
                <Button><span className='btn-Edit'>  <FilePlus size={15}/></span></Button>
                <Button><span className='btn-Edit'>  <RefreshCw size={15}/></span></Button>
                <Button><span className='btn-Edit'>  <Edit size={15}/></span></Button>
          
                </Column>
                <Toolbar>
                <Item location="after"
                locateInMenu="auto"
                name="searchPanel">
                </Item>
          
            </Toolbar>
                <Paging
                 defaultPageSize={1}
                  defaultPageIndex={0} />
          </DataGrid>
            </div>
            
          </Fragment>
         
        )
      }
    
     
    }

export default AllProjectList