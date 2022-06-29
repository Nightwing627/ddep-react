// import React, {useState} from 'react'
// import { CustomInput } from "reactstrap"
// import AppCollapse from "@components/app-collapse"
// import Inputddep from './Inputddep'
// import Sftpinfo from "./Sftpinfo"
// const DDEP = (props) => {
//   const api = [
//     {
//       id: 1,
//       title: "DDEP API",
//       content:  < Inputddep  DdepData={props?.DdepData} disabled={props?.disabled}/>
//     }
//   ]
//   return (
//   <>
//   <AppCollapse
//      data={ api}
//      accordion
//      active={0}
//     />
//   </>
//   )
// }

// const SFTP = (props) => {
//   const data = [
//     {
//       id: 1,
//       title: "FTP/SFTP",
//       content:  <Sftpinfo  sftpData={props?.sftpData} disabled={props?.disabled}/>
//     }
//   ]
  
//   return (
//   <>
//   <AppCollapse
//      data={data}
//      accordion
//      active={0}
//     />
//   </>
//   )
// }

// const Ddepapi = (props) => {
//     const [radioValue, setradioValue] = useState("") 

    
//   return (<> 
//     <div className='d-flex'>
//         <CustomInput inline
//           type="radio"
//           label="DDEP API"
//           color="primary"
//           id="DDEPAPI"
//           defaultChecked={true}
//           name="user_type"
//           className="ml-1"
//           value="DDEPAPI"
//           // disabled={props?.isDisable} 
//           onClick={(e) => {
//             setradioValue("DDEPAPI")
//         }} 
//         />   
//         <CustomInput
//         type="radio"
//         label="FTP/SFTP"
//         color="primary" 
//         // disabled={props?.disabled}
//         id="SFTP"
//         defaultChecked={false}
//         name="user_type"
//         className="ml-1"
//         value="FTP/SFTP"
//         onClick={(e) => {
//             setradioValue("FTP/SFTP")
//         }}
//       /> 
//          </div>
//         <div>
//         {/* <AppCollapse
//           data={radioValue === "DDEPAPI" ? "dfg" : radioValue === "FTP/SFTP" ? "FTP/SFTP" : ""  }
//           accordion
//           active={0}
//         />  */}
//         {radioValue === "DDEPAPI" ? <DDEP DdepData={props?.apiData} disabled={props?.disabled}/> : radioValue === "FTP/SFTP" ? <SFTP sftpData={props?.apiData} disabled={props?.disabled}/> : ""  }
//         </div>
   
//   </>
//   )
// }

// export default Ddepapi