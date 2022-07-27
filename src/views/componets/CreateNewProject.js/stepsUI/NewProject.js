import React, {useEffect, useState} from 'react'
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
import axios from "../../../../utility/axios"
const NewProject = (props) => {
  const dispatch = useDispatch()
  const urls = window.location.href
  const [value, setValue] = useState()
  const [has, paramss] = urls?.split("projects")[1]?.split("?")
  const paramsObj = Object.fromEntries(new URLSearchParams(paramss))
  const params = useParams()
  const [input, setinput] = useState({
    ItemCode : props?.apiData?.basic?.ItemCode || "",
    ExchangeName : props?.apiData?.basic?.ItemName || "",
    ExchangeDescription:"",
    CompanyName: props?.apiData?.basic?.CompanyName || "",
    Version:""
  })
 useEffect(() => {
  setinput({
    ItemCode : props?.apiData?.basic?.ItemCode || "",
    ItemName : props?.apiData?.basic?.ItemName || "",
    ExchangeDescription:"",
    CompanyName: props?.apiData?.basic?.CompanyName || "",
    Version:""
  })
  console.log("props?.apiData?", input)
 }, [props?.apiData])
  const [ItemNameError, setItemNameError] = useState("")
  const [ItemCodeError, setItemCodeError] = useState("")
  const [CompanyNameError, setCompanyNameError] = useState("")
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
console.log("input", input)
    // Exchangename
    if (input.ItemName.trim() === "") {
      flag = false
      setItemNameError('Item Name is required')
    }  else {
      setItemNameError('')
    }

    if (input.ItemCode.trim() === "") {
      flag = false
      setItemCodeError('Item Code is required')
    }  else {
      setItemCodeError('')
    }
    // Company Name
    if (input.CompanyName.trim() === "") {
      flag = false
      setCompanyNameError('Company Name is required')
    } else {
      setCompanyNameError('')
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
    // props.stepper.next()
    
   } else if (validation()) {
     const bodyFormData = new FormData()
    bodyFormData.append('ProjectCode', input?.ItemCode)
    if (params?.id) {
      props.stepper.next()
      const passData = { basic : input }
      dispatch(itemsDetailsDataStore(passData))
    }  else {
      axios
      .post("/projects/checkcodeexist", bodyFormData)
      .then((res) => {
        if (res.status === 200) {
          // const sortedData = res
          // const newData = { data: [] }
          // setApiDate(sortedData)
          console.log("c,", res?.data)
          if (res?.data === true) {
            props.stepper.next()
            const passData = { basic : input }
            dispatch(itemsDetailsDataStore(passData))
          } else {
            setItemCodeError('Item Code already exist')
          }
        }
      })
      .catch((error) => { console.log("error", error) })
    }
    }  
   }
  
 
  const handleChange = (e) => {
    const { name, value } = e.target
    setinput({...input, [name]: value})
  console.log("sd", name)
  }
  // console.log("errors", props?.itemDetailsData)
  return (
    <div>
      <Container>
      <h5 className='font-item item-wrap'>{params?.id ?  "Edit item" : "Create New item"}</h5>
        <Row className="mb-2">
        <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
             Item Code 
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              // value={apiData?}
              name="ItemCode"
              // helperText={errors.pname}
              value={input.ItemCode}
              onChange={(e) => { handleChange(e); setItemCodeError("") }}
              variant="outlined"
              disabled={props?.isDisable || params?.id} 
            />
            <span className='text-danger'>{ItemCodeError}</span>
          </Col>
          <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
             Item Name 
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              // value={apiData?}
              name="ItemName"
              // helperText={errors.pname}
              value={input.ItemName}
              onChange={(e) => { handleChange(e); setItemNameError("") }}
              variant="outlined"
              disabled={props?.isDisable} 
            />
            <span className='text-danger'>{ItemNameError}</span>
          </Col>
          <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
            Item Description
            
            </Label>
            <Input
              fullWidth
              name="ExchangeDescription"
              disabled={props?.isDisable} 
                // helperText={errors.pname}
              value={input.ExchangeDescription}
              onChange={(e) => { handleChange(e) }}
              variant="outlined"
            />
            
          </Col>
          {/* <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
            Company Name
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              name="CompanyName"
              // helperText={errors.pname}
              value={input.CompanyName}
              disabled={props?.isDisable} 
              onChange={(e) => { handleChange(e); setCompanyNameError("") }}
              variant="outlined"
            />
            <span className='text-danger'>{setCompanyNameError}</span>
          </Col> */}
        </Row> 
        <Row className="mb-2">
        <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
            Company Name
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              name="CompanyName"
              // helperText={errors.pname}
              value={input.CompanyName}
              disabled={props?.isDisable} 
              onChange={(e) => { handleChange(e); setCompanyNameError("") }}
              variant="outlined"
            />
            <span className='text-danger'>{setCompanyNameError}</span>
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
          {/* <Col xs="4"></Col> */}
        </Row>     
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
