import React from 'react'
import { DataGrid, Column, Button } from 'devextreme-react/data-grid'
import { allProjectList, projectDescription, companies } from './data.js'
import '../componets/CustomItem.scss'
import CustomTitle from './CustomTitle.js'
import {  BookOpen, Copy, Disc, Edit, FilePlus, RefreshCw } from 'react-feather'
import DataSource from 'devextreme/data/data_source'
import ArrayStore from 'devextreme/data/array_store'

const childArray = localStorage.getItem('projectFullData')
function getTasks(key) {
  return new DataSource({
    store: new ArrayStore({
      data:  JSON.parse(childArray),
      key: 'ID'
    }),
    filter: ['id', '=', key]
  })
}

class CustomItem extends React.Component {
  constructor(props) {
    super(props)
    this.projectDescription = getTasks(this.props.data.key)
    this.editBtn = this.editBtn.bind(this)
  }
  onRowPreparedFunction (e) {
    e.rowElement.css({ height: 70, alignItems: "center"})
  }
  editBtn = () => {
    window.location.href = "/newitem?orderCode=1"
  }
  render() {
    
    return (

      <DataGrid
        dataSource={this.projectDescription}
        // dataSource={JSON.parse(childArray)}
        showBorders={false}
        showRowLines={true}
        showColumnLines={false}
       className='child-Data-Grid'
       onRowPrepared={this.onRowPreparedFunction}
      >
                <Column
                  // dataField="ITEM NAME"
                  dataField="itemName"
                  caption="PROJECT/ITEM NAME"
                  width="auto"
                  cssClass="col-field"
                  alignment="center"
                  allowHiding={true}
                  // cssClass="child-Data-Grid"
                />
               
                <Column
                  dataField="version"
                 
                  
                />
                <Column
                  dataField="inboundType"
                
                />
                <Column dataField="inboundFormat"   />
                <Column dataField="scheduleDescr"   />
                <Column dataField="SYNC STATUS"   />
                
                <Column dataField="ACTIONNAME"  type="buttons" width="auto" className="text-wrap" alignment="center" >
                
                <Button className="btn-Action"><span className='btn-Edit'> <Disc size={25}/></span></Button>
                <Button  className="btn-Action"><span className='btn-Edit'>  <Copy size={25}/></span></Button>
                <Button  className="btn-Action"><span className='btn-Edit'>  <BookOpen size={25}/></span></Button>
                <Button  className="btn-Action" onClick={this.editBtn}><span className='btn-Edit'>  <Edit size={25}/></span></Button>
          
                </Column>
        </DataGrid>
     
    )
  }
}

export default CustomItem