import React from 'react'
import { Container, Col, CardBody, Input, Label, Row } from 'reactstrap'
// import "@core/scss/newprojectadd.scss"
import Select from "react-select"
import Checkbox from '@mui/material/Checkbox'
// import FormControlLabel from "@mui/material/FormControlLabel"
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

const NewProject = () => {
    
  return (
    <div>
        <h5>
        Create New Project
        </h5>
        <Container>
            <Row>
            <Col xs="4"  className="project-text">
                <Label className="form-text">
                Project Name
                    <span className="valid_star">*</span>
                </Label>
                <Input
                fullWidth
                name='pname'
                // helperText={errors.pname}
                // value={input.pname}
                onChange={(e) => handleChange(e)}
                variant="outlined"/>
                {/* {validation.pname && <p>{validation.pname}</p>} */}
            </Col>
            <Col xs="4"  className="project-text">
                <Label className="form-text">
                Project Name
                    <span className="valid_star">*</span>
                </Label>
                <Input
                fullWidth
                name='pname'
                // helperText={errors.pname}
                // value={input.pname}
                onChange={(e) => handleChange(e)}
                variant="outlined"/>
                {/* {validation.pname && <p>{validation.pname}</p>} */}
            </Col>
            <Col xs="4"  className="project-text">
                <Label className="form-text">
                Project Name
                    <span className="valid_star">*</span>
                </Label>
                <Input
                fullWidth
                name='pname'
                // helperText={errors.pname}
                // value={input.pname}
                onChange={(e) => handleChange(e)}
                variant="outlined"/>
                {/* {validation.pname && <p>{validation.pname}</p>} */}
            </Col>
            </Row>
  </Container>
  <hr />
  <Container>
            <Row>
            <Col xs="12"  className="project-text">
            <Select  options={options}  theme={theme}  className="React"/>
            </Col>
            </Row>
            <hr />
            <h5>
       Alerts
        </h5>
        <Checkbox  label="Label" defaultChecked color="success" />
        <Checkbox  label="Label" defaultChecked color="success" />
  </Container>
    </div>
  )
}

export default NewProject