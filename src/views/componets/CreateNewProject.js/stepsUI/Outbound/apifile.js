import React from 'react'
import { Container, Row, Button, Label, Input, Col } from 'reactstrap'

const Apifile = () => {
  return (
    <>
    <div>
    <Container>
    <Row className="mb-4">
          <Col xs="2">
            <Label className="form-text font-item input-wrap mt-1">
              Api
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
    </Container>
    </div>
    </>
  )
}

export default Apifile