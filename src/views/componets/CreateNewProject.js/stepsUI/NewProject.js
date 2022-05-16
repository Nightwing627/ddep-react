import React from 'react'
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

const NewProject = (props) => {
 const saveAndNext = () => {
      props.stepper.next()
  }

  return (
    <div>
      
      <Container>
      <h5 className='font-item item-wrap'>Create New Item</h5>
        <Row className="mb-2">
          <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
             Exchange Name
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              name="pname"
              // helperText={errors.pname}
              // value={input.pname}
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
            {/* {validation.pname && <p>{validation.pname}</p>} */}
          </Col>
          <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
            Exchange Description
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              name="pname"
              // helperText={errors.pname}
              // value={input.pname}
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
            {/* {validation.pname && <p>{validation.pname}</p>} */}
          </Col>
          <Col xs="4" className="project-text">
            <Label className="form-text font-item input-wrap">
            Version
              <span className="valid_star">*</span>
            </Label>
            <Input
              fullWidth
              name="pname"
              // helperText={errors.pname}
              // value={input.pname}
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
            {/* {validation.pname && <p>{validation.pname}</p>} */}
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
        
        <Button className="btn-relief " color="primary" >
            Save
       </Button>
                <hr/>
      </Container>
      <div className="d-flex justify-content-between prev-next-btn-block">
          <Button color="primary" disabled>
         Previous
          </Button>
          <Button
            color="primary"
            className="ml-1"
            onClick={() => saveAndNext()}
          >
            Next  
          </Button>
        </div>
    </div>
  )
}

export default NewProject
