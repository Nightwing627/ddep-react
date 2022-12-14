import React, { useState, useEffect } from "react"
import {Modal, ModalBody, ModalHeader, Container, Row, Col, Input, Collapse, Label, Card, CardHeader, CardTitle, CardBody, CustomInput, Button} from "reactstrap"
import classnames from "classnames"
import AppCollapse from "@components/app-collapse"
import Radio from "@components/radio/RadioVuexy"
import Select from "react-select"
import {Treebeard,  decorators} from 'react-treebeard'
import {  File, PlayCircle, Settings, Upload } from 'react-feather'
import { connect, useDispatch } from "react-redux"
import { itemsDetailsDataStore } from "@store/actions/itemDetails"

const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#bcdb9c",
    primary: "#8DC454"
  }
})
// const dummyData = [
//   { 
//   name: 'Document'
//   // toggled: true
// },
// { 
//   name: 'Img'
//   // toggled: true  
// },
// { 
//   name: 'PDF'
//   // toggled: true
  
// }
// ]

// const InboundFormat = (props) => {
//   const [input, setinput] = useState({
//     option:[]
//   })
//   const [optionError, setoptionError] = useState("")
//   const [errors, setErrors] = useState({}) 

//   const handleChange = (e, type) => {
//     console.log("e", e)
//     if (type === "selectBox") {
//       setinput({...input, option : e})
//     } else {
//       const { name, value } = e.target
//       setinput({...input, [name]: value})
//       console.log(input)
//     }  
// }
// const validation = () => {
//     const val = input
//     let flag = true
  
//     if (input.option) {
//       flag = false
//       setoptionError('select  is required')
//     } else {
//       setoptionError('')
//     }
//     return flag
//   }
//     const options = [
//         { value: 'CSV', label: 'CSV' },
//         { value: 'Excel', label: 'Excel' },
//         { value: 'json', label: 'JSON' },
//          { value: 'xml', label: 'XMl'}
//       ] 
// //  console.log("first", props)
//  console.log("errors", errors)
//       return (
//     <div>
//       <Select  isDisabled={props?.disabled} onChange={(e) => { handleChange(e, "selectBox"); setoptionError("") }}  options={options}  theme={theme}  className="React" value= {options && options?.find((op) => { return op.value === props?.apiData?.inbound_setting?.inbound_format })
//     }/>
//     <span className='text-danger'>{optionError}</span>
//     </div>
//   )
// }

