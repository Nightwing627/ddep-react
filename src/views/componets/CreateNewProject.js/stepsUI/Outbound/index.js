import React, { useState, useEffect } from "react"
import { PlayCircle, Settings } from 'react-feather'
import {Container, Row, Col, Input, Collapse, Label, Card, CardHeader, CardTitle, CardBody, CustomInput, Button} from "reactstrap"
import Select from "react-select"
import  AnimatedModal from 'simple-react-animated-modal'
import 'simple-react-animated-modal/dist/index.css'
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup
} from 'devextreme-react/data-grid'
import { connect, useDispatch } from "react-redux"
import { itemsDetailsDataStore } from "@store/actions/itemDetails"
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
            <Column dataField="options1" caption="Logical Operation" width={140}>
            <Lookup dataSource={options1} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="FirstName" caption="Original Value" width={140}/>
          <Column dataField="options2" caption="Comparison operations" width={165}>
            <Lookup dataSource={options2} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="LastName" caption="Column Value" width={140}/>
        </DataGrid>
        
      </div>
    )
  }
}

const theme = theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#bcdb9c",
      primary: "#8DC454"
      
    }
  })

const Outbound = (props) => {
  const dispatch = useDispatch()
const options = [
  { value: 'CSV', label: 'CSV' },
  { value: 'Excel', label: 'Excel' },
  { value: 'json', label: 'JSON' },
  { value: 'xml', label: 'XMl'}
]
const [inputValue, setInputValue] = useState({
  outbound_format : props?.apiData?.outbound_setting?.outbound_format || "",
  api_url: props?.apiData?.outbound_setting?.api_url || ""
})
const [showModal, setShowModal] = useState(false)
const [collapseID, setcollapseID] = useState(1)
const [optionError, setoptionError] = useState("")
const [APIError, setAPIError] = useState("")
useEffect(() => {
  setInputValue({
    outbound_format : props?.apiData?.outbound_setting?.outbound_format || "",
    api_url: props?.apiData?.outbound_setting?.api_url || ""
  })
  console.log("props?.apiData?", inputValue)
 }, [props?.apiData])

const validation = () => {
  let flag = true
  // console.log("inputValue.inbound_format", inputValue.outbound_format)
  if (inputValue.outbound_format  === "") {
    flag = false
    setoptionError('select  is required')
  } else {
    setoptionError('')
  }
// API
  if (inputValue.api_url.trim() === "") {
    flag = false
    setAPIError('API  is required')
  } else {
    setAPIError('')
  }

  return flag
}
const saveAndNext = (isTrue) => {
  console.log("isTrue", isTrue)
  if (isTrue) {
   props.stepper.next()
  } else if (validation()) {
   props.stepper.next()
   const passData = {
    ...props?.itemDetailsData,
    outbound : inputValue 
   }
  dispatch(itemsDetailsDataStore(passData))
 }
}
const handleChange = (e, type) => {
  console.log("e", e)
  if (type === "selectBox") {
    setInputValue({...inputValue, outbound_format : e})
  } else {
    const { name, value } = e.target
    setInputValue({...inputValue, [name]: value})
  }  
}
console.log("first", props)
  return (
    <>
    <div>
    <div className="d-flex justify-content-between inbound">
        <span>Outbound</span>
      <Button
          color="primary"
           outline  >
          <PlayCircle size={15} />
         Active
        </Button>

      </div>
       {/* <AppCollapse
          data={collapseItems}
          accordion
          active={0}
        />  */}
        <Card className='app-collapse' >
          <CardHeader className='align-items-center' onClick={() => { setcollapseID(1) }}>
            <CardTitle className='collapse-title' style={{color:"blue"}}>{"Outbound Format"}</CardTitle>
          </CardHeader>
          <Collapse isOpen={collapseID === 1}>
              <CardBody>
              <Select  isDisabled={props?.isDisable} onChange={(e) => { handleChange(e, "selectBox"); setoptionError("") }}  options={options}  theme={theme}  className="React" value= {options && options?.find((op) => { return op.value === inputValue?.outbound_format }) }/> 
              <span className="text-danger">{optionError}</span>
              </CardBody>
          </Collapse>
          <CardHeader className='align-items-center' onClick={() => { setcollapseID(2) }}>
            <CardTitle className='collapse-title' style={{color:"blue"}}>{"Synchronize Configure"}</CardTitle>
          </CardHeader>
          <Collapse isOpen={collapseID === 2}>
              <CardBody>
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
              name="api_url"
              disabled={props?.isDisable}
              // helperText={errors.pname}
              value={inputValue?.api_url}
              onChange={(e) => { handleChange(e);  setAPIError("") }}
              variant="outlined"
               />
               <span className='text-danger'>{APIError}</span>
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
    </CardBody>
          </Collapse>
          </Card>
    <div className="d-flex justify-content-between prev-next-btn-block">
        <Button color="primary" onClick={() => props.stepper.previous()}>
         Previous
        </Button>
        <Button
          color="primary"
          className="ml-1"
          onClick={() => saveAndNext(props?.isDisable)}
        >Next  
        </Button>
    </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  itemDetailsData : state.itemDetails.itemDetails
})

const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Outbound)