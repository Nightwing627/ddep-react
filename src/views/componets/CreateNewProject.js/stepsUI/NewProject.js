import React, {useState} from 'react'
import {
  Container,
  Col,
  CardBody,
  Input,
  Label,
  Row,
  Form,
  FormGroup,
  Button,
  CustomInput
} from 'reactstrap'
// import "@core/scss/newprojectadd.scss"
import Select from 'react-select'
import { Check, Star } from "react-feather"
import "../Newitem.scss"
import { connect, useDispatch } from "react-redux"
import { itemsDetailsDataStore } from "@store/actions/itemDetails"
import { useParams } from 'react-router-dom'
const NewProject = (props) => {
  const dispatch = useDispatch()
  const urls = window.location.href
  const [value, setValue] = useState()
  const [has, paramss] = urls?.split("projects")[1]?.split("?")
  const paramsObj = Object.fromEntries(new URLSearchParams(paramss))
  const params = useParams()
  const [input, setinput] = useState({
    Exchangename:"",
    ExchangeDescription:"",
    Version:""
  })
  const [ExchangenameError, setExchangenameError] = useState("")
  const [ExchangeDescriptionError, setExchangeDescriptionError] = useState("")
  const [VersionError, setVersionError] = useState("")
  const [errors, setErrors] = useState({}) 

  const handlesave = () => {
    localStorage.setItem("key", "input")
    console.log("input", input)
  }
  const validation = () => {
    const val = input
    let flag = true

    // Exchangename
    if (input.Exchangename.trim() === "") {
      flag = false
      setExchangenameError('Exchange Name is required')
    }  else {
      setExchangenameError('')
    }
    // Exchange Description
    if (input.ExchangeDescription.trim() === "") {
      flag = false
      setExchangeDescriptionError('Exchange Description  is required')
    } else {
      setExchangeDescriptionError('')
    }

    // Version
    if (input.Version.trim() === "") {
      flag = false
      setVersionError('Version  is required')
    }  else {
      setVersionError('')
    }
 
    return flag
  }
 const saveAndNext = (isTrue) => {
   console.log("isTrue", isTrue)
   if (isTrue) {
    props.stepper.next()
   } else if (validation()) {
    props.stepper.next()
    const passData = { basic : input }
    dispatch(itemsDetailsDataStore(passData))

  }
 }
  const handleChange = (e) => {
    const { name, value } = e.target
    setinput({...input, [name]: value})
  }
  console.log("errors", props?.itemDetailsData)
  return (
    <div>
      <Container>
      <h5 className='font-item item-wrap'>{params?.id ?  "Edit item" : "Create New item"}</h5>
        <Row className="mb-2">
          <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
             Exchange Name 
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              // value={apiData?}
              name="Exchangename"
              // helperText={errors.pname}
              value={input.Exchangename}
              onChange={(e) => { handleChange(e); setExchangenameError("") }}
              variant="outlined"
              disabled={props?.isDisable} 
            />
            <span className='text-danger'>{ExchangenameError}</span>
          </Col>
          <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
            Exchange Description
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              name="ExchangeDescription"
              disabled={props?.isDisable} 
                // helperText={errors.pname}
              value={input.ExchangeDescription}
              onChange={(e) => { handleChange(e);  setExchangeDescriptionError("") }}
              variant="outlined"
            />
            <span className='text-danger'>{ExchangeDescriptionError}</span>
          </Col>
          <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
            Version
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              name="Version"
              // helperText={errors.pname}
              // value={input.pname}
              disabled={props?.isDisable} 
              onChange={(e) => { handleChange(e); setVersionError("") }}
              variant="outlined"
            />
            <span className='text-danger'>{VersionError}</span>
          </Col>
        </Row>
      
        
        {/* <h5 className='font-item alerts'>Alerts</h5> */}
        {/* <FormGroup className=''>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        </FormGroup> */}
        {/* <Form>
          <CustomInput
            inline
            type="checkbox"
            id="Inbound Successful"
            label="Inbound Successful"
            defaultChecked
            color="primary"
          />
          <CustomInput
            inline
            type="checkbox"
            id="Inbound Fail"
            label="Inbound Fail"
            color="primary"
          />         
          <CustomInput
            inline
            type="checkbox"
            id="Outbound Successful"
 
            label="Outbound Successful "
            defaultChecked
            color="primary"
          />        
          <CustomInput
            inline
            type="checkbox"
            id="Outbound Fail"
            label="Outbound Fail"
            color="primary"
          />
          
        </Form> */}
        {/* <br />
        <Row>
          <Col xs="1" className="project-text item-wrap">
            <Label className="form-text font-item">
             Send Email To
             
              <span className="valid_star">*</span>
            </Label>
            </Col>
             <Col xs="4">
            <Input
              fullWidth
              name="pname"
              // helperText={errors.pname}
              // value={input.pname}
              onChange={(e) => handleChange(e)}
              variant="outlined"
              placeholder="xxxx@xxx.com"
            />
            {/* {validation.pname && <p>{validation.pname}</p>} */}
          {/* </Col>
        </Row> */} 
        {props?.isDisable ?  "" :  <Button className="btn-relief " color="primary" onClick={() => handlesave()}>
            Save
       </Button>}
          <hr/>
      </Container>
      <div className="d-flex justify-content-between prev-next-btn-block">
          <Button color="primary" disabled>
         Previous
          </Button>
          <Button
            color="primary"
            className="ml-1"
            onClick={() => saveAndNext(props?.isDisable)}
          >
            Next  
          </Button>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  itemDetailsData : state.itemDetails.itemDetails
})

const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(NewProject)
