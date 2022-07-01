
// const steps = ['Create New Item', 'Inbound', 'Outbound', 'Mapping', "Schedule"] 
import React, { Component, useState, useEffect } from "react"
// import {useEffect} from 'react'
import { Card, CardBody } from "reactstrap"
import Stepper from "@components/wizard"
import NewProject from "./stepsUI/NewProject"
import Inbound from './stepsUI/Inbound/Inbound'

import Outbound from './stepsUI/Outbound'
import Schedule from "./stepsUI/Schedule"
import Mapping from './stepsUI/Mapping'
import axios from "../../../utility/axios"
export default function Steps() { 
  const [stepper, setStepper] = useState(null)
  const myRef = React.useRef(null)  
  const [value, setValue] = useState({
    projectCode: "",
    projectName: "",
    projectDescr:"",
    group:""
  })
  const [apiData, setApiDate] = useState(null)
  const urls = window.location.href
  const [has, paramss] = urls?.split("newitem")[1]?.split("?") 
  const paramsObj = Object.fromEntries(new URLSearchParams(paramss))

  const step = [
    {
      id: "create-new-item",
      title:  paramsObj?.orderCode ?  "Edit" : "Create New Item",
      subtitle: "",
      icon: 1,
       content: <NewProject stepper={stepper} apiData={apiData} isDisable={paramsObj?.isView}/>
    },
    {
      id: "inbound",
      title: "Inbound",
      subtitle: "",
      icon: 2,
      content: <Inbound stepper={stepper} apiData={apiData}  isDisable={paramsObj?.isView}/>
    },
    {
      id: "outbound",
      title: "outbound",
      subtitle: "",
      icon: 3,
      // content: "Create New Item"
      content: <Outbound stepper={stepper}  apiData={apiData} isDisable={paramsObj?.isView}/>
    },
    {
      id: "mapping",
      title: "Mapping",
      subtitle: "",
      icon: 4,
      // content: "Create New Item"
      content: <Mapping stepper={stepper} />
    },
    {
      id: "Schedule",
      title: "Schedule",
      subtitle: "",
      icon: 5,
      content: <Schedule stepper={stepper} apiData={apiData} isDisable={paramsObj?.isView}/>
    }
  ]
  console.log("janki", apiData)

  const getda2ta = () => {
    axios
      .get("/project/item/detail/62592d4a5c4b8a9d970b56aa")
      .then((res) => {
        if (res.status === 200) {
          const sortedData = res?.data?.data
          const newData = { data: [] }
          setApiDate(sortedData)
          console.log("first,", sortedData)
        }
      })
      .catch((error) => { console.log("error", error) })
  }
  useEffect(() => {
    getda2ta()
  }, [])
  return (
  <>
  <div className="box-stepper">
      <Stepper
        type="modern-horizontal"
        options={{ linear: true }}
        instance={(el) => setStepper(el)}
        ref={myRef}
        steps={step}
      />
      </div> 
  </>)
}