// export default InboundFormat
const Inbound = (props) => {
  const dispatch = useDispatch()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [inputValue, setInputValue] = useState({
    inbound_format : props?.apiData?.inbound_setting?.inbound_format || "",
    api_ddep_api:props?.apiData?.inbound_setting?.api_ddep_api || "",
    ftp_server_link:  props?.apiData?.inbound_setting?.ftp_server_link || "",
    ftp_port: props?.apiData?.inbound_setting?.ftp_port || "",
    ftp_login_name: props?.apiData?.inbound_setting?.ftp_login_name || "",
    ftp_password:  props?.apiData?.inbound_setting?.ftp_password || "",
    is_password_encrypted: props?.apiData?.inbound_setting?.is_password_encrypted || "",
    ftp_folder: props?.apiData?.inbound_setting?.ftp_folder || "",
    host : ""
  })
  const [radioValue, setradioValue] = useState("DDEP_API")
  useEffect(() => {
    setInputValue({
      inbound_format : props?.apiData?.inbound_setting?.inbound_format || "",
    api_ddep_api:props?.apiData?.inbound_setting?.api_ddep_api || "",
    ftp_server_link:  props?.apiData?.inbound_setting?.ftp_server_link || "",
    ftp_port: props?.apiData?.inbound_setting?.ftp_port || "",
    ftp_login_name: props?.apiData?.inbound_setting?.ftp_login_name || "",
    ftp_password:  props?.apiData?.inbound_setting?.ftp_password || "",
    is_password_encrypted: props?.apiData?.inbound_setting?.is_password_encrypted || "",
    ftp_folder: props?.apiData?.inbound_setting?.ftp_folder || "",
    host : ""
    })
    console.log("props?.apiData?", props?.apiData)
    setradioValue(props?.apiData?.inbound_setting?.api_type || "DDEP_API")
   }, [props?.apiData])
  console.log("first......", props?.apiData)
  const options = [
   
    { value: 'json', label: 'JSON' },
    { value: 'xml', label: 'XMl'}
  ] 
  const [folderError, setfolderError] = useState("")
  // const [data, setData] = useState(dummyData)
  const [passwordError, setpasswordError] = useState("")
  const [optionError, setoptionError] = useState("")
  const [loginError, setloginError] = useState("")
  const [hostError, sethostError] = useState("")
  const [serverError, setserverError] = useState("")
  const [portError, setportError] = useState("")
  const [apierror, setapierror] = useState("")
  const [collapseID, setcollapseID] = useState([1, 2])

  console.log("radioValue", radioValue)
  // const collapseItems = [
  //   {
  //     id: 1,
  //     title: "Inbound Format",
  //     content: <InboundFormat 
  //     apiData={props.apiData}
  //     disabled={props?.isDisable}
  //     />
  //   },
  //   {
  //     id: 2,
  //     title: "Synchronize Configure",
  //     content: < Ddepapi apiData={props.apiData} 
  //     disabled={props?.isDisable} />
  //   }
  // ]
  // const handleopen = () => {
  //   setIsOpenModal(true)
  // }
  // const handleClose = () => {
  //   setIsOpenModal(false)
  // }
  const handleChange = (e, type) => {
    // console.log("e", e)
    if (type === "selectBox") {
      setInputValue({...inputValue, inbound_format : e})
    } else {
      const { name, value } = e.target
      setInputValue({...inputValue, [name]: value})
    }  
  }
  const validation = () => {
    let flag = true
    // console.log("inputValue.inbound_format", inputValue.inbound_format)
    if (inputValue.inbound_format  === "") {
      flag = false
      setoptionError('This field is required.')
    } else {
      setoptionError('')
    }
    console.log("dghjshjfgds", radioValue)
    if (radioValue === "DDEP_API")  {
      // DDEPAPI
      if (inputValue.api_ddep_api.trim() === "") {
        flag = false
        setapierror('This field is required.')
      } else {
        setapierror('')
      }
    } else {
       // server
    if (inputValue.ftp_server_link.trim() === "") {
      flag = false
      setserverError('This field is required.')
    } else {
      setserverError('')
    }
    // host
    if (inputValue.host.trim() === "") {
      flag = false
      sethostError('This field is required.')
    } else {
      sethostError('')
    }
    // port
    if (inputValue.ftp_port.trim() === "") {
      flag = false
      setportError('This field is required.')
    } else {
      setportError('')
    }

    // login
    if (inputValue.ftp_login_name.trim() === "") {
      flag = false
      setloginError('This field is required.')
    } else {
      setloginError('')
    }

    // ftp_password
    if (inputValue.ftp_password.trim() === "") {
      flag = false
      setpasswordError('This field is required.')
    } else {
      setpasswordError('')
    }

    // Folder
    if (inputValue.ftp_folder.trim() === "") {
      flag = false
      setfolderError('This field is required.')
    } else {
      setfolderError('')
    }
    }

   
    return flag
  }
  const saveAndNext = (isTrue) => {
    
    console.log("isTrue", isTrue)
    if (isTrue) {
     props.stepper.next()
    } else if (validation()) {
     props.stepper.next()
     const passData = {
      ...props?.itemDetailsData,
      inbound : inputValue 
     }
    dispatch(itemsDetailsDataStore(passData))
   }
}
console.log("dis", inputValue, props)
console.log("2nd step", props?.itemDetailsData)  
const Header = (props) => {
  return (
    <span className='header-contain'>
      <span className="align-self-center">
        <File style={{height:"16px"}}/>
        {props.node.name}
      </span>
     
    </span>
  )
}  
const handleClick = (id) => {
  const itHas = collapseID.filter((data) => data === id)
  if (itHas.length > 0) {
    const removeData = collapseID.filter((data) => data !== id)
    setcollapseID(removeData)
  } else {
    const addData = [...collapseID]
    addData.push(id)
    setcollapseID(addData)
  }
}
decorators.Header = Header
  return (
    <>
    <div>   
      <div className="d-flex justify-content-between inbound">
        <span>Inbound</span>
      <Button
          color="primary"
           outline >
          <PlayCircle className="mr-1" size={15} />
          Active
        </Button>
      </div>
      {/* <Card className="inbound-comp"> */}
       
       {/* <AppCollapse
          data={collapseItems}
          accordion
          active={0}
        />  */}
        {/* </Card> */}
        <Card className='app-collapse' >
          <CardHeader className='align-items-center' onClick={() => { handleClick(1) }}>
            <CardTitle className='collapse-title' style={{color:"blue"}}>{"Inbound Format"}</CardTitle>
          </CardHeader>
          <Collapse isOpen={collapseID?.includes(1)}>
              <CardBody>
                <Row>
                  <Col md="7">  
                  <Label>
                        Format
                        <span className="valid_star">*</span>
                     </Label>                
              <Select  isDisabled={props?.isDisable} onChange={(e) => { handleChange(e, "selectBox"); setoptionError("") }}  options={options}  theme={theme}  className="React" value= {options && options?.find((op) => { return op.value === inputValue?.inbound_format }) }/> 
              <span className="text-danger">{optionError}</span>
              </Col>
                </Row>
              </CardBody>
          </Collapse>
          <CardHeader className='align-items-center' onClick={() => { handleClick(2) }}>
            <CardTitle className='collapse-title' style={{color:"blue"}}>{"Synchronize Configure"}</CardTitle>
          </CardHeader>
          <Collapse isOpen={collapseID?.includes(2)}>
              <CardBody>
              <>
              <Label className="ml-2 mb-1">
              Synchronize Configure 
                        <span className="valid_star">*</span>
                     </Label> 
                <div className='d-flex'>
            <CustomInput inline
              type="radio"
              label="DDEP API"
              defaultChecked={radioValue === "DDEP_API" }
              checked={radioValue === "DDEP_API" }
              color="primary"
              id="DDEP_API"
             
              name="synchronizeConfigure"
              className="ml-1"
              value="DDEP_API"
              // disabled={props?.isDisable} 
              onClick={(e) => {
                setradioValue("DDEP_API")
            }} 
            
            />   
            <CustomInput
            type="radio"
            label="FTP/SFTP"
            color="primary" 
            // disabled={props?.disabled}
            id="SFTP"
            defaultChecked={radioValue === "FTP/SFTP"}
            name="synchronizeConfigure"
            className="ml-1"
            value="FTP/SFTP"
            onClick={(e) => {
                setradioValue("FTP/SFTP")
            }}
            checked={radioValue === "FTP/SFTP"}
          /> 
            </div>
            <div>
            {/* <AppCollapse
              data={radioValue === "DDEPAPI" ? "dfg" : radioValue === "FTP/SFTP" ? "FTP/SFTP" : ""  }
              accordion
              active={0}
            />  */}
            {radioValue === "DDEP_API" ? <div> 
              <Container>
              <Row >
              <Col xs="3">
              <Label className="form-text font-item input-wrap mt-1">
                DDEP API
                <span className="valid_star">*</span>
              </Label>
              </Col>
              <Col xs="9 " className="mb-2">
                 <Row >
                    <Col xs="6">
                      <Label className="form-text font-item input-wrap mt-1 text-right">
                        https://ddep-a4apple.cn/dapi/irms
                      </Label>
                    </Col>
                    <Col xs="6">
                      <Input
                      fullWidth
                      name="api_ddep_api"
                      // helperText={errors.pname}
                      value={inputValue?.api_ddep_api}
                      onChange={(e) => { handleChange(e); setapierror("") }}
                      variant="outlined"
                      disabled={props?.isDisable}
                    />
                     <span className='text-danger'>{apierror}</span>
                    </Col>
                </Row>
              </Col>
              <Col xs="12">
                  <span className='inbound_text '>
                      Remark:Path where API is exposed, must start with a '/' and must contain any letter, capitalize letter, number, dash or underscore.
                  </span>
              </Col>
              </Row>
              
            </Container>
            </div> : radioValue === "FTP/SFTP" ?  <>
      <div className="mt-3">
          <Container>
              <Row className="mb-4">
                  <Col xs="2">
                    <Label className="form-text font-item input-wrap mt-1">
                        SFTP Server
                        <span className="valid_star">*</span>
                     </Label>
                  </Col>
                  <Col xs="9">
                  <Input
                    fullWidth 
                    name="ftp_server_link" 
                    // helperText={errors.pname}
                    value={inputValue?.ftp_server_link}
                onChange={(e) => { handleChange(e);  setserverError("") }}
                    variant="outlined"
                    disabled={props?.isDisable}
                    />
                    <span className='text-danger'>{serverError}</span>
                  </Col>  
              </Row>
              <Row className="mb-4">
                  <Col xs="2">
                    <Label className="form-text font-item input-wrap mt-1">
                    Host
                        <span className="valid_star">*</span>
                     </Label>
                  </Col>
                  <Col xs="9">
                  <Input
                    fullWidth
                    name="host"
                    // helperText={errors.pname}
                    value={inputValue?.host}
                    onChange={(e) => { handleChange(e);  sethostError("") }}
                    variant="outlined"
                    disabled={props?.isDisable}
                    />
                     <span className='text-danger'>{hostError}</span>
                  </Col>
              </Row>
              <Row className="mb-4">
                  <Col xs="2">
                    <Label className="form-text font-item input-wrap mt-1">
                        Port
                      <span className="valid_star">*</span>
                    </Label>
                  </Col>
                  <Col xs="9">
                  <Input
                    fullWidth
                    name="ftp_port"
                    // helperText={errors.pname}
                    value={inputValue?.ftp_port}
                    onChange={(e) => { handleChange(e); setportError("") }}
                    variant="outlined"
                    disabled={props?.isDisable}
                    />
                     <span className='text-danger'>{portError}</span>
                  </Col>
              </Row>
              <Row className="mb-4">
                  <Col xs="2">
                    <Label className="form-text font-item input-wrap mt-1">
                    Login Name
                        <span className="valid_star">*</span>
                     </Label>
                  </Col>
                  <Col xs="9">
                  <Input
                    fullWidth
                    name="ftp_login_name"
                    // helperText={errors.pname}
                    value={inputValue?.ftp_login_name}
                    onChange={(e) => { handleChange(e); setloginError("") }}
                    variant="outlined"
                    disabled={props?.isDisable}
                    />
                    <span className='text-danger'>{loginError}</span>
                  </Col>
                  
              </Row>
              <Row className="mb-4">
                  <Col xs="2">
                    <Label className="form-text font-item input-wrap mt-1">
                    Password
                        <span className="valid_star">*</span>
                     </Label>
                  </Col>
                  <Col xs="9">
                  <Input
                    fullWidth
                    name="ftp_password"
                    // helperText={errors.pname}
                    value={inputValue?.ftp_password}
                    onChange={(e) => { handleChange(e); setpasswordError("") }}
                    disabled={props?.isDisable}
                    variant="outlined"
                    />
                     <span className='text-danger'>{passwordError}</span>
                  </Col>
                  
              </Row>
              <Row className="mb-4">
                  <Col xs="2">
                    <Label className="form-text font-item input-wrap mt-1">
                    Is Password Encrypted
                    
                     </Label>
                  </Col>
                  <Col xs="9">
                  <Input
                    select
                    fullWidth
                    name=" is_password_encrypted"
                    // helperText={errors.pname}
                    value={inputValue?.is_password_encrypted}
                    onChange={(e) => handleChange(e)}
                    disabled={props?.isDisable}
                    variant="outlined"
                    />
                  </Col>
                  
              </Row>
              <Row className="mb-2">
                  <Col xs="2">
                    <Label className="form-text font-item input-wrap mt-1">
                        Folder
                        <span className="valid_star">*</span>
                     </Label>
                  </Col>
                  <Col xs="7">
                  <Input
                    fullWidth
                    name="ftp_folder"
                    // helperText={errors.pname}
                    value={inputValue?.ftp_folder}
                    onChange={(e) => { handleChange(e); setfolderError("") }}
                    disabled={props?.isDisable}
                    variant="outlined"
                    />
                  </Col>
                  <span className='text-danger'>{folderError}</span>
                  <Col xs="2">
                  {/* <Button
                    color="primary"
                    outline
                    disabled={props?.isDisable}
                    onClick={() => handleopen()}
                >
                    <File size={15} />
                    Select Folder
                </Button> */}
                  </Col>
              </Row> 
              <Row>
                  <Col xs="12">
                      <Button color="primary">
                      Connection test
                      </Button>
                  </Col>
              </Row>
          </Container>
     </div>   
     {/* <Modal isOpen={isOpenModal}> 
    <ModalHeader 
     toggle={() => handleClose()}
    >
     Folder
    </ModalHeader>
    <ModalBody className="treebeard">
     <Treebeard data={data} 
    //  onToggle={onToggle}
     />
    </ModalBody>
    
   </Modal>  */}
    </> : ""  }
            </div>
      
         </>
         </CardBody>
          </Collapse>
        </Card>
    <div className="d-flex justify-content-between prev-next-btn-block">
        <Button color="primary" onClick={() => props.stepper.previous()}>
         Previous
        </Button>
        <Button
          color="primary"
          className="ml-1"
          onClick={() => saveAndNext(props?.isDisable)}
        >
          Next  
        </Button>
    </div>
   </div>
    </>
  )

}

const mapStateToProps = (state) => ({
  itemDetailsData : state.itemDetails.itemDetails
})

const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Inbound)