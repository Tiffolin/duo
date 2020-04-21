import React from "react";
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

function Splash() {
    return (
        <div >
        <div id="splashpage" class="justify-content-center container-fluid">
            <Row>
                <Col lg={8}>
                    <NavLink to = "/">
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
                        <NavLink to = "/Main" >
                            <div className="carousel-caption container-fluid fade-in">VIEW PRODUCTS </div>
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

export default Splash;