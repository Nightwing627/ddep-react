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
const groupOptions = [
  { value: 'select', label: 'Select' },
  { value: 'bgrs', label: 'BGRS' },
  { value: 'i-rms', label: 'I-RMS' },
  { value: 'global', label: 'Global' }
]

const EditProject = ({ stepper, type }) => {
  const history = useHistory()
  const [validate, setValidate] = useState({ projectCode:'test',
    projectName:''
  })
  const [editApidata, seteditApidata] = useState({
    projectCode: "",
    projectName: "",
    projectDescr:"",
    group:"",
    pj_ID:""
  })
 
  function handleSubmit() {
   
    if  (validate.projectCode !== "" && validate.projectName !== "") {
      history.push("/second-page/List")
    } else {
      console.log("validate project code is  empty")
    }
  }
  function handleChange(event) {
    // const { name, value } = event.target
    // seteditApidata({ ...editApidata, [name]: value })
    seteditApidata(e.target.editApidata)
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
    window.location.href = "/second-page/List"
  }
  return (
    <Fragment>

        <AvForm onSubmit={handleSubmit}>
          <AvGroup>
            <Label for='projectCode'>Project Code <span style={{color:'red'}}>*</span></Label>
            <AvInput name='projectCode' disabled id='projectCode'  placeholder='Project Code' value={editApidata?.projectCode} onChange= { (e) => { handleChange(e) } }  required />
            <AvFeedback>Please enter a valid Project Code!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='projectName'>Project Name <span style={{color:'red'}}>*</span></Label>
            <AvInput name='projectName'  id='projectName' value={editApidata?.projectName}  onChange={ (e) => { handleChange(e) } }  placeholder='Project Name' required />
            <AvFeedback>Please enter a valid Project Name!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='projectDescription'>Project Description</Label>
            <AvInput name='projectDescription' type='textarea' value={editApidata?.projectDescr} rows='8' placeholder='Project Description' id='bprojectDescriptionio'  />
            <AvFeedback>Please enter Project Description!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='sequence'>Sequence</Label>
            <AvInput name='sequence'  placeholder='Sequence'  id='sequence'  />
            <AvFeedback>Please enter a valid Sequence!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='group'>Group</Label>
            <Select
                value={editApidata?.group}
                className='react-select'
                classNamePrefix='select'
                defaultValue={groupOptions[0]}
                options={groupOptions}
                isClearable={false}
              />
            <AvFeedback>Please select a Group</AvFeedback>
          </AvGroup>
          <Button color='primary' type='submit'  onClick={() => handlesave()}>
            Save
          </Button>
        </AvForm>
        
    </Fragment>
  )
}

export default EditProject