import React from 'react'
import { Container, Row, Col, Input, Label, Button } from "reactstrap"
import {  File, Plus, Settings, Upload } from 'react-feather'
const Sftpinfo = () => {
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
                    name="pname"
                    // helperText={errors.pname}
                    // value={input.pname}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
                    />
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
                    // value={input.pname}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
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
                    name="pname"
                    // helperText={errors.pname}
                    // value={input.pname}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
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
                    name="pname"
                    // helperText={errors.pname}
                    // value={input.pname}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
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
                    name="pname"
                    // helperText={errors.pname}
                    // value={input.pname}
                    onChange={(e) => handleChange(e)}
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
                    name="pname"
                    // helperText={errors.pname}
                    // value={input.pname}
                    onChange={(e) => handleChange(e)}
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
                    // value={input.pname}
                    onChange={(e) => handleChange(e)}
                    variant="outlined"
                    />
                  </Col>
                  <Col xs="2">
                  <Button
                    color="primary"
                    outline
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
    </>
  )
}

export default Sftpinfo