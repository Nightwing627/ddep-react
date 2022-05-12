import React, { useContext, useEffect, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import "../../@core/scss/newprojectadd.scss"
import { Button, Card, CardBody, Input, Label, FormGroup } from 'reactstrap'
import  HorizontalNonLinearStepper from "./UI/HorizontalNonLinearStepper"
import { FormHelperText, Grid, Box, Divider, Typography } from "@material-ui/core"
import Select from "react-select"


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
    Sequence:""
  })
  // const [validation, setvalidation] = useState({
  //   pname:"",
  //   pcode:"",
  //   Sequence:""
  // })
  const [errors, setErrors] = useState({}) 
  const handleChange = (e) => {
  const { name, value } = e.target
  setinput({...input, [name]: value})
  console.log(input)
  }
 
  const validation = () => {
    const val = input
    const error = {}
    const flag = true
    const special_char = /[^a-zA-Z0-9 ]/
    
    const number_valid = /[^0-9]/
    //Project Name validation
    if (input.pname.trim() === "") {
      error.pname = 'Project name is required'
      // flag = false
    } else if (special_char.test(input.pname)) {
      error.pname = "valid"
      // flag = false
    } else if (!number_valid.test(input.pname)) {
      error.pname = "not valid"
      // flag = false
    }
    setErrors(error)
    return flag
  }
  const handleSubmit = () => {
    // e.preventDefault()

    if (validation()) {
      console.log('hello')
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
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    <Card >
      <CardBody >
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
                onChange={(e) => handleChange(e)}
                variant="outlined"/>
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
                onChange={(e) => handleChange(e)}
                variant="outlined"/>
                {/* {validation.pname && <p>{validation.pname}</p>} */}
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
                variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}  className="project-text">
                <Label className="form-text">
                Sequence
                </Label>
                <Input
                fullWidth
                name='Sequence'
                value={input.Sequence}
                onChange={(e) => handleChange(e)}
                variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}  className="project-text grp-text">
                
                {/* <DTextField  
                
                fullWidth

  variant="outlined"/> */}
                <FormGroup> 
    <Label for="exampleSelect" className="form-text">
    Group
    </Label>
    {/* <Input
      id="exampleSelect"
      name="Select"
      type="select"
    className="select-box"
    >
      <option className='select-box-option'>
       --Select--
      </option>
      <option className='select-box-option'>
        BGRS
      </option >
      <option className='select-box-option'>
      I-RMS
      </option >
      <option className='select-box-option'>
         Global
      </option>
    </Input> */}
    
    <Select  options={options}  theme={theme}  className="React"/>
  </FormGroup>
            </Grid>
            <Divider />
                <Button className="btn-relief " onClick={() => handleSubmit()}>
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