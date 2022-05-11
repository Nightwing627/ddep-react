import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"

class EditProject extends React.Component {
  render() {
    return (
   
      <Card>
        <CardHeader >
          <CardTitle>
              <div className=" d-flex"   >
                <Card color="success"
                style={{height:"50px"}}
                    >
                    <CardHeader>
                        <CardTitle  style={{color:"white", marginTop:"-10px" }}>1
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card style={{marginTop:"-10px"}}>
                    <CardHeader>
                        <CardTitle>
                        Edit Project
                        </CardTitle>
                    </CardHeader>
                    </Card>
                {/* <hr className="h-10 bg-black" style={}  ></hr> */}
              </div>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="code">Project Code <span style={{color:"red"}}>*</span></Label>
                  <Input
                    type="text"
                    
                    id="code"
                    placeholder="Project Code "
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="txtname">Project Name *</Label>
                  <Input
                    type="text"
                    id="txtname"
                    placeholder="Project Name"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="description">Project Description*</Label>
                  <Input
                    type="textarea"
                    row="5" 
                    id="description"
                    placeholder="Project Description"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="txtSequence">Sequence *</Label>
                  <Input
                    type="text"
                    
                    id="txtSequence"
                    placeholder="Sequence"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                  <FormGroup>
                      <Label for="group"> Group *</Label>
                      <Input
                        type="select"
                        name="select"
                        id="select"
                        defaultValue={'DEFAULT'}
                        >
                        <option value="--Select--" >--Select--</option>
                        <option value="Test Name(Test Code)" >BGRS</option>
                        <option value="Test Name2(Test Code2)">I-RMS</option>
                        <option value="Test Name3(Test Code3)">Global</option>
                </Input>
                  </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Button.Ripple
                    color="success"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={e => e.preventDefault()}
                  >
                    Save
                  </Button.Ripple>
                 
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default EditProject