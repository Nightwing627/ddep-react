import React, { useState } from 'react'
import { CustomInput, Container, Row, Col, Label, Input, Form, Button } from 'reactstrap'
import NumberInput from "@components/number-input"
import Flatpickr from "react-flatpickr"
import Timepicker from "@components/Time/Timepicker"
import Datepickers from '@components/Time/Datepickers'
const Occursevery = () => {
    const [startingDate, setstartingDate] = useState(new Date())
    const [startingTime, setStartingTime]  = useState(new Date())
    const [radioValue, setradioValue] = useState("")
    return ( 
        <>
        <div>
           <Container>
               <Row className="mb-1 mt-1">
                   <Col xs="2">
                     <NumberInput/>
                   </Col>
                   <Col xs="2">
                   <Input
                    variant="outlined"
                    id="exampleSelect"
                    name="Select"
                    type="select"
                    >
                    <option className='select-box-option'>
                       hours
                            </option>
                            <option className='select-box-option'>
                             minutes
                            </option >
                           
                     </Input> 
                   </Col>
               </Row>
               <Row className="mb-1">
                   <Col xs="2">
                   Starting at
                   </Col>
                   <Col xs="4">
                  {/* <Flatpickr
                    data-enable-time
                    value={startingTime}
                    onChange={([date]) => {
                        setStartingTime(date)
                    }}
                    />  */}
               <Timepicker value={startingTime}  onChange={([date]) => {
                     setStartingTime(date)
                    }}/> 
                   </Col>
               </Row>
               <Row className="mb-1">
                   <Col xs="2">
                   Ending at
                   </Col>
                   <Col xs="4">
                   <Timepicker value={startingTime}  onChange={([date]) => {
                     setStartingTime(date)
                    }}/> 
                   </Col>
               </Row>
               <hr />
               <Row className="mb-1">
                   <Col xs="12">
                   duration
                   </Col>
                   <Col xs="2" className="mt-1">
                   Start date
                   </Col>
                   <Col xs="4">
                   <Datepickers value={startingDate}  onChange={([date]) => {
                     setstartingDate(date)
                    }}/> 
                   </Col>
               </Row>
               <Row className="">
               <CustomInput
                            type="radio"
                            label="End Date"
                            color="primary" 
                            id="End Date"
                            defaultChecked={false}
                            name="user_type"
                            className="ml-1 mb-1"
                            value="Enddate"
                            onClick={(e) => {
                                setradioValue("Enddate")
                            }}
                        
                        />  
                            <CustomInput
                            type="radio"
                            label="No end date"
                            color="primary" 
                            id=" No end date"
                            defaultChecked={false}
                            name="user_type"
                            className="ml-1"
                            value="Noenddate"
                            onClick={(e) => {
                                setradioValue("Noenddate")
                            }}
                        /> 
               </Row>
               <div>
                    {radioValue === "Enddate" ? <Container>
                        <Row>
                            <Col xs="6">
                            <Datepickers value={startingDate}  onChange={([date]) => {
                     setstartingDate(date)
                    }}/>
                            </Col>
                        </Row>
                    </Container>  : radioValue === "Noenddate" ? "" : ""  }
               </div>
           </Container>
        </div>
        </>
    )
    }
