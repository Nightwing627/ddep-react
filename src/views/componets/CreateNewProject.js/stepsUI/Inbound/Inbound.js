import React, { useState } from "react"
import { Collapse, Label, Card, CardHeader, CardTitle, CardBody, CustomInput, Button} from "reactstrap"
import classnames from "classnames"
import AppCollapse from "@components/app-collapse"
import Radio from "@components/radio/RadioVuexy"
import InboundFormat from './InboundFormat'
import Ddepapi from './Ddepapi'
// import  Playcircle from 'react-feather'
import { PlayCircle } from 'react-feather'

const collapseItems = [
  {
    id: 1,
    title: "Inbound Format",
    content: <InboundFormat/>
  },
  {
    id: 2,
    title: "Synchronize Configure",
    content: < Ddepapi />
  }
]

const Inbound = (props) => {
  const saveAndNext = () => {
        props.stepper.next()
    }
  const [collapseID, setcollapseID] = useState("")
  const [radioValue, setradioValue] = useState("")
  
  return (
    <>
 
    <div>   
      <div className="d-flex justify-content-between inbound">
        <span>  Inbound</span>
      <Button
          color="primary"
           outline  >
          <PlayCircle size={15} />
          Active
        </Button>

      </div>
      <Card className="inbound-comp">
       
       <AppCollapse
          data={collapseItems}
          accordion
          active={0}
        /> 
       
        </Card>
    <div className="d-flex justify-content-between prev-next-btn-block">
        <Button color="primary" onClick={() => props.stepper.previous()}>
         Previous
        </Button>
        <Button
          color="primary"
          className="ml-1"
          onClick={() => saveAndNext()}
        >
          Next  
        </Button>
    </div>
   </div>
    </>
  )

}
export default Inbound