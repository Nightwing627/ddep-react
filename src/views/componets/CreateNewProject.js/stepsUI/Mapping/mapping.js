import React, { useEffect, useState } from "react"
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
  Form,
  Button,
  Label,
  Table
} from "reactstrap"
import '../../../../../assets/scss/Mapp.scss'
import  TreeMapper from "../../typescript/map.tsx"
// import  { TreeNode } from "../../typescript/map.tsx"

const InboundJson = {
    BGRSFileNumber:"8392165",
    ClientParentCompany:"10362",
    BGRSConsultantFirstName:"Jane",
    BGRSConsultantPhone:"987-654-3210",
    bgrsconsultantemail:"jane.doe@bgrs.com",
    PendingStartDate:"2020-07-22T00:00:00",
    PendingEndDate:"2020-07-22T00:00:00",
    Assignee:{
  FirstName:"Peter",
  LastName:"Bell",
  MobilePhone:"",
  OfficePhone:"2134569877",
  HomeDestinationPhone:null,
  OfficeDestinationPhone:null,
  email:"psmith@gmail.com",
  MaritalStatus:"Married",
  Citizenship:"American",
  JobTitle:"VP",
  IsSOX:true
    }
  }

  const OutboundJson =  {
    InitiationBy:{
        OrderCode:"dxfgfg",
        InitiationBy:"",
        Email:"",
        PhoneCountryIdd:"",
        PhoneCityIdd:"",
        Phone:"",
        MobileCountryIdd:"",
        MobileCityIdd:"",
        Mobile:"",
        FaxCountryIdd:"",
        FaxCityIdd:"",
        Fax:"",
        CompanyReference:"",
        SuppressWFEmailToHRFg:""
    },
    InitiationTransferee:{
        FirstName:"",
        LastName:"",
        Email:"",
        OriginMobilePhone:"",
        OriginPhone:"",
        DestinationPhone:"",
        MaritalStatus:"",
        AssignmentDateFrom:"",
        AssignmentDateTo:"",  
        Nationality:"",
        DestinationNewPosition:""
    }

}
const Mappings = () => {
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
          <Form>
            <Row className="inBound-Row">
              <Col sm="6">
                <Row >
                    <Col>
                    <FormGroup>
                         <Label for="inBound">InBound Format </Label>
                         <Input
                            type="textarea"
                             id="inBound"
                             defaultValue ={JSON.stringify(InboundJson)}
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
                        <Label for="outBound">OutBound Format </Label>
                        <Input
                            type="textarea"
                            id="outBound"
                            placeholder=" "
                            className="inBound-TextArea"
                            defaultValue ={JSON.stringify(OutboundJson)}
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
                <div className="" style={{border: "1px solid black" }}>
                <TreeMapper/>
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
             
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
}
export default Mappings