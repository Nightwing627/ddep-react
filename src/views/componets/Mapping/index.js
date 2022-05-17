import React, { useState } from "react"
import { Link } from "react-router-dom"
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
  Label,
  Table
} from "reactstrap"
import '../../../assets/scss/Mapping.scss'
import { Stage, Layer, Rect, Text } from 'react-konva'
import Project from "../SecondPage"
import Form from "react-jsonschema-form"

const schema = {
    type: "object",
    properties: {
      "": {
        type: "object",
        properties: {
            "InBound Format": {type: "string"}
        }
      }
    }
  }

const uiSchema = {
    "": {
        "InBound Format": {
        "ui:widget": "textarea",
        "ui:options": {
            rows: 8
          }
      }
    }
  }
  

  const schemaOutBound = {
    type: "object",
    properties: {
      "": {
        type: "object",
        properties: {
            "OutBound Format": {type: "string"}
        }
      }
    }
  }

const uiSchemaOutBound = {
    "": {
        "OutBound Format": {
        "ui:widget": "textarea",
        "ui:options": {
            rows: 8
          }
      }
    }
  }
const log = (type) => console.log.bind(console, type)
const Mapping = () => {
    const [downloadShow, setDownloadShow] = useState(false)
    const [downloadShowOutBound, setDownloadShowOutBound] = useState(false)
    const [isPreviewShown, setPreviewShown] = useState(false)

    function handleBtnUploadClick  () {
        setDownloadShow(true)
        setPreviewShown(true)
    }
    function handleBtnUploadOutBoundClick  () {
        setDownloadShowOutBound(true)
    }

    return (
   
      <Card>
          <CardHeader>
              <CardTitle>
                  Mapping
              </CardTitle>
          </CardHeader>
        <CardBody>
          {/* <Form> */}
            <Row className="inBound-Row">
              <Col sm="6">
                <Row >
                    <Col>
                    <FormGroup>
                        {/* <Form schema={schema}
                            onChange={log("changed")}
                            onSubmit={log("submitted")}
                            onError={log("errors")} uiSchema={uiSchema} /> */}
                         <Label for="outBound">InBound Format </Label>
                         <Input
                            type="textarea"
                            id="inBound"
                            placeholder=" "
                            className="inBound-TextArea"
                        /> 
                    </FormGroup>
                    </Col>
                </Row>
                <Row className="upload-Row">
                    <Col>
                        <div className=" upload-Content ">
                            <FormGroup>
                                <Link
                                    to=""
                                    style={{
                                        display: downloadShow ? "block" : "none"
                                      }}
                                    className="btn-inBound-DownLoadJson"
                                    
                                >
                                    Download JSon
                                </Link>
                        
                            </FormGroup>
                            <FormGroup>
                                <Button.Ripple
                                    color="primary"
                                    type="button"
                                    outline
                                    className="btn-Upload"
                                    onClick={ () => { handleBtnUploadClick() }}
                                >
                                    Upload
                                </Button.Ripple>
                        
                            </FormGroup>
                        </div>
                        
                    </Col>
                
                </Row>
                
              </Col>
              <Col sm="6">
              <Row >
                    <Col>
                    <FormGroup>
                    {/* <Form schema={schemaOutBound}
                            onChange={log("changed")}
                            onSubmit={log("submitted")}
                            onError={log("errors")} uiSchema={uiSchemaOutBound} /> */}
                        <Label for="outBound">OutBound Format </Label>
                        <Input
                            type="textarea"
                            id="outBound"
                            placeholder=" "
                            className="inBound-TextArea"
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <Row className="upload-Row">
                    <Col>
                        <div className=" upload-Content ">
                            <FormGroup>
                                <Link
                                    to=""
                                     style={{
                                        display: downloadShowOutBound ? "block" : "none"
                                      }}
                                    className="btn-outBound-DownLoadJson"
                                    
                                >
                                    Download JSon
                                </Link>
                        
                            </FormGroup>
                            <FormGroup>
                                <Button.Ripple
                                    color="primary"
                                    type="button"
                                    outline
                                    className="btn-Upload"
                                    onClick={ () => { handleBtnUploadOutBoundClick() }}
                                >
                                    Upload
                                </Button.Ripple>
                        
                            </FormGroup>
                        </div>
                        
                    </Col>
                
                </Row>
              </Col>
              <Col sm="8">
                <div className="" style={{border: "1px solid black", height: "1000px" }}>
                {isPreviewShown && <Project/>}
                </div>
              </Col>
              <Col sm="4">
                  <div className="tbl-Content">
                    <Table bordered responsive className="tbl-Data">
                
                        <tbody>
                            <tr>
                                <td style={{fontWeight:"bold", fontSize:"15px"}} colSpan={2}>Properties</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:"bold", fontSize:"15px"}} colSpan={2}>General</td>
                            </tr>
                            <tr>
                                    <td className="td">Item</td>
                                    <td>InitiationBy</td>         
                            </tr>
                            <tr rowSpan={2}>
                                    <td style={{fontWeight:"bold", fontSize:"15px"}} colSpan={2}>Linked Item</td>        
                            </tr>
                            <tr >
                                <td >Key</td>
                                <td>Name</td>
                            </tr>
                            <tr >
                                <td className="td">First Name</td>
                                <td>val1</td>
                            </tr>
                            <tr >
                                <td className="td">Last Name</td>
                                <td>val2</td>
                            </tr>
                            <tr >
                                <td colSpan={2} style={{fontWeight:"bold", fontSize:"15px"}}>Display</td>
                                
                            </tr>
                            <tr >
                                <td className="td">Value</td>
                                <td><div >
                                    <Input style={{border: "0"}} type="text" name="alertsEmail" id="alertsEmail" className="form-control"   defaultValue="{val1},{val2}"/>
                                </div></td>
                            </tr>
                            <tr >
                                <td colSpan={2} style={{fontWeight:"bold", fontSize:"15px"}}>Validation</td>
                                
                            </tr>
                            <tr >
                                <td className="td">is Required?</td>
                                <td><div >
                                    <Input style={{border: "0"}} type="text" name="alertsEmail" id="alertsEmail" className="form-control"   defaultValue="FALSE"/>
                                </div></td>
                            </tr>
                            <tr >
                                <td colSpan={2}>Additional Rules</td>
                                
                            </tr>
                            <tr >
                                <td style={{fontWeight:"bold", fontSize:"15px"}}>Format</td>
                                <td></td>
                            </tr>
                            <tr >
                                <td className="td">TRIM</td>
                                <td><div >
                                    <Input style={{border: "0"}} type="text" name="alertsEmail" id="alertsEmail" className="form-control" defaultValue="FALSE"  />
                                </div></td>
                            </tr>
                            <tr >
                                <td colSpan={2} className="td">Additional Rules</td>
                                
                            </tr>
                        </tbody>

                    </Table> 
                  </div>             
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mt-2"
                    onClick={e => e.preventDefault()}
                  >
                    Save
                  </Button.Ripple>
                 
                </FormGroup>
              </Col>
              
              <Col sm="12">
              <hr/>
                  <div className="d-flex justify-content-between">
                  <FormGroup>
                    <Button.Ripple
                        color="primary"
                        type="submit"
                        className=""
                        onClick={e => e.preventDefault()}
                    >
                        Previous
                    </Button.Ripple>
                 
                  </FormGroup>
                  <FormGroup>
                    <Button.Ripple
                        type="submit"
                        className="btn-Skip"
                        outline
                        onClick={e => e.preventDefault()}
                    >
                        Skip
                    </Button.Ripple>
                 
                  </FormGroup>
                  <FormGroup>
                    <Button.Ripple
                        color="primary"
                        type="submit"
                        className=""
                        onClick={e => e.preventDefault()}
                    >
                    Next
                    </Button.Ripple>
                 
                  </FormGroup>
                  </div>
                
              </Col>
            </Row>
          {/* </Form> */}
        </CardBody>
      </Card>
    )
}
export default Mapping