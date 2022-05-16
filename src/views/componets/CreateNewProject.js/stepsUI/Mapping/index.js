import React from 'react'
import { Button } from 'reactstrap'
import Mappings from "./mapping"
const Mapping = (props) => {
    const saveAndNext = () => {
        props.stepper.next()
    }
    
  return (
  <>
  <div>
    < Mappings />
  </div>
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
  </>
    )
}

export default Mapping