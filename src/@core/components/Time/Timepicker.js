import React from "react"
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_green.css"

class Timepickers extends React.Component {
  // state ={
  //   basic : new Date(),
  //   timeLimit : new Date(),
  //   preloaded : new Date()
  // }
  constructor() {
    super()
    this.state = {
      date : new Date(),
      basic : ""
    }
  }

  render() {
    const { basic, timeLimit } = this.state
    return (
      <Card>
       
        <div>
          <Row>
            <Col className="" md="6" sm="12">
              {/* <h5 className="text-bold-500">Basic 24hrs</h5> */}
              <Flatpickr
                className="form-control" 
                value={this.props.value ? this.props.value : ""}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i"
                }}
                disabled={this.props.disabled ? this.props.disabled : ""}
                onChange={this.props.onChange ? this.props.onChange : ""}
              />
            </Col>
            {/* <Col className="mb-3" md="6" sm="12">
              <h5 className="text-bold-500">Limit</h5>
              <Flatpickr
                className="form-control"
                value={timeLimit}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  minTime: "16:00",
                  maxTime: "22:30"
                }}
                onChange={date => {
                  this.setState({ timeLimit : date })
                }}
              />
            </Col> */}
            {/* <Col className="mb-3" md="6" sm="12">
              <h5 className="text-bold-500">Preloaded</h5>
              <Flatpickr
                className="form-control"
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  defaultDate: "13:45"
                }}
                onChange={date => {
                  this.setState({ preloaded : date })
                }}
              />
            </Col> */}
          </Row>
        </div>
      </Card>
    )
  }
}

export default Timepickers