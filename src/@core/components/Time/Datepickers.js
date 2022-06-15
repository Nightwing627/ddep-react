import React from "react"
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/light.css"
class Datepickers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      basicPicker : new Date(),
      dateTimePicker : new Date(),
      humanFriendly:  new Date(),
      minMax: new Date(),
      disabledRange : new Date(),
      multipleDates : new Date(),
      rangePicker : new Date(),
      weekNum : new Date(),
      inlinePicker : new Date()
    }
  }
  render() {

    const { 
          basicPicker
        } = this.state

    return (<Card>
     
      <div>
        <Row>
          <Col className="mb-3" md="6" sm="12">
            <Flatpickr
              className="form-control"
              value={this.props.value}
              onChange={() => this.props.onChange()}
              disabled={this.props.disabled ? this.props.disabled : ""}
            />
          </Col>
        </Row>
      </div>
    </Card>)
  }
}

export default Datepickers