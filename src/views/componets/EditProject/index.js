import { React, Fragment, useState, useEffect  } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Button,
  Label
} from "reactstrap"
import { FormHelperText, Grid, Box, Divider, Typography } from "@material-ui/core"
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import '../../../assets/scss/EditProject.scss'
import { useHistory } from "react-router-dom"
import {
  AvForm,
  AvGroup,
  AvField,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvCheckboxGroup,
  AvRadio,
  AvCheckbox
} from 'availity-reactstrap-validation-safe'
import axios from "../../../utility/axios"
const options = [
  { value: 'select', label: 'Select' },
  { value: 'bgrs', label: 'BGRS' },
  { value: 'i-rms', label: 'I-RMS' },
  { value: 'global', label: 'Global' }
]
const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#bcdb9c",
    primary: "#8DC454"
  }
})
const EditProject = ({ stepper, type }) => {
  const history = useHistory()
    const [editApidata, seteditApidata] = useState({
    projectCode: "",
    projectName: "",
    projectDescr:"",
    group:"",
    pj_ID:""
  })
  const [errors, setErrors] = useState({}) 
  const [input, setinput] = useState({
    pname:"",
    pcode:"",
    Sequence:"",
    pdescription:"",
    option:""
  })
  const [pnameError, setPnameError] = useState("")
  const [pcodeError, setpcodeError] = useState("")
  const [desError, setDesError] = useState("")
  const [Sequence, setSequence] = useState("")
  const [optionError, setoptionError] = useState("")
  const validation = () => {
    const val = input
    let flag = true
    // pname
    if (input.pname.trim() === "") {
      flag = false
      setPnameError('Project name is required')
    } else if (special_char.test(input.pname)) {
      flag = false
      setPnameError('valid')
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
    if (input.option) {
      flag = false
      setoptionError('select  is required')
    } else {
      setoptionError('')
    }
    return flag
  }
  function handleSubmit() {
   
    if  (validate.projectCode !== "" && validate.projectName !== "") {
      history.push("/second-page/List")
    } else {
      console.log("validate project code is  empty")
    }
  }
  function handleChange(e, type) {
    // const { name, value } = event.target
    // seteditApidata({ ...editApidata, [name]: value })
    seteditApidata(e.target.editApidata)
    console.log("e", e)
    if (type === "selectBox") {
      setinput({...input, option : e})
    } else {
      const { name, value } = e.target
      setinput({...input, [name]: value})
      console.log(input)
    }  
  }
  const getdata = () => {
    axios
      .get("/project/detail/<project id>")
      .then((res) => {
        if (res.status === 200) {
          const sortedData = res?.data
          const newData = { data: [] }
          
          // window.location.href = "/second-page/List"
        }
      })
      .catch((error) => { console.log("error", error) })
  }
  useEffect(() => {
    getdata()
  }, [])
  const handlesave = () => {
    if (validation()) { 
      window.location.href = "/second-page/List"
    } 
  }
  return (
    // <Fragment>

    //     <AvForm onSubmit={handleSubmit}>
    //       <AvGroup>
    //         <Label for='projectCode'>Project Code <span style={{color:'red'}}>*</span></Label>
    //         <AvInput name='projectCode' disabled id='projectCode'  placeholder='Project Code' value={editApidata?.projectCode} onChange= { (e) => { handleChange(e) } }  required />
    //         <AvFeedback>Please enter a valid Project Code!</AvFeedback>
    //       </AvGroup>
    //       <AvGroup>
    //         <Label for='projectName'>Project Name <span style={{color:'red'}}>*</span></Label>
    //         <AvInput name='projectName'  id='projectName' value={editApidata?.projectName}  onChange={ (e) => { handleChange(e) } }  placeholder='Project Name' required />
    //         <AvFeedback>Please enter a valid Project Name!</AvFeedback>
    //       </AvGroup>
    //       <AvGroup>
    //         <Label for='projectDescription'>Project Description</Label>
    //         <AvInput name='projectDescription' type='textarea' value={editApidata?.projectDescr} rows='8' placeholder='Project Description' id='bprojectDescriptionio'  />
    //         <AvFeedback>Please enter Project Description!</AvFeedback>
    //       </AvGroup>
    //       <AvGroup>
    //         <Label for='sequence'>Sequence</Label>
    //         <AvInput name='sequence'  placeholder='Sequence'  id='sequence'  />
    //         <AvFeedback>Please enter a valid Sequence!</AvFeedback>
    //       </AvGroup>
    //       <AvGroup>
    //         <Label for='group'>Group</Label>
    //         <Select
    //             value={editApidata?.group}
    //             className='react-select'
    //             classNamePrefix='select'
    //             defaultValue={groupOptions[0]}
    //             options={groupOptions}
    //             isClearable={false}
    //           />
    //         <AvFeedback>Please select a Group</AvFeedback>
    //       </AvGroup>
    //       <Button color='primary' type='submit'  onClick={() => handlesave()}>
    //         Save
    //       </Button>
    //     </AvForm>
        
    // </Fragment>
    <>
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
                disabled id='projectCode'
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
      <Button color='primary' type='submit'  onClick={() => handlesave()}>
         Save
     </Button>
            </div>
         </Box>
    </>
  )
}

export default EditProject