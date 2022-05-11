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
          collapsed: false
        //  history: this.props
        }
        this.onContentReady = this.onContentReady.bind(this)
        this.onRowPreparedFunction = this.onRowPreparedFunction.bind(this)
        this.nextBtn = this.editBtn.bind(this)
      }
    onRowPreparedFunction (e) {
      e.rowElement.css({ height: 70, alignItems: "center"})
    }
    editBtn = () => {
      window.location.href = "/Edit"
    }
      
      render() {
      
        return (
          
          <Fragment>
            <div className='bg-white main-class'>
            <div className='clearfix '>
            <div className='float-right'>
              <div className='d-flex ' style={{columnGap: "1.5em", marginTop:"15px"}}>
             
                <button className='btn-Create-New-Project' ><Plus size={15}/> Create New Project</button>
              </div>
              
            </div>

          </div>
          <hr></hr>
          <DataGrid
            dataSource={allProjectList}
            showColumnLines= {false}
            showRowLines= {true}
            showBorders={true}
            height="auto"
            onRowPrepared={this.onRowPreparedFunction}
            remoteOperations={true}
            className="data-Grid"
            location="center"
            
            
            >
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
                  dataField="PROJECTNAME"
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
                
                <Button className="btn-Action"><span className='btn-Edit'> <Disc size={25}/></span></Button>
                <Button  className="btn-Action"><span className='btn-Edit'>  <FilePlus size={25}/></span></Button>
                <Button  className="btn-Action"><span className='btn-Edit'>  <RefreshCw size={25}/></span></Button>
                <Button onClick={this.editBtn} className="btn-Action"><span className='btn-Edit'>  <Edit size={25}/></span></Button>
          
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