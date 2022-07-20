import React, { useContext, useEffect, useState } from 'react'
import "../../@core/scss/newprojectadd.scss"
import { Button, Card, CardBody, Input, Label, FormGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { FormHelperText, Grid, Box, Divider, Typography } from "@material-ui/core"
import Select from "react-select"
import HorizontalNonLinearStepper from "./UI/HorizontalNonLinearStepper"
import SweetAlert from "react-bootstrap-sweetalert"
import axios from "../../utility/axios"
const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#bcdb9c",
    primary: "#8DC454"
  }
})

  const options = [
    { value: 'BGRS', label: 'BGRS' },
    { value: 'I-RMS', label: 'I-RMS' },
    { value: 'Global', label: 'Global' }
  ]
const Add = () => {
  const [input, setinput] = useState({
    pname:"",
    pcode:"",
    Sequence:"",
    pdescription:"",
    options: ""
  })
  // const [ ]
  const [pnameError, setPnameError] = useState("")
  const [pcodeError, setpcodeError] = useState("")
  // const [desError, setDesError] = useState("")
  // const [Sequence, setSequence] = useState("")
  const [optionError, setoptionError] = useState("")
  const [alertDetail, setAlertDetails] = useState({
    show: false,
    msg: "",
    success: false
  })
  const [errors, setErrors] = useState({}) 
  const handleChange = (e, type) => {
    console.log("e", e)
    if (type === "selectBox") {
      setinput({...input, options : e})
    } else {
      const { name, value } = e.target
      setinput({...input, [name]: value})
      console.log(input)
    }  
}
  // const SubmitHandler = async (event) => {
    
  //   await axios
  //     .post("/project/item/add")
  //     .then((res) => {
  //       const sortedData = res
  //       console.log("janki", sortedData)
        
  //     })
  //     .catch((error) => { console.log("error", error) })
  // }

  // const getda2ta = () => {
  //   axios
  //     .post("/project/item/add")
  //     .then((res) => {
  //       if (res.status === 200) {
  //         const sortedData = res
  //         const newData = { data: [] }
  //         setApiDate(sortedData)
  //         console.log("first,", sortedData)
  //       }
  //     })
  //     .catch((error) => { console.log("error", error) })
  // }
  // useEffect(() => {
  //   SubmitHandler()
  // }, [])
  const validation = () => {
    const val = input
    let flag = true
    // pname
    if (input.pname.trim() === "") {
      flag = false
      setPnameError('Project name is required')
    } else {
      setPnameError('')
    }
  
    //pcode
    if (input.pcode.trim() === "") {
      flag = false
      setpcodeError('pcode is required')
    } else {
      setpcodeError('')
    }
    //grp
    if (input.options === "") {
      flag = false
      setoptionError('select  is required')
    } else {
      setoptionError('')
    }
    return flag
  }
  // const validation = () => {
  //   const val = input
  //   const error = {}
  //   const flag = true
  //   const special_char = /[^a-zA-Z0-9 ]/
    
  //   const number_valid = /[^0-9]/
  //   //Project Name validation
  //   if (input.pname.trim() === "") {
  //     error.pname = 'Project name is required'
  //     // flag = false
  //   } else if (special_char.test(input.pname)) {
  //     error.pname = "valid"
  //     // flag = false
  //   } else if (!number_valid.test(input.pname)) {
  //     error.pname = "not valid"
  //     // flag = false
  //   }
  //   setErrors(error)
  //   return flag
  // }
  const handleConfirm = () => {
    setAlertDetails({ show: false, msg: "", success: false })
  }
  const handleSubmit = () => {
    // e.preventDefault()

    if (validation()) {
      const payload = {
          projectCode: input?.pcode,
          projectName: input?.pname,
          projectDescr: input?.pdescription,
          group:  input?.options?.value,
          isActive: "1"
      }
      setAlertDetails({
        show: true,
        msg: "Save Successful",
        success: true
      })
      console.log("PAYLOAD", payload)
      axios
      .post("/project/add", payload)
      .then((res) => {
        if (res.status === 200) {
          // const sortedData = res
          // const newData = { data: [] }
          // setApiDate(sortedData)
          console.log("c,", res)
        }
      })
      .catch((error) => { console.log("error", error) })
   }
  
  }
  
      console.log("errors", errors)
  return (
    <>
    
    <SweetAlert
    error={!alertDetail.success}
    success={alertDetail.success}
    show={alertDetail.show}
    timeout= "155000"
    onConfirm={() => handleConfirm()}
  >
    {alertDetail.msg}
  </SweetAlert>
  <div>
  <div className='mb-1'>
      <Breadcrumb>
        <BreadcrumbItem><a href="/projects/project-list">Projects</a></BreadcrumbItem>
        <BreadcrumbItem active>Add</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <Card >
      <CardBody>
          <HorizontalNonLinearStepper />
          <Box className='input-feild'>
          <div>
            <Grid item xs={12} md={12} className="project-text">
                <Label className="form-text">
                    Project Code
                    <span className="valid_star">*</span>
                </Label>
                <Input
                fullWidth
                name='pcode'
                value={input.pcode}
                onChange={(e) => { handleChange(e); setpcodeError("") } }
                variant="outlined"/>
               <span className='text-danger'>{pcodeError}</span>
            </Grid>
            <Grid item xs={12} md={12}  className="project-text">
                <Label className="form-text">
                Project Name
                    <span className="valid_star">*</span>
                </Label>
                <Input
                fullWidth
                name='pname'
                helperText={errors.pname}
                value={input.pname}
                onChange={(e) => { handleChange(e); setPnameError("") }}
                variant="outlined"/>
                <span className='text-danger'>{pnameError}</span>
            </Grid>
            <Grid item xs={12} md={12}   className="project-text">
                <Label className="form-text">
                Project Description
                   
                </Label>
                <Input type="textarea"
                fullWidth
                multiple
                value={input.pdescription}
                name='pdescription'
                onChange={(e) => { handleChange(e) }}
                variant="outlined"/>
                {/* <span className='text-danger'>{desError}</span> */}
            </Grid>
            <Grid item xs={12} md={12}  className="project-text">
                <Label className="form-text">
                Sequence
                </Label>
                <Input
                fullWidth
                name='Sequence'
                value={input.Sequence}
                onChange={(e) => { handleChange(e) }}
                variant="outlined"/>
                {/* <span className='text-danger'>{Sequence}</span> */}
            </Grid>
            <Grid item xs={12} md={12}  className="project-text grp-text">
                
                {/* <DTextField  
                
                fullWidth

  variant="outlined"/> */}
                <FormGroup> 
    <Label for="exampleSelect" className="form-text">
    Group
    </Label>    
    <Select  options={options}  theme={theme}  className="React" onChange={(e) => { handleChange(e, "selectBox"); setoptionError("") }}/>
    <span className='text-danger'>{optionError}</span>
    
  </FormGroup>
    </Grid>
      <Divider />
        <Button color="primary" className="btn-relief " onClick={() => handleSubmit()}>
                    Save
                </Button>
            </div>
         </Box>
      </CardBody>
    </Card>

  </div>
  </>
  )
}

export default Add