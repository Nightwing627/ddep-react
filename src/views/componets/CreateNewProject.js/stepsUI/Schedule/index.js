import React from 'react'
import { Button } from 'reactstrap'
import AppCollapse from "@components/app-collapse"
import Inboundformate from './Inboundformate'

const collapseItems = [
    {
      id: 1,
      title: "Inbound Format",
      content: <Inboundformate/>
      
    }
  ]

const Schedule = (props) => {
  return (
      <>
      <div>
      <AppCollapse
          data={collapseItems}
          accordion
          active={0}
        /> 
        </div>
    <div className="d-flex justify-content-between prev-next-btn-block">
    <Button color="primary" onClick={() => props.stepper.previous()}>
     Previous
    </Button>
    <Button
      color="primary"
      className="ml-1"
      
    >
    submit
    </Button>
    
</div>
</>
  )
}

export default Schedule