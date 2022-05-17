import React, {useState} from 'react'
import { CustomInput } from "reactstrap"
import AppCollapse from "@components/app-collapse"
import Inputddep from './Inputddep'
import Sftpinfo from "./Sftpinfo"
const api = [
    {
      id: 1,
      title: "DDEP API",
      content:  < Inputddep />
    }
  ]
  

const DDEP = () => {
  return (
  <>
  <AppCollapse
     data={ api}
     accordion
     active={0}
    />
  </>
  )
}
const data = [
    {
      id: 1,
      title: "FTP/SFTP",
      content:  < Sftpinfo />
    }
  ]
  
const SFTP = () => {
  return (
  <>
  <AppCollapse
     data={data}
     accordion
     active={0}
    />
  </>
  )
}

const Ddepapi = () => {
    const [radioValue, setradioValue] = useState("") 

    console.log("radioValue", radioValue)
  return (<> 
    <div className='d-flex'>
        <CustomInput inline
          type="radio"
          label="DDEP API"
          color="primary"
          id="DDEPAPI"
          defaultChecked={false}
          name="user_type"
          className="ml-1"
          value="DDEPAPI"
          onClick={(e) => {
            setradioValue("DDEPAPI")
        }} 
        />   
        <CustomInput
        type="radio"
        label="FTP/SFTP"
        color="primary" 
        id="SFTP"
        defaultChecked={false}
        name="user_type"
        className="ml-1"
        value="FTP/SFTP"
        onClick={(e) => {
            setradioValue("FTP/SFTP")
        }}
       
      /> 
         </div>
        <div>
        {/* <AppCollapse
          data={radioValue === "DDEPAPI" ? "dfg" : radioValue === "FTP/SFTP" ? "FTP/SFTP" : ""  }
          accordion
          active={0}
        />  */}
        {radioValue === "DDEPAPI" ? <DDEP /> : radioValue === "FTP/SFTP" ? <SFTP /> : ""  }
        </div>
   
  </>)
}

export default Ddepapi