import React from 'react'
import { Button } from "reactstrap"
import { PlayCircle } from 'react-feather'
import Outboundformat from './Outboundformat'
import AppCollapse from "@components/app-collapse"
import Apifile from './apifile'

const collapseItems = [
  {
    id: 1,
    title: "Inbound Format",
    content: <Outboundformat/>
  },
  {
    id: 2,
    title: "Synchronize Configure",
    content: < Apifile/>
  }
]

const Outbound = (props) => {
    const saveAndNext = () => {
            props.stepper.next()
        }
        
  return (
    <>
    <div>
    <div className="d-flex justify-content-between inbound">
        <span>  Outbound</span>
      <Button
          color="primary"
           outline  >
          <PlayCircle size={15} />
         Active
        </Button>

      </div>
       <AppCollapse
          data={collapseItems}
          accordion
          active={0}
        /> 
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

export default Outbound