import React, { Fragment } from 'react'

import ODataStore from 'devextreme/data/odata/store'

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Button,
  Paging,
  SearchPanel, Toolbar, Item, ColumnChooser
} from 'devextreme-react/data-grid'
import './ProjectList.scss'
// import { Select } from '@mui/material'
import { projectList } from './data.js'
// import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent, Select, MenuItem, InputLabel, FormControl} from '@mui/material'
import {FormGroup, Input} from 'reactstrap'
import { Activity, BookOpen, ChevronDown, Copy, Disc, Download, Edit, File, Plus, Settings, Upload } from 'react-feather'

const pageSizes = [2, 10, 25, 50, 100]

class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          collapsed: false
        }
        this.onContentReady = this.onContentReady.bind(this)
      }
    
      
      render() {
        function renderShow() {
          return <div className="toolbar-label " style={{margin:"10px"}}>Show</div>
        }

        function renderEntries() {
          return <div className="toolbar-label">entries</div>
        }
        return (
          
          <Fragment>
            <div className='bg-white'>
            <div className='clearfix bg-white'>
            <div className='float-right'>
              <div className='d-flex ' style={{columnGap: "1.5em", marginTop:"15px"}}>
             
               <FormControl  style={{border: "1px solid"}} sx={{  minWidth: 120 }} size="medium">
                  <InputLabel id="select-import"><Download size={20} style={{paddingRight:"5px"}}/>Import</InputLabel>
                    <Select
                      labelId="select-import"
                      id="select-import"
                      // value={age}
                      label="Import"
                      // onChange={handleChange}
                    >
                    
                      <MenuItem value={10}> 
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <File size={15} />
                          <div style={{paddingLeft:"5px"}}>XML</div>
                        </div>
                      </MenuItem>
                      
                      <MenuItem value={10}> 
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <File size={15} />
                          <div style={{paddingLeft:"5px"}}>CVS</div>
                        </div>
                      </MenuItem>
                      
                      <MenuItem value={10}> 
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <File size={15} />
                          <div style={{paddingLeft:"5px"}}>Excel</div>
                        </div>
                      </MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{border: "1px solid"}} sx={{  minWidth: 120 }} size="medium">
                  <InputLabel   id="select-export"><Upload size={20} style={{paddingRight:"5px"}}/>Export</InputLabel>
                    <Select
                    outlined
                      labelId="select-export"
                      id="select-export"
                      variant="outlined"
                      // value={age}
                      label="Import"
                      // onChange={handleChange}
                    >
                    
                      <MenuItem value={10}> 
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <File size={15} />
                          <div style={{paddingLeft:"5px"}}>XML</div>
                        </div>
                      </MenuItem>
                      
                      <MenuItem value={10}> 
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <File size={15} />
                          <div style={{paddingLeft:"5px"}}>CVS</div>
                        </div>
                      </MenuItem>
                      
                      <MenuItem value={10}> 
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <File size={15} />
                          <div style={{paddingLeft:"5px"}}>Excel</div>
                        </div>
                      </MenuItem>
                    </Select>
                </FormControl>
                <button className='btn-Create-New-Project' ><Plus size={15}/> Create New Project</button>
              </div>
              
            </div>

          </div>
          <hr></hr>
            <DataGrid
            dataSource={projectList}
            allowColumnReordering={true}
            rowAlternationEnabled={true}
            showBorders={true}
            // defaultColumns={columns}
            
            groupIndex={0}
            onContentReady={this.onContentReady}
          >
            
               <ColumnChooser enabled={true} />
            <GroupPanel visible={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Grouping autoExpandAll={false} />
    
            <Column dataField="COMPANY" caption="COMPANY" groupIndex={0} />
            <Column
              dataField="COMPANY"
              caption="COMPANY"
              
            />
            <Column
              dataField="PROJECTCODE"
              caption="PROJECTCODE"
              
            />
            <Column
              dataField="LASTRUNSTATUS"
              caption="LASTRUNSTATUS"
             
            />
            <Column dataField="LASTRUNDATE" caption="LASTRUNDATE" dataType="date" />
            
            
            <Column dataField="ACTION" caption="ACTION" type="buttons" width="auto" className="text-wrap" >
            
            <Button><span className='btn-Edit'> <Settings size={15}/> Test</span></Button>
            <Button><span className='btn-Edit'> <BookOpen size={15}/> History</span></Button>
            <Button><span className='btn-Edit'> <Edit size={15}/> Edit</span></Button>
            <Button><span className='btn-Edit'> <Copy size={15}/> Copy</span></Button>
            <Button><span className='btn-Edit'> <Disc size={15}/> Active</span></Button>
       
            </Column>
            <Toolbar>
         
                <Item location="before"
                render={renderShow}></Item>
                <Item location="before"
                widget="dxSelectBox">
                </Item>
                <Item location="before"
                render={renderEntries}></Item>
                <Item location="after"
                locateInMenu="auto"
                name="searchPanel">
                </Item>
          
            </Toolbar>
            {/* <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} /> */}
            <Paging
                    defaultPageSize={4}
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

export default ProjectList