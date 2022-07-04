import React from 'react'
import { Button } from 'reactstrap'
import Mappings from "./mapping"
import { connect, useDispatch } from "react-redux"
import { itemsDetailsDataStore } from "@store/actions/itemDetails"
const Mapping = (props) => {
  
  const dispatch = useDispatch()
    const saveAndNext = () => {
        props.stepper.next()
        const passData = {
          ...props?.itemDetailsData
         }
        dispatch(itemsDetailsDataStore(passData))
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

const mapStateToProps = (state) => ({
  itemDetailsData : state.itemDetails.itemDetails
})

const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Mapping)