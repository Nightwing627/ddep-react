import React, { useState } from 'react'
import { Container, Row, Col, Input, Label, Button, ModalFooter, Modal, ModalBody, ModalHeader } from "reactstrap"
import {  File, Plus, Settings, Upload } from 'react-feather'
import {Treebeard,  decorators} from 'react-treebeard'

const dummyData = [
  { 
  name: 'Document'
  // toggled: true
},
{ 
  name: 'Img'
  // toggled: true  
},
{ 
  name: 'PDF'
  // toggled: true
  
}
]

const Sftpinfo = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [value, setValue] = useState({
    ftp_server_link:  props?.sftpData?.inbound_setting?.ftp_server_link,
    ftp_port: props?.sftpData?.inbound_setting?.ftp_port,
    ftp_login_name: props?.sftpData?.inbound_setting?.ftp_login_name,
    ftp_password:  props?.sftpData?.inbound_setting?.ftp_password,
    is_password_encrypted: props?.sftpData?.inbound_setting?.is_password_encrypted,
    ftp_folder: props?.sftpData?.inbound_setting?.ftp_folder
  })
  // console.log("janu", props)
  const [cursor, setCursor] = useState(false)
  const [data, setData] = useState(dummyData)
  const [input, setinput] = useState({
    ftp_server_link:"",
    ExchangeDescription:"",
    Version:""
  })
  const [linkError, setlinkError] = useState("")
  const [ExchangeDescriptionError, setExchangeDescriptionError] = useState("")
  const [VersionError, setVersionError] = useState("")
  // const [pcodeError, setpcodeError] = useState("")
  // const [desError, setDesError] = useState("")

  const [errors, setErrors] = useState({}) 
  const validation = () => {
    const val = input
    let flag = true
console.log("input", input)

    // Exchangename
    if (input.ftp_server_link.trim() === "") {
      flag = false
      setlink('Exchange Name is required')
    }  else {
      setlink('')
    }
    return flag
  }
 const saveAndNext = () => {
  if (validation()) {
    props.stepper.next()
  }
 }
  const handleChange = (e) => {
    const { name, value } = e.target
    setValue({...input, [name]: value})
  }
  console.log("errors", errors)
  const handleopen = () => {
    setIsOpenModal(true)
 
  }
  const handleClose = () => {
    setIsOpenModal(false)
  }
  // const handleChange = () => {
  //   setValue(e.target.value)
  // }
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
  decorators.Header = Header

 
  return (
    <>
      <div>
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
                    value={value?.ftp_server_link}
                onChange={(e) => { handleChange(e);  setlinkError("") }}
                    variant="outlined"
                    disabled={props?.disabled}
                    />
                    <span className='text-danger'>{linkError}</span>
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
                    name="pname"
                    // helperText={errors.pname}
                    // value={value?.ftp_server_link}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
                    disabled={props?.disabled}
                    />
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
                    value={value?.ftp_port}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
                    disabled={props?.disabled}
                    />
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
                    name="login_name"
                    // helperText={errors.pname}
                    value={value?.ftp_login_name}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
                    disabled={props?.disabled}
                    />
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
                    name="password"
                    // helperText={errors.pname}
                    value={value?.ftp_password}
                    onChange={(e) => handleChange(e)}
                    disabled={props?.disabled}
                    variant="outlined"
                    />
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
                    value={value?.is_password_encrypted}
                    onChange={(e) => handleChange(e)}
                    disabled={props?.disabled}
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
                    name="pname"
                    // helperText={errors.pname}
                    value={value?.ftp_folder}
                    onChange={(e) => handleChange(e)}
                    disabled={props?.disabled}
                    variant="outlined"
                    />
                  </Col>
                  <Col xs="2">
                  <Button
                    color="primary"
                    outline
                    onClick={() => handleopen()}
                >
                    <File size={15} />
                    Select Folder
                </Button>
                  </Col>
              </Row> 
              <Row>
                  <Col xs="12">
                      <Button>
                      Connection test
                      </Button>
                  </Col>
              </Row>
          </Container>
     </div>   
     <Modal isOpen={isOpenModal}> 
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
    
   </Modal> 
    </>
  )
}

export default Sftpinfo