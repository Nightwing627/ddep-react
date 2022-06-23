import React, { useState } from 'react'
import { Container, Row, Col, Input, Label } from "reactstrap"

const Inputddep = (props) => {
  const [value, setValue] = useState({
    api_ddep_api:props?.sftpData?.inbound_setting?.api_ddep_api
  })
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <>
    <div>
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
              value={value?.api_ddep_api}
              onChange={(e) => handleChange(e)}
              variant="outlined"
              disabled={props?.disabled}
            />
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
    </div>
    </>
  )
}

export default Inputddep