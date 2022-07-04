import React, { useState } from "react"
import {Container, Row, Col, Input, Collapse, Label, Card, CardHeader, CardTitle, CardBody, CustomInput, Button} from "reactstrap"
import NumberInput from "@components/number-input"
import Select from "react-select"
import Timepicker from "@components/Time/Timepicker"
import Datepickers from '@components/Time/Datepickers'
import axios from "../../../../../utility/axios"
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


const Schedule = (props) => {
  const options = [
    { value: 'Dateline Standard Time|UTC-12:00', label: 'Dateline Standard Time|UTC-12:00' },
    { value: 'UTC-11|UTC-11:00', label: 'UTC-11|UTC-11:00' },
    { value: 'Hawaiian Standard Time|UTC-10:00,', label: 'Hawaiian Standard Time|UTC-10:00' },
    { value: 'Alaskan Standard Time|UTC-09:00', label: 'Alaskan Standard Time|UTC-09:00'},
    { value: 'Pacific Standard Time (Mexico)|UTC-08:00', label: 'Pacific Standard Time (Mexico)|UTC-08:00'},
    { value: 'Pacific Standard Time|UTC-08:00', label: 'Pacific Standard Time|UTC-08:00'},
    { value: 'US Mountain Standard Time|UTC-07:00', label: 'US Mountain Standard Time|UTC-07:00'},
    { value: 'Mountain Standard Time (Mexico)|UTC-07:00', label: 'Mountain Standard Time (Mexico)|UTC-07:00'},
    { value: 'Mountain Standard Time|UTC-07:00', label: 'Mountain Standard Time|UTC-07:00'},
    { value: 'Central America Standard Time|UTC-06:00', label: 'Central America Standard Time|UTC-06:00'},
    { value: 'Central Standard Time|UTC-06:00', label: 'Central Standard Time|UTC-06:00'},
    { value: 'Central Standard Time (Mexico)|UTC-06:00', label: 'Central Standard Time (Mexico)|UTC-06:00'},
    { value: 'Canada Central Standard Time|UTC-06:00', label: 'Canada Central Standard Time|UTC-06:00'},
    { value: 'SA Pacific Standard Time|UTC-05:00', label: 'SA Pacific Standard Time|UTC-05:00'},
    { value: 'Eastern Standard Time|UTC-05:00', label: 'Eastern Standard Time|UTC-05:00'},
    { value: 'US Eastern Standard Time|UTC-05:00', label: 'US Eastern Standard Time|UTC-05:00'},
    { value: 'Venezuela Standard Time|UTC-04:30', label: 'Venezuela Standard Time|UTC-04:30'},
    { value: 'Paraguay Standard Time|UTC-04:00', label: 'Paraguay Standard Time|UTC-04:00'},
    { value: 'Atlantic Standard Time|UTC-04:00', label: 'Atlantic Standard Time|UTC-04:00'},
    { value: 'Central Brazilian Standard Time|UTC-04:00', label: 'Central Brazilian Standard Time|UTC-04:00'},
    { value: 'SA Western Standard Time|UTC-04:00', label: 'SA Western Standard Time|UTC-04:00'},
    { value: 'Pacific SA Standard Time|UTC-04:00', label: 'Pacific SA Standard Time|UTC-04:00'},
    { value: 'Newfoundland Standard Time|UTC-03:30', label: 'Newfoundland Standard Time|UTC-03:30'},
    { value: 'E. South America Standard Time|UTC-03:00', label: 'E. South America Standard Time|UTC-03:00'},
    { value: 'Argentina Standard Time|UTC-03:00', label: 'Argentina Standard Time|UTC-03:00'},
    { value: 'SA Eastern Standard Time|UTC-03:00', label: 'SA Eastern Standard Time|UTC-03:00'},
    { value: 'Greenland Standard Time|UTC-03:00', label: 'Greenland Standard Time|UTC-03:00'},
    { value: 'Montevideo Standard Time|UTC-03:00', label: 'Montevideo Standard Time|UTC-03:00'},
    { value: 'Bahia Standard Time|UTC-03:00', label: 'Bahia Standard Time|UTC-03:00'},
    { value: 'UTC-02|UTC-02:00', label: 'UTC-02|UTC-02:00'},
    { value: 'Mid-Atlantic Standard Time|UTC-02:00', label: 'Mid-Atlantic Standard Time|UTC-02:00'},
    { value: 'Azores Standard Time|UTC-01:00', label: 'Azores Standard Time|UTC-01:00'},
    { value: 'Cape Verde Standard Time|UTC-01:00', label: 'Cape Verde Standard Time|UTC-01:00'},
    { value: 'Morocco Standard Time|UTC', label: 'Morocco Standard Time|UTC'},
    { value: 'Coordinated Universal Time|UTC', label: 'Coordinated Universal Time|UTC'},
    { value: 'GMT Standard Time|UTC', label: 'GMT Standard Time|UTC'},
    { value: 'Greenwich Standard Time|UTC', label: 'Greenwich Standard Time|UTC'},
    { value: 'W. Europe Standard Time|UTC+01:00', label: 'W. Europe Standard Time|UTC+01:00'},
    { value: 'Central Europe Standard Time|UTC+01:00', label: 'Central Europe Standard Time|UTC+01:00'},
    { value: 'Romance Standard Time|UTC+01:00', label: 'Romance Standard Time|UTC+01:00'},
    { value: 'Central European Standard Time|UTC+01:00', label: 'Central European Standard Time|UTC+01:00'},
    { value: 'Libya Standard Time|UTC+01:00', label: 'Libya Standard Time|UTC+01:00'},
    { value: 'W. Central Africa Standard Time|UTC+01:00', label: 'W. Central Africa Standard Time|UTC+01:00'},
    { value: 'Namibia Standard Time|UTC+01:00', label: 'Namibia Standard Time|UTC+01:00'},
    { value: 'GTB Standard Time|UTC+02:00', label: 'GTB Standard Time|UTC+02:00'},
    { value: 'Middle East Standard Time|UTC+02:00', label: 'Middle East Standard Time|UTC+02:00'},
    { value: 'Egypt Standard Time|UTC+02:00', label: 'Egypt Standard Time|UTC+02:00'},
    { value: 'Syria Standard Time|UTC+02:00', label: 'Syria Standard Time|UTC+02:00'},
    { value: 'E. Europe Standard Time|UTC+02:00', label: 'E. Europe Standard Time|UTC+02:00'},
    { value: 'South Africa Standard Time|UTC+02:00', label: 'South Africa Standard Time|UTC+02:00'},
    { value: 'FLE Standard Time|UTC+02:00', label: 'FLE Standard Time|UTC+02:00'},
    { value: 'Turkey Standard Time|UTC+02:00', label: 'Turkey Standard Time|UTC+02:00'},
    { value: 'Jerusalem Standard Time|UTC+02:00', label: 'Jerusalem Standard Time|UTC+02:00'},
    { value: 'Jordan Standard Time|UTC+03:00', label: 'Jordan Standard Time|UTC+03:00'},
    { value: 'Arabic Standard Time|UTC+03:00', label: 'Arabic Standard Time|UTC+03:00'},
    { value: 'Kaliningrad Standard Time|UTC+03:00', label: 'Kaliningrad Standard Time|UTC+03:00'},
    { value: 'Arab Standard Time|UTC+03:00', label: 'Arab Standard Time|UTC+03:00'},
    { value: 'E. Africa Standard Time|UTC+03:00', label: 'E. Africa Standard Time|UTC+03:00'},
    { value: 'Iran Standard Time|UTC+03:30', label: 'Iran Standard Time|UTC+03:30'},
    { value: 'Arabian Standard Time|UTC+04:00', label: 'Arabian Standard Time|UTC+04:00'},
    { value: 'Azerbaijan Standard Time|UTC+04:00', label: 'Azerbaijan Standard Time|UTC+04:00'},
    { value: 'Russian Standard Time|UTC+04:00', label: 'Russian Standard Time|UTC+04:00'},
    { value: 'Mauritius Standard Time|UTC+04:00', label: 'Mauritius Standard Time|UTC+04:00'},
    { value: 'Georgian Standard Time|UTC+04:00', label: 'Georgian Standard Time|UTC+04:00'},
    { value: 'Caucasus Standard Time|UTC+04:00', label: 'Caucasus Standard Time|UTC+04:00'},
    { value: 'Afghanistan Standard Time|UTC+04:30', label: 'Afghanistan Standard Time|UTC+04:30'},
    { value: 'Pakistan Standard Time|UTC+05:00', label: 'Pakistan Standard Time|UTC+05:00'},
    { value: 'West Asia Standard Time|UTC+05:00', label: 'West Asia Standard Time|UTC+05:00'},
    { value: 'India Standard Time|UTC+05:30', label: 'India Standard Time|UTC+05:30'},
    { value: 'Sri Lanka Standard Time|UTC+05:30', label: 'Sri Lanka Standard Time|UTC+05:30'},
    { value: 'Nepal Standard Time|UTC+05:45', label: 'Nepal Standard Time|UTC+05:45'},
    { value: 'Central Asia Standard Time|UTC+06:00', label: 'Central Asia Standard Time|UTC+06:00'},
    { value: 'Bangladesh Standard Time|UTC+06:00', label: 'Bangladesh Standard Time|UTC+06:00'},
    { value: 'Ekaterinburg Standard Time|UTC+06:00', label: 'Ekaterinburg Standard Time|UTC+06:00'},
    { value: 'Myanmar Standard Time|UTC+06:30', label: 'Myanmar Standard Time|UTC+06:30'},
    { value: 'SE Asia Standard Time|UTC+07:00', label: 'SE Asia Standard Time|UTC+07:00'},
    { value: 'N. Central Asia Standard Time|UTC+07:00', label: 'N. Central Asia Standard Time|UTC+07:00'},
    { value: 'China Standard Time|UTC+08:00', label: 'China Standard Time|UTC+08:00'},
    { value: 'North Asia Standard Time|UTC+08:00', label: 'North Asia Standard Time|UTC+08:00'},
    { value: 'Malay Peninsula Standard Time|UTC+08:00', label: 'Malay Peninsula Standard Time|UTC+08:00'},
    { value: 'W. Australia Standard Time|UTC+08:00', label: 'W. Australia Standard Time|UTC+08:00'},
    { value: 'Taipei Standard Time|UTC+08:00', label: 'Taipei Standard Time|UTC+08:00'},
    { value: 'Ulaanbaatar Standard Time|UTC+08:00', label: 'Ulaanbaatar Standard Time|UTC+08:00'},
    { value: 'North Asia East Standard Time|UTC+09:00', label: 'North Asia East Standard Time|UTC+09:00'},
    { value: 'Tokyo Standard Time|UTC+09:00', label: 'Tokyo Standard Time|UTC+09:00'},
    { value: 'Korea Standard Time|UTC+09:00', label: 'Korea Standard Time|UTC+09:00'},
    { value: 'Cen. Australia Standard Time|UTC+09:30', label: 'Cen. Australia Standard Time|UTC+09:30'},
    { value: 'AUS Central Standard Time|UTC+09:30', label: 'AUS Central Standard Time|UTC+09:30'},
    { value: 'E. Australia Standard Time|UTC+10:00', label: 'E. Australia Standard Time|UTC+10:00'},
    { value: 'AUS Eastern Standard Time|UTC+10:00', label: 'AUS Eastern Standard Time|UTC+10:00'},
    { value: 'West Pacific Standard Time|UTC+10:00', label: 'West Pacific Standard Time|UTC+10:00'},
    { value: 'Tasmania Standard Time|UTC+10:00', label: 'Tasmania Standard Time|UTC+10:00'},
    { value: 'Yakutsk Standard Time|UTC+10:00', label: 'Yakutsk Standard Time|UTC+10:00'},
    { value: 'Central Pacific Standard Time|UTC+11:00', label: 'Central Pacific Standard Time|UTC+11:00'},
    { value: 'Vladivostok Standard Time|UTC+11:00', label: 'Vladivostok Standard Time|UTC+11:00'},
    { value: 'New Zealand Standard Time|UTC+12:00', label: 'New Zealand Standard Time|UTC+12:00'},
    { value: 'UTC+12|UTC+12:00', label: 'UTC+12|UTC+12:00'},
    { value: 'Fiji Standard Time|UTC+12:0', label: 'Fiji Standard Time|UTC+12:0'},
    { value: 'Magadan Standard Time|UTC+12:00', label: 'Magadan Standard Time|UTC+12:00'}
    
  ]
  // const collapseItems = [
  //   {
  //     id: 1,
  //     title: " Inbound Schedule ",
  //     content: <Inboundformate apiData={props?.apiData} disable={props?.isDisable}/>
      
  //   }
  // ]
  const [startingDate, setstartingDate] = useState(new Date())
  const [startingTime, setStartingTime]  = useState(new Date())
 
  const Time = [
      { value: "daily", label: 'Daily' },
      { value: 'Weekly', label: 'Weekly' },
      { value: 'Monthly', label: 'Monthly' }
    ]
    const Timming = [
      { value: ' hours', label: ' hours' },
      { value: ' minutes', label: ' minutes' }
    ]
  // const [startingDate, setstartingDate] = useState(props?.Occursevery?.schedule_setting?.duration_inbound_start_date)
  const [endDate, setEndDate] = useState(props?.Occursevery?.schedule_setting?.duration_inbound_is_end_date)
  // const [startingTime, setStartingTime]  = useState(props?.Occursevery?.schedule_setting?.daily_frequency_every_time_count_end_inbound)
  const [endingTime, setEndingTime] = useState(props?.Occursevery?.schedule_setting?.daily_frequency_every_time_count_start_inbound)
  const [endValue, setendValue] = useState("")
  const [radioValue, setradioValue] = useState("")
  const [recurValue, setrecurValue] = useState("")
  const [ocurValue, setocurValue] = useState("")
  const [collapseID, setcollapseID] = useState(1) 
  const [inValue, setInValue] = useState({ 
    option : ""  })
const handleChange = (e, type) => {
  console.log("e", e)
  if (type === "selectBox") {
    setInValue({...inValue, option : e})
  } else {
    const { name, value } = e.target
    setInValue({...inValue, [name]: value})
  }  
}
const urls = window.location.href
const [has, paramss] = urls?.split("newitem")[1]?.split("?") 
const paramsObj = Object.fromEntries(new URLSearchParams(paramss))
const [optionError, setoptionError] = useState("")
const validation = () => {
  let flag = true
  // console.log("inputValue.inbound_format", inputValue.outbound_format)
  if (inValue.option  === "") {
    flag = false
    setoptionError('select  is required')
  } else {
    setoptionError('')
  }


  return flag
}
const handlesubmit = () => {
   if (validation()) {
     if (paramsObj?.orderCode) {
        console.log("edit api")
     } else {
      const newData = {
        ...props.itemDetailsData,
        invalue : inValue
      }
   console.log("itemDetailsData", newData)
      const payload = [
        {
            type:"basic",
            ProjectId:"",
            ItemCode:"",
            ItemName: newData?.basic?.ExchangeName,
            CompanyName:"", 
            isActive:"1",
            ExchangeDescription: newData?.basic?.ExchangeDescription,
            Version: newData?.basic?.Version
        },
        {   
            type:"inbound",
            item_id: "62ba9dd852964bbc1a80a515",
            inbound_format: newData?.inbound?.inbound_format?.value, 
            sync_type:"API",
            port: newData?.inbound?.ftp_port,
            host: newData?.inbound?.host,
            login_name: newData?.inbound?.ftp_login_name,
            password: newData?.inbound?.ftp_password,
            is_password_encrypted: newData?.inbound?.is_password_encrypted,
            folder: newData?.inbound?.ftp_folder,
            backup_folder:"",
            api_ddep_api: newData?.inbound?.api_ddep_api,
            api_user_api:"",
            api_type:"DDEP_API",
            is_active:"inactive"
        },
        {
            type:"outbound",
            item_id: "62ba9dd852964bbc1a80a515",
            api_url:newData?.outbound?.api_url,
            outbound_format: newData?.outbound?.outbound_format?.value,
            is_active:"Active"
        },
        {
            type: "schedule",
            item_id: "62ba9dd852964bbc1a80a515",
            Schedule_configure_inbound: "schedule",
            schedule_type_inbound: "Recurring",
           one_time_occurrence_inbound_date: "",
            one_time_occurrence_inbound_time: "",
            occurs_inbound: "daily",
            day_frequency_inbound_count: "2",
            day_frequency_outbound_count: "1",
            weekly_frequency_inbound_count: "1",
            weekly_frequency_outbound_count: "1",
            monthly_frequency_day_inbound: "1",
            monthly_frequency_day_inbound_count :"1",
            monthly_frequency_day_outbound: "1",
            monthly_frequency_day_outbound_count: "1",
            monthly_frequency_the_inbound_count: "1",
            monthly_frequency_the_outbound_count: "1",
            daily_frequency_type_inbound: "Occurs Once At",
            daily_frequency_type_outbound: "Occurs Once At",
            daily_frequency_once_time_inbound: "",
            daily_frequency_once_time_outbound: "",
            daily_frequency_every_time_unit_inbound: "hour",
            daily_frequency_every_time_unit_outbound: "hour",
            daily_frequency_every_time_count_inbound: "1",
            daily_frequency_every_time_count_outbound: "1",
            daily_frequency_every_time_count_start_inbound: "",
            daily_frequency_every_time_count_end_inbound: "",
            daily_frequency_every_time_count_end_outbound: "",
            daily_frequency_every_time_count_start_outbound: "",
            Schedule_configure_outbound: "schedule",
            schedule_type_outbound: "Recurring",
            one_time_occurrence_outbound_date: "",
            one_time_occurrence_outbound_time: "",
            occurs_outbound: "daily",
            duration_inbound_start_date: "2022-06-28",
            duration_inbound_is_end_date: "no_end_date",
            duration_inbound_end_date: "",
            duration_outbound_start_date: "",
            duration_outbound_is_end_date: "no_end_date",
            duration_outbound_end_date: "",
            next_date_inbound: "NaN",
            next_date_outbound: "NaN"
        }
    ]
    console.log("add api", payload) 
    
        axios
        .post("/project/item/add", payload)
        .then((res) => {
          if (res.status === 200) {
            // const sortedData = res
            // const newData = { data: [] }
            // setApiDate(sortedData)
            console.log("first,", res?.data)
          }
        })
        .catch((error) => { console.log("error", error) })
     }
   
 }

}

  console.log("first", props)
  return (
      <>
      <div>
        <span>Schedule</span>
        <Card className='app-collapse' >
          <CardHeader className='align-items-center' onClick={() => { setcollapseID(1) }}>
            <CardTitle className='collapse-title' style={{color:"blue"}}>{"Inbound Format"}</CardTitle>
          </CardHeader>
          <Collapse isOpen={collapseID === 1}>
              <CardBody>
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
        
      {radioValue === "schedule" ?   <div>
             <Container style={{borderBottom:"1px solid #efefef"}}>
                 <Row className="mt-1 mb-2">
                     <Col xs="2">
                     <Label className="form-text font-item input-wrap mt-1">
                         UTC
                      <span className="valid_star">*</span>
                    </Label>
                     </Col>
                     <Col xs="9">
                     <Select isDisabled={props?.isDisable} onChange={(e) => { handleChange(e, "selectBox"); setoptionError("") }}  options={options}  theme={theme}   className="React" style={{zIndex:10}}
    value= {options && options?.find((op) => { return op.value === props?.Recurring?.schedule_setting?.occurs_inbound })
  }
  />
  <span className="text-danger">{optionError}</span>
                      {/* <Input
                        fullWidth
                        name="pname"
                        // helperText={errors.pname}
                        // value={input.pname}
                        onChange={(e) => handleChange(e)}
                        variant="outlined"
                        /> */}
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
                        style={{  zIndex: '-1' }}
                        onClick={(e) => {
                          setrecurValue("recurring")
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
                        zindex={-1}
                        value="onetime"
                        onClick={(e) => {
                          setrecurValue("onetime")
                        }}
                         />  
                    </div>
                    
                     </Col>
                 </Row>
                
             </Container>
             <div>
                    {recurValue === "recurring" ?     <div>
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
                     <div>
    <Select isDisabled={props?.isDisable}  options={Time}  theme={theme}  className="React"  
  value= {Time && Time?.find((op) => { return op.value === props?.Recurring?.schedule_setting?.occurs_inbound }) 
 }/>
  </div>
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
                          <span>Daly frequency</span>
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
                                setocurValue("Occursonceat")
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
                                setocurValue("Occursevery")
                            }}
                        /> 
                     </Col>

                 </Row>
             </Container>
                <div>
                    {ocurValue === "Occursonceat" ? <Container>
                        <Row className="mt-1">
                            
                            <Col xs="5">
                            <Timepicker disabled={props?.isDisable} value={startingTime}  onChange={([date]) => {
                     setStartingTime(date)
                    }}/> 
                            </Col>
                        </Row>
                    </Container> : ocurValue === "Occursevery" ?  <div>
           <Container>
               <Row className="mb-1 mt-1">
                   <Col xs="2">
                     <NumberInput/>
                   </Col>
                   <Col xs="2">
                   <Select isDisabled={props?.isDisable}  options={Timming}  theme={theme}  className="React" 
    value= {options && options?.find((op) => { return op.value === props?.Occursevery?.schedule_setting?.daily_frequency_every_time_unit_inbound })
  }
  />    
                 
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
                    <Timepicker disabled={props?.isDisable} value={startingTime}  onChange={([date]) => {
                        setStartingTime(date)
                    }}/> 
                   </Col>
               </Row>
               <Row className="mb-1">
                   <Col xs="2">
                   Ending at
                   </Col>
                   <Col xs="4">
                   <Timepicker disabled={props?.isDisable} value={endingTime}  onChange={([date]) => {
                     setEndingTime(date)
                    }}/> 
                   </Col>
               </Row>Occurrence
               <hr />
               <Row className="mb-1">
                   <Col xs="12">
                   duration
                   </Col>
                   <Col xs="2" className="mt-1">
                   Start date
                   </Col>
                   <Col xs="4">
                   <Datepickers disabled={props?.isDisable} value={startingDate}  onChange={([date]) => {
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
                                setendValue("Enddate")
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
                                setendValue("Noenddate")
                            }}
                        /> 
               </Row>
               <div>
                    {endValue === "Enddate" ? <Container>
                        <Row>
                            <Col xs="6">
                            <Datepickers disabled={props?.isDisable} value={endDate}  onChange={([date]) => {
                    setEndDate(date)
                    }}/>
                            </Col>
                        </Row>
                    </Container>  : endValue === "Noenddate" ? "" : ""  }
               </div>
           </Container>
        </div> : ""  }
               </div>
         </div> : recurValue === "onetime" ? <Container >
                        <Row className="mt-2">
                            <Col xs="2">
                            One-time Occurrence
                            </Col>
                            <Col xs="4">
                            <Datepickers disabled={props?.isDisable} value={startingDate}  onChange={([date]) => {
                     setstartingDate(date)
                    }}/>
                            </Col>
                            <Col xs="4">
                            <Timepicker disabled={props?.isDisable} value={startingTime}  onChange={([date]) => {
                     setStartingTime(date)
                    }}/>
                            </Col>
                        </Row>
                    </Container> : ""  }
                </div>
          </div> : radioValue === "Clickbyuser" ? "" : ""  }
        </div>
              </CardBody>
          </Collapse>
          </Card>
        </div>
    <div className="d-flex justify-content-between prev-next-btn-block">
    <Button color="primary" onClick={() => props.stepper.previous()}>
         Previous
    </Button>
    <Button
    onClick={handlesubmit}
      color="primary"
      className="ml-1"
    >
    submit
    </Button>
    
</div>
</>
  )
}
const mapStateToProps = (state) => ({
  itemDetailsData : state.itemDetails.itemDetails
})

const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Schedule)  