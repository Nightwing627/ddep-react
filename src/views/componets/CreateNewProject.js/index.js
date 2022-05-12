import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import  Steps  from "./steps"
import { Button, Card, CardBody, Input, Label, FormGroup } from 'reactstrap'
import "../../../@core/scss/newprojectadd.scss"
import "./Newitem.scss"
function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}
const Index = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Item
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      onClick={(e) => handleClick(e)}
    >
     Add
    </Link>
   
  ]
  return (
  <> 
    <div>
    <Stack spacing={2} className="breadcrumb-Top mb-2">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    <Card >
      
        <Steps/>
      
    </Card >
    
    </div>
    </>
  )
}

export default Index