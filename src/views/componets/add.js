import React, { useContext, useEffect, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import "../../@core/scss/newprojectadd.scss"
import { Button, Card, CardBody, Input, Label, FormGroup } from 'reactstrap'
import { FormHelperText, Grid, Box, Divider, Typography } from "@material-ui/core"
import Select from "react-select"
import HorizontalNonLinearStepper from "./UI/HorizontalNonLinearStepper"

import axios from "../../utility/axios"
const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#bcdb9c",
    primary: "#8DC454"
  }
})

function handleClick(event) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }
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
  const [desError, setDesError] = useState("")
  const [Sequence, setSequence] = useState("")
  const [optionError, setoptionError] = useState("")
  // const [validation, setvalidation] = useState({
  //   pname:"",
  //   pcode:"",
  //   Sequence:""
  // })
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

    //pdescription
    if (input.pdescription.trim() === "") {
      flag = false
      setDesError('project descrition is required')
    } else {
      setDesError('')
    }
    //Sequence
    if (input.Sequence.trim() === "") {
      flag = false
      setSequence('Sequence is required')
    } else {
      setSequence('')
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
  const handleSubmit = () => {
    // e.preventDefault()

    if (validation()) {
      const payload = [
        {
          projectCode: input?.pcode,
          projectName: input?.pname,
          projectDescr: input?.pdescription,
          group:  input?.options?.value,
          isActive: "1"
      }
      ]
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
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Project
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          onClick={(e) => handleClick(e)}
        >
         Add
        </Link>
       
      ]
      console.log("errors", errors)
  return (
  <div>
       <Stack spacing={2} className="breadcrumb-Top mb-2">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs> 
    </Stack>
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
                onChange={(e) => { handleChange(e); setDesError("") }}
                variant="outlined"/>
                <span className='text-danger'>{desError}</span>
            </Grid>
            <Grid item xs={12} md={12}  className="project-text">
                <Label className="form-text">
                Sequence
                </Label>
                <Input
                fullWidth
                name='Sequence'
                value={input.Sequence}
                onChange={(e) => { handleChange(e); setSequence("") }}
                variant="outlined"/>
                <span className='text-danger'>{Sequence}</span>
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
  )
}

export default Add