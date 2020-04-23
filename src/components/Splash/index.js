import React, {Component}  from "react";
import {Alert} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "../InnerComponents/About";
import logo2 from "./logo2.png";
import slide1 from "./1.png";
import slide2 from "./2.png";
import slide3 from "./3.png";
import slide4 from "./4.png";
import "../style.css";

class Splash extends Component { 
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
        <Alert color="warning" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>
            <span className="alert">Due to the COVID-19 outbreak, Duo has implemented a "Take-out only" model.</span><br></br>
            <span className="alert">We request customers with reservations to pick up their orders prior to 4pm. Operational hours may be reduced as we continue to monitor the situation</span><br></br>

        </Alert>
        <div id="splashpage" class="justify-content-center container-fluid">

            <Row>
                <Col lg={8}>
                    <NavLink to = "/duo">
                        <div id="logo" class="justify-content-center">
                            <img id="logoimg" alt="logo" src={logo2} className="img-fluid"/>
                        </div>
                    </NavLink>
                </Col>
                <Col lg={4}>            
                    <p id="splashNum"class="justify-content-center container-fluid"><a href="tel:+19057632232">(905) 763-2232</a></p>   
                </Col>
            </Row>
            <div  id="magicCarousel" className="carousel slide my-5" data-ride="carousel">
            
            {/* <!--    Carousel Slider    --> */}
                <div className="carousel-inner" role="listbox">

                        <NavLink to = "/Main"  className="carousel-caption container-fluid fade-in">
                            <span>VIEW PRODUCTS</span>
                        </NavLink>

                    <div className="carousel-item active">
                        <img src={slide1} className="slides" alt="slide1"></img>

                    </div>                   
                    <div className="carousel-item">
                        <img src={slide2} className="slides" alt="slide3"></img>
                    </div>                 
                    <div className="carousel-item">
                        <img src={slide3} className="slides" alt="slide3"></img>
                    </div>                  
                    <div className="carousel-item">
                        <img src={slide4} className="slides" alt="slide3"></img>
                    </div>
                    
            {/* <!--     Carousel Controls     --> */}
                    <a href="#magicCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a href="#magicCarousel" className="carousel-control-next" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    
                </div>
            </div>
        </div>

        <About/>
        
        </div>
    )
}
}

export default Splash;