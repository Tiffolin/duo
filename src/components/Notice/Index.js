import React, {Component}  from "react";
import {Alert} from 'reactstrap';
import "../style.css";

class Notice extends Component { 
    state = {
      visible:true
    }
    toggle(){
      this.setState({
        visible:!this.state.visible
      });
    }
    
render() {
    return (
        <div >
        <Alert color="warning" isOpen={this.state.visible} toggle={this.toggle.bind(this)}  className="alertBox container-fluid">
            <span className="alert">Due to the COVID-19 outbreak, Duo has implemented a "Take-out only" model to comply with current regulations</span><br></br>
            <span className="alert">We request customers with reservations to pick up their orders prior to 4pm. Operational hours may be reduced as we continue to monitor the situation.</span><br></br>

        </Alert>
        </div>
    )
}
}

export default Notice;