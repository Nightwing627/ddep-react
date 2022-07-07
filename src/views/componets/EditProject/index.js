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
import axios from "../../../utility/axios"
const options = [
  { value: 'BGRS', label: 'BGRS' },
  { value: 'I-RMS', label: 'I-RMS' },
  { value: 'Global', label: 'Global' }
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
  const urls = window.location.href
  const [has, paramss] = urls?.split("edit")[1]?.split("?") 
  const paramsObj = Object.fromEntries(new URLSearchParams(paramss))
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
    options:""
  })
  const [pnameError, setPnameError] = useState("")
  const [pcodeError, setpcodeError] = useState("")
  const [desError, setDesError] = useState("")
  const [Sequence, setSequence] = useState("")
  const [optionError, setoptionError] = useState("")
 
  const getdata = () => {
    axios
      .get(`/project/detail/${paramsObj?.pId}`)
      .then((res) => {
        if (res.status === 200) {
          const sortedData = res?.data
          const newData = { data: [] }
          console.log("response", sortedData)
          setinput({
            pname: sortedData?.ProjectName,
            pcode:sortedData?.ProjectCode, 
            Sequence:"",
            pdescription: sortedData?.CompanyName,
            options: sortedData?.group
          })
          // window.location.href = "/second-page/List"
        }
      })
      .catch((error) => { console.log("error", error) })
  }
  useEffect(() => {
    getdata()
  }, [])

  const handleChange = (e, type) => {
    console.log("e", e)
    if (type === "selectBox") {
      setinput({...input, options : e.value})
    } else {
      const { name, value } = e.target
      setinput({...input, [name]: value})
      console.log(input)
    }  
}
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
  const handlesave = () => {
    if (validation()) { 
      // window.location.href = "/second-page/List"
      const payload = 
        {
          projectCode: input?.pcode,
          projectName: input?.pname,
          projectDescr: input?.pdescription,
          group: input?.options,
          isActive: "1"
      }
     
      
      console.log("payload", payload)
      axios
      .post(`/project/modify/${paramsObj?.pId}`, payload)
      .then((res) => {
        if (res.status === 200) {
          // const sortedData = res
          // const newData = { data: [] }
          // setApiDate(sortedData)
          console.log("cz,", res)
        }
      })
      .catch((error) => { console.log("error", error) })
   } else {
      console.log("validate project code is  empty")
    }
  }
  function handleSubmit() {
   
    if  (validate.projectCode !== "" && validate.projectName !== "") {
      history.push("/second-page/List")
     
  }
  
  }
  return (
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
                // disabled id='projectCode'
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
    <Select value={options && options.find((op) => { return op.value === input.options })}  options={options}  theme={theme}  className="React" onChange={(e) => { handleChange(e, "selectBox"); setoptionError("") }}/>
    <span className='text-danger'>{optionError}</span>
    
  </FormGroup>
    </Grid>
      <Divider />
      <Button color='primary' type='submit'  onClick={(e) => handlesave(e)}>
         Save
     </Button>
            </div>
         </Box>
    </>
  )
}

export default EditProject