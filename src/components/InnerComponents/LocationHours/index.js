import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Order from "../Order";


function LocationHours() {
    return (
<div id="location" className="col-12  justify-content-md-center sections">

    <p class="pageTitle col-12">Contact Us</p>
        <Order />

    <div id="location" className="col-12  justify-content-md-center sections">
    <Row>

    <Col lg={3}></Col>
        <Col lg={7} sm={12}>        
        <div className="hoursMapWrapper justify-content-md-center">
        <Col lg={12} className="maxOrder">    
        <p>____________________________________________________________________________________________________________</p>    
            <span >Due to COVID-19, we are faced with the challenge of both shortage of supplies and staff.</span><br></br>
            <span >As a result, our store hours, products, and availability may change at anytime.</span><br></br>
            <span >We advise customers to call us in advance to place your order (1 business day required),</span><br></br>
            <span >check product availability and confirm store hours.</span><br></br>
            <span >We apologize in advance for any inconvenience we may have caused, and we are trying our best to serve you better.</span><br></br>
        <p>____________________________________________________________________________________________________________</p>  
        <br></br>     
        </Col>
        <br></br>


        </div></Col>
    </Row>
</div>
    <Row>
        <Col lg={6} sm={12}>        
        <div className="hoursMapWrapper justify-content-md-center">
            <br></br><b>Duo Pâtisserie</b>
            <Row>     
                <Col lg={6} className="days">
                <p><u>Canada Day</u></p><br></br>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                </Col>
                <Col lg={6} className="hours">
                <p><u>10am - 3pm</u></p><br></br>
                    <p>Closed</p>
                    <p>10am - 6pm</p>
                    <p>10am - 6pm</p>
                    <p>10am - 6pm</p>
                    <p>10am - 6pm</p>
                    <p>10am - 6pm</p>
                    <p>11am -  6pm</p> 
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

<br></br><br></br>

 <Row>
        <Col lg={6} sm={12}>        
        <div className="hoursMapWrapper justify-content-md-center">
        <br></br><b>Duo Café</b><br></br>(Products may vary from Duo Pâtisserie)
            <Row>     
                <Col lg={6} className="days">
                <p><u>Canada Day</u></p><br></br>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                </Col>
                <Col lg={6} className="hours">
                <p><u>8am - 3pm</u></p><br></br>
                    <p>Closed</p>
                    <p>Closed</p>
                    <p>8am - sell out</p>
                    <p>8am - sell out</p>
                    <p>8am - sell out</p>
                    <p>9am - sell out</p>
                    <p>9am - sell out</p> 
                </Col>


            </Row>
        </div></Col>
        <Col lg={6} sm={12}>
            <div className=" hoursMapWrapper mapWrapper">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11508.649690366257!2d-79.39121851334099!3d43.85246206583749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b96b0c30a9b%3A0x92663ae4d55da022!2zRHVvIENhZsOp!5e0!3m2!1sen!2sca!4v1624807312028!5m2!1sen!2sca" 
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


