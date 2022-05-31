import React, { useState } from 'react'
import { Container, Row, Button, Label, Input, Col, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {Settings } from "react-feather"
import Select from "react-select"
import  AnimatedModal from 'simple-react-animated-modal'
import 'simple-react-animated-modal/dist/index.css'
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup
} from 'devextreme-react/data-grid'
import CheckBox from 'devextreme-react/check-box'
import SelectBox from 'devextreme-react/select-box'
const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#bcdb9c",
    primary: "#8DC454"
  }
})
const options1 = [
 { ID: 'AND', Name: 'AND'},
 { ID: 'OR', Name: 'OR'}
]
const options2 = [
  { ID: '=', Name: '=' },
  { ID: '<=', Name: '<=' },
  { ID: '>=', Name: '>=' },
  { ID: '>', Name: '>' },
  { ID: '<', Name: '<' },
  { ID: '<>', Name: '<>' },
  { ID: 'Not In', Name: 'Not In' },
  { ID: 'In', Name: 'In' }

]
const startEditActions = ['click', 'dblClick']

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectTextOnEditStart: true,
      startEditAction: 'click',
      tableData : []
    }
    this.onSelectTextOnEditStartChanged = this.onSelectTextOnEditStartChanged.bind(this)
    this.onStartEditActionChanged = this.onStartEditActionChanged.bind(this)
  }

  onSelectTextOnEditStartChanged(args) {
    this.setState({
      selectTextOnEditStart: args.value
    })
  }

  onStartEditActionChanged(args) {
    this.setState({
      startEditAction: args.value
    })
  }

  render() {
    const { tableData } = this.state
    console.log("tableData", tableData)
    return (
      <div id="data-grid-demo">
       <DataGrid
          dataSource={tableData}
          keyExpr="ID"
          showBorders={true}
        >
          <Paging enabled={false} />
          <Editing
            mode="batch"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
            selectTextOnEditStart={this.state.selectTextOnEditStart}
            startEditAction={this.state.startEditAction} />
            <Column dataField="options1" caption="Logical Operation" width={125}>
            <Lookup dataSource={options1} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="FirstName" caption="Original Value" width={125}/>
          <Column dataField="options2" caption="Comparision Oprator" width={125}>
            <Lookup dataSource={options2} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="LastName" caption="Column Value" width={125}/>
        </DataGrid>
        
      </div>
    )
  }
}

const Apifile = () => {
  
  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <div>
      <Container>
    <Row className="mb-4">
          <Col xs="2">
            <Label className="form-text font-item input-wrap mt-1">
              Api
            <span className="valid_star">*</span>
            </Label>
            </Col>
            <Col xs="8">
             <Input
              fullWidth
              name="pname"
              // helperText={errors.pname}
              // value={input.pname}
              onChange={(e) => handleChange(e)}
              variant="outlined"
               />
              </Col>
              <Col xs="1">
                <Button color="primary" 
                onClick={() => setShowModal(true)}
                >
                    <Settings height="16px"/>
                </Button>
              </Col>    
           </Row> 
           <div className='Animated_Modal'>
     <AnimatedModal
        show={showModal}
        title="Rules To Control this API When trigger"
        onHide={() => setShowModal(false)}
        closeButton={<strong>X</strong>}
        style={{
          backgroundColor: '#fff',
          border: '2px solid #9bcb6b',
          color: '#000',
          boxShadow: '2px 2px 4px #9bcb6b'
        }}
        headStyle={{
          borderBottom: '1px solid white',
          height: '3.2rem'
        }}
      >
        <div className="modal-body">
         < App />
        </div>
      </AnimatedModal>
      </div>
    </Container>
  
    </div>
    </>
  )
}

export default Apifile