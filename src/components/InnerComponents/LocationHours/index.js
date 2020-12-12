import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function LocationHours() {
    return (
<div id="location" className="col-12  justify-content-md-center sections">

    <p class="pageTitle col-12">LOCATION & HOURS</p>
    <div className="notice col-12  justify-content-md-center">
        Due to COVID-19, we are faced with the challenge of both shortage of supplies and staff.  
        As a result, our store hours, products, and availability may change at anytime.  
        We advise customers to call us in advance to place your order (1 business day required), 
        check product availability and confirm store hours.  
        We apologize in advance for any inconvenience we may have caused, and we are trying our best to serve you better.
    </div>
    <Row>
        <Col lg={6} sm={12}>        
        <div className="hoursMapWrapper justify-content-md-center">
            <Row>     
                <Col lg={6} className="days">
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                </Col>
                <Col lg={6} className="hours">
                    <p>Closed</p>
                    <p>10am - 6pm</p>
                    <p>10am - 6pm</p>
                    <p>10am - 6pm</p>
                    <p>10am - 6pm</p>
                    <p>10am - 6pm</p>
                    <p>11am -  6pm</p> 
                </Col>

            <Col lg={12}><p class="pageTitle col-12">------</p></Col>
            <Col lg={12}><p class="pageTitle col-12">HOLIDAY HOURS</p></Col>
                <Col lg={6} className="days">
                    <p>Dec 24th</p>
                    <p>Dec 25th</p>
                    <p>Dec 26th</p>
                    <p>----------</p>
                    <p>Dec 31st</p>
                    <p>Jan 1st</p>
                </Col>
                <Col lg={6} className="hours">
                    <p>10am - 6pm</p>
                    <p>10am - 4pm</p>
                    <p>10am - 4pm</p>
                    <p>-------------</p>
                    <p>10am - 4pm</p>
                    <p>10am - 4pm</p>
                </Col>


            </Row>
        </div></Col>
        <Col lg={6} sm={12}>
            <div className=" hoursMapWrapper mapWrapper">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92082.58730672896!2d-79.44758732266025!3d43.84378811238076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d4b488954587%3A0x8484bdbef3da1aee!2zRHVvIFDDonRpc3NlcmllICYgQ2Fmw6k!5e0!3m2!1sen!2sca!4v1585251219892!5m2!1sen!2sca" 
                    frameborder="0" 
                    allowfullscreen="" 
                    aria-hidden="false" 
                    tabindex="0"
                    title="...">
                </iframe>
            </div>
        </Col>
    </Row>

</div>
    )
}

export default LocationHours;


