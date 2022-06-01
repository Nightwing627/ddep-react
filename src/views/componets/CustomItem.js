import React from 'react'
import { DataGrid, Column, Button } from 'devextreme-react/data-grid'
import { allProjectList, projectDescription, companies } from './data.js'
import '../componets/CustomItem.scss'
import CustomTitle from './CustomTitle.js'
import {  BookOpen, Copy, Disc, Edit, FilePlus, RefreshCw } from 'react-feather'

class CustomItem extends React.Component {
  constructor(props) {
    super(props)
    this.projectDescription = allProjectList
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
        showBorders={false}
        showRowLines={true}
        showColumnLines={false}
        
       className='child-Data-Grid'
       onRowPrepared={this.onRowPreparedFunction}
      >

                <Column
                  dataField="ITEM NAME"
                  caption="PROJECT/ITEM NAME"
                  width="auto"
                  cssClass="col-field"
                  alignment="center"
                  allowHiding={true}
                  // cssClass="child-Data-Grid"
                />
               
                <Column
                  dataField="VERSION"
                 
                  
                />
                <Column
                  dataField="IN TYPE"
                
                />
                <Column dataField="IN/OUT FORMAT"   />
                <Column dataField="SCHEDULE"   />
                <Column dataField="SYNC STATUS"   />
                
                <Column dataField="ACTIONNAME"  type="buttons" width="auto" className="text-wrap" alignment="center" >
                
                <Button className="btn-Action"><span className='btn-Edit'> <Disc size={25}/></span></Button>
                <Button  className="btn-Action"><span className='btn-Edit'>  <Copy size={25}/></span></Button>
                <Button  className="btn-Action"><span className='btn-Edit'>  <BookOpen size={25}/></span></Button>
                <Button  className="btn-Action" onClick={this.editBtn}><span className='btn-Edit'>  <Edit size={25}/></span></Button>
          
                </Column>
        </DataGrid>
      // <div >
      //   {this.projectDescription.map((itemDescription, index) => {
      //     // console.log(item.PROJECTNAME)
      //     return <div key={index}  style={{marginBottom:"10px"}}>{itemDescription.PROJECTNAME}</div>
      //   })}
    
      // </div>
    )
  }
}

export default CustomItem