const Recurring = () => {
    const [startingDate, setstartingDate] = useState(new Date())
    const [startingTime, setStartingTime]  = useState(new Date())
    const [radioValue, setradioValue] = useState("")
    
    return (
        <>
         <div>
             <Container>
                 <Row className="mb-2">
                     <Col xs="12">
                        Frequency
                     </Col>
                 </Row>
                 <Row className="mb-2">
                     <Col xs="2">
                     <Label className="form-text font-item input-wrap mt-1">
                     Occurs
                     
                    </Label>
                     </Col>
                     <Col xs="9">
                         <Form>
                        <Input
                            variant="outlined"
                            id="exampleSelect"
                            name="Select"
                            type="select"
                        >
                            <option className='select-box-option'>
                            Daily
                            </option>
                            <option className='select-box-option'>
                              Weekly
                            </option >
                            <option className='select-box-option'>
                            Monthly
                            </option >
                     </Input> 
                    </Form>
                     </Col>
                 </Row>
                 <Row>
                     <Col xs="2">
                     <Label className="form-text font-item input-wrap mt-1">
                         Recurs every
                    </Label>
                     </Col>
                     <Col xs="2">
                         <NumberInput/>
                          {/* <Button className="" color="primary" onClick={(e) => handledecrease(e)} > - </Button>
                          <span>{count}</span>
                          <Button className="" color="primary" onClick={(e) => handleiecrease(e)}> + </Button> */}
                     </Col>
                     <Col>
                        <span>day(s)</span>
                     </Col>
                 </Row>
                 <hr />
                 <Row className="mb-2">
                     <Col xs="2">
                          <spna>Daly frequency</spna>
                     </Col>
                 </Row>
                 <Row>
                     <Col xs="2">
                           <CustomInput
                            type="radio"
                            label="Occurs once at"
                            color="primary" 
                            id="Occurs once at"
                            defaultChecked={false}
                            name="user_type"
                            className="ml-1 mb-1"
                            value="Occursonceat"
                            onClick={(e) => {
                                setradioValue("Occursonceat")
                            }}
                        
                        />  
                            <CustomInput
                            type="radio"
                            label="Occurs every"
                            color="primary" 
                            id="Occurs every"
                            defaultChecked={false}
                            name="user_type"
                            className="ml-1"
                            value="Occursevery"
                            onClick={(e) => {
                                setradioValue("Occursevery")
                            }}
                        /> 
                     </Col>

                 </Row>
             </Container>
                <div>
                    {radioValue === "Occursonceat" ? <Container>
                        <Row className="mt-1">
                            
                            <Col xs="5">
                            <Timepicker value={startingTime}  onChange={([date]) => {
                     setStartingTime(date)
                    }}/> 
                            </Col>
                        </Row>
                    </Container> : radioValue === "Occursevery" ? < Occursevery/> : ""  }
               </div>
         </div>
        </>
    )
}

const Schedule = () => {
    const [startingDate, setstartingDate] = useState(new Date())
    const [startingTime, setStartingTime]  = useState(new Date())
    const [radioValue, setradioValue] = useState("")
    return (
        <>
          <div>
             <Container style={{borderBottom:"1px solid #efefef"}}>
                 <Row className="mt-1 mb-2">
                     <Col xs="2">
                     <Label className="form-text font-item input-wrap mt-1">
                         UTC
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
                 <Row className="mt-1 mb-2" >
                     <Col xs="2">
                     <Label className="form-text font-item input-wrap mt-1">
                     Schedule Type
                    </Label>
                     </Col>
                     <Col xs="9">
                    <div className='d-flex mt-1'>
                     <CustomInput
                        type="radio"
                        label="Recurring "
                        color="primary" 
                        id="Recurring"
                        defaultChecked={false}
                        name="user_type"
                        className="ml-1"
                        value="recurring"
                        onClick={(e) => {
                            setradioValue("recurring")
                        }}
                         />  
                        <CustomInput
                        type="radio"
                        label="One Time"
                        color="primary" 
                        id="One Time"
                        defaultChecked={false}
                        name="user_type"
                        className="ml-1"
                        value="onetime"
                        onClick={(e) => {
                            setradioValue("onetime")
                        }}
                         />  
                    </div>
                    
                     </Col>
                    
                 </Row>
                
             </Container>
             <div>
                    {radioValue === "recurring" ? < Recurring /> : radioValue === "onetime" ? <Container >
                        <Row className="mt-2">
                            <Col xs="2">
                            One-time Occurrence
                            </Col>
                            <Col xs="4">
                            <Datepickers value={startingDate}  onChange={([date]) => {
                     setstartingDate(date)
                    }}/>
                            </Col>
                            <Col xs="4">
                            <Timepicker value={startingTime}  onChange={([date]) => {
                     setStartingTime(date)
                    }}/>
                            </Col>
                        </Row>
                    </Container> : ""  }
                </div>
          </div>
        </>
    )
}


const Inboundformate = () => {
    const [radioValue, setradioValue] = useState("")
  return (
    <>
        <div>
        <div className='d-flex'>
        <CustomInput
        type="radio"
        label="Schedule"
        color="primary" 
        id="schedule"
        defaultChecked={false}
        name="user_type"
        className="ml-1"
        value="schedule"
        onClick={(e) => {
            setradioValue("schedule")
        }}
       
      />  
        <CustomInput
        type="radio"
        label="Click By User"
        color="primary" 
        id="Click By User"
        defaultChecked={false}
        name="user_type"
        className="ml-1"
        value="Onetime"
        onClick={(e) => {
            setradioValue("One Time")
        }}
       
      /> 
         </div>
        <div>
        
        {radioValue === "schedule" ? <Schedule /> : radioValue === "Clickbyuser" ? "" : ""  }
        </div>  
        </div>
    </>
  )
}

export default Inboundformate