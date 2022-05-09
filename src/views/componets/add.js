import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import "../../@core/scss/newprojectadd.scss"
import { Button, Card, CardBody } from 'reactstrap'
import { DTextField } from "./UI/DTextField"
import  HorizontalNonLinearStepper from "./UI/HorizontalNonLinearStepper"
import { FormHelperText, Grid, Box, Divider} from "@material-ui/core"
// import { Grid } from 'react-feather'
function handleClick(event) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }
const Add = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Project
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
         Add
        </Link>
       
      ]
  return (
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
      <CardBody >
          <HorizontalNonLinearStepper />
          <Box className='input-feild'>
            <Grid item xs={12} md={12} className="project-text">
                <FormHelperText className="form-text">
                    Project Code
                    <span className="valid_star">*</span>
                </FormHelperText>
                <DTextField  
                fullWidth
                variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}  className="project-text">
                <FormHelperText className="form-text">
                Project Name
                    <span className="valid_star">*</span>
                </FormHelperText>
                <DTextField  
                fullWidth
                variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}   className="project-text">
                <FormHelperText className="form-text">
                Project Description
                   
                </FormHelperText>
                <DTextField  
                fullWidth
                multiple
                variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}  className="project-text">
                <FormHelperText className="form-text">
                Sequence
                </FormHelperText>
                <DTextField  
                fullWidth
                variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}  className="project-text grp-text">
                <FormHelperText className="form-text">
                Group
                </FormHelperText>
                <DTextField  
                select
                fullWidth

                variant="outlined"/>
            </Grid>
            <Divider />
            <Box>
                <Button className="btn-relief ">
                    Save
                </Button>
            </Box>
         </Box>
      </CardBody>
    </Card>

  </div>
  )
}

export default Add