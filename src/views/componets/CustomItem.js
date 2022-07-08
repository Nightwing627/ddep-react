import React from 'react'
import { DataGrid, Column, Button } from 'devextreme-react/data-grid'
import { allProjectList, projectDescription, companies } from './data.js'
import '../componets/CustomItem.scss'
import CustomTitle from './CustomTitle.js'
import {  BookOpen, Copy, Disc, Edit, FilePlus, RefreshCw } from 'react-feather'
import DataSource from 'devextreme/data/data_source'
import ArrayStore from 'devextreme/data/array_store'
import { ModalFooter, Modal, ModalBody, ModalHeader, Table} from "reactstrap"
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
    this.state = {
      isOpenModal : false
    }
    this.projectDescription = getTasks(this.props.data.key)
    this.editBtn = this.editBtn.bind(this)
    this.viewbtn = this.viewbtn.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.isOpenModal = this.isOpenModal.bind(this)
    this.handleopen = this.handleopen.bind(this)
  }
  onRowPreparedFunction (e) {
    e.rowElement.css({ height: 70, alignItems: "center"})
  }
  editBtn = () => {
    window.location.href = "/projects/edit/62aa1710be609e225d411275"
  }
  viewbtn = () => {
    window.location.href = "/projects/edit/62aa1710be609e225d411275=1?isView=true"
    console.log("first")
  }
  handleopen  ()  {
    this.setState({isOpenModal: true})
 
  }
  isOpenModal  ()  {
   this.setState({isOpenModal: true})
  }
  handleClose  ()  {
    this.setState({isOpenModal: false})
  }
  render() {
    const { isOpenModal } = this.state
    return (
<>
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
                
                <Button  className="btn-Action" onClick={this.viewbtn}><span className='btn-Edit' style={{cursor:"pointer"}}> <Disc size={25}/></span></Button>
                <Button   className="btn-Action"><span className='btn-Edit' style={{cursor:"pointer"}}>  <Copy size={25}/></span></Button>
                <Button  className="btn-Action"><span className='btn-Edit' style={{cursor:"pointer"}}  onClick={this.handleopen}>  <BookOpen size={25}/></span></Button>
                <Button  className="btn-Action" onClick={this.editBtn}><span style={{cursor:"pointer"}} className='btn-Edit'>  <Edit size={25}/></span></Button>
          
                </Column>
        </DataGrid>
        <Modal isOpen={isOpenModal}> 
    <ModalHeader 
     toggle={this.handleClose}
    >
     History
    </ModalHeader>
    <ModalBody >
    <Table >
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody bordered>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</Table>
    </ModalBody>
    
   </Modal> 
   </>
    )
    
  }
}

export default CustomItem