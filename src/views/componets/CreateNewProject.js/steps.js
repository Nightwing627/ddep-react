
// const steps = ['Create New Item', 'Inbound', 'Outbound', 'Mapping', "Schedule"] 
import React, { Component, useState } from "react"
import { Card, CardBody } from "reactstrap"
import Stepper from "@components/wizard"
import NewProject from "./stepsUI/NewProject"
import Inbound from './stepsUI/Inbound/Inbound'
import Outbound from './stepsUI/Outbound'

export default function Steps() { 
  const [stepper, setStepper] = useState(null)
  const myRef = React.useRef(null)
  const step = [
    {
      id: "create-new-item",
      title: "Create New Item",
      subtitle: "",
      icon: 1,
       content: <NewProject stepper={stepper} />
    },
    {
      id: "inbound",
      title: "Inbound",
      subtitle: "",
      icon: 2,
      content: <Inbound stepper={stepper} />
    },
    {
      id: "outbound",
      title: "outbound",
      subtitle: "",
      icon: 3,
      // content: "Create New Item"
      content: <Outbound stepper={stepper} />
    },
    {
      id: "mapping",
      title: "Mapping",
      subtitle: "",
      icon: 4,
      content: "Create New Item"
      // content: <Outbound stepper={stepper} />
    },
    {
      id: "Schedule",
      title: "Schedule",
      subtitle: "",
      icon: 5,
      content: "Create New Item"
      // content: <Outbound stepper={stepper} />
    }
  ]
 
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
