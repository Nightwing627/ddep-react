// import React from 'react'
// import { Button, Container, Label, CustomInput
// } from 'reactstrap'
// import Accordion from '@mui/material/Accordion'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import AccordionDetails from '@mui/material/AccordionDetails'
// import Typography from '@mui/material/Typography'
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import Select from "react-select"

// const theme = theme => ({
//   ...theme,
//   colors: {
//     ...theme.colors,
//     primary25: "#bcdb9c",
//     primary: "#8DC454"

//   }
// })

// const Inbound = (props) => {
//   const options = [
//     { value: 'BGRS', label: 'BGRS' },
//     { value: 'I-RMS', label: 'I-RMS' },
//     { value: 'Global', label: 'Global' }
//   ]
//   const saveAndNext = () => {
//     props.stepper.next()
// }
//   return (<>
 
//     <div>
//     <Container>
//        <Accordion>
//         <AccordionSummary
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <div>Inbound Format</div>
//         </AccordionSummary>
//         <AccordionDetails>
//              <Label className="form-text">
//                 Project Code
//                 <span className="valid_star">*</span>
//                 </Label>
//           <Select  options={options}  theme={theme}  className="React"/>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <div>Synchronize Configure</div>
//         </AccordionSummary>
//         <AccordionDetails>
//         <CustomInput
//             inline
//             type="radio"
//             id="Outbound-Fail"
//             label="Outbound Fail"
//             color="primary"
//           /> 
//         </AccordionDetails>
//       </Accordion>
     
//       </Container>
//       </div>
//       <div className="d-flex justify-content-between prev-next-btn-block">
//           <Button color="primary" onClick={() => props.stepper.previous()}>
//          Previous
//           </Button>
//           <Button
//             color="primary"
//             className="ml-1"
//             onClick={() => saveAndNext()}
//           >
//             Next  
//           </Button>
//         </div>
//   </>)
// }

// export default Inbound
import React from "react"
import { Collapse, Card, CardHeader, CardTitle, CardBody} from "reactstrap"
import classnames from "classnames"

const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy."
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."
  }
  
]

class Inbound extends React.Component {

  state = { collapseID: ""}

  toggleCollapse = collapseID => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))
    }


  render() {

      const accordionShadowItems = collapseItems.map(collapseItem => {
          return (
            <Card
              className={classnames({
                open: collapseItem.id === this.state.collapseID
              })}
              key={collapseItem.id}
              onClick={() => this.toggleCollapse(collapseItem.id)}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          )
        })

    return (
      <div className="collapse-bordered vx-collapse collapse-icon accordion-icon-rotate accordion-shadow">
      { accordionShadowItems }
    </div>
    )
  }
}
export default Inbound