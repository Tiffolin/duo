import React, {Component}  from "react";
import '../style.css';
import'../mobileStyle.css';
import {Alert} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "../InnerComponents/About";
import logo2 from "./logo1.png";
import slide1 from "./1.png";
import slide2 from "./2.png";
import slide3 from "./3.png";
import slide4 from "./4.png";


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
        {/* <Alert color="warning" isOpen={this.state.visible} toggle={this.toggle.bind(this)}  className="alertBox container-fluid">
            <span className="alert">Due to the COVID-19 outbreak, Duo has implemented a "Take-out only" model.</span><br></br>
            <span className="alert">We request customers with reservations to pick up their orders prior to 4pm. Operational hours may be reduced as we continue to monitor the situation.</span><br></br>
        </Alert> */}
        <div id="splashpage" class="justify-content-center container-fluid">
     
        <div className="desktopView navbar navbar-expand-lg navbar-light bg-light justify-content-center contain-fluid">
            <NavLink to = "/duo" className="navbar-brand"><img id="logo2" alt="logo2" src={logo2}></img></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse contain-fluid" id="navbarTogglerDemo02 ">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 contain-fluid">
                <li className="nav-item active"></li>      
                <li><NavLink to = "/Cakes" className={"navlinks nav-link "}>CAKES </NavLink></li>
                <li><NavLink to = "/Viennoiseries" className={"navlinks nav-link "}>VIENNOISERIES </NavLink></li>
                <li><NavLink to = "/PoundCakes" className={"navlinks nav-link "}>TRAVEL CAKES </NavLink></li>
                <li><NavLink to = "/BonBons" className={"navlinks nav-link "}>BON BONS </NavLink></li>
                <li><NavLink to = "/Drinks" className={"navlinks nav-link "}>DRINKS </NavLink></li>
                <li><NavLink to = "/Retail" className={"navlinks nav-link "}>RETAIL </NavLink></li>
                <li><NavLink to = "/LocationHours" className={"navlinks nav-link "}>LOCATIONS </NavLink></li>
                <li><NavLink to = "/About" className={"navlinks nav-link "} >ABOUT </NavLink></li>    
                </ul>
            </div>  
        </div>       
        <div className="mobileView">
            <Row >
            <Col lg={12}>
                    <NavLink to = "/duo">                    
                        <img id="logoImgMobile" alt="logo" src={logo2} className="img-fluid"/>
                    </NavLink>
                </Col>
                <Col lg={12}>            
                    <p id="splashNum"className="container-fluid">
                        <a href="tel:+19057632232">(905) 763-2232</a>
                    </p>   
                </Col>
            </Row>
        </div>    
            
            <div  id="magicCarousel" className="carousel slide my-5" data-ride="carousel">
            
            {/* <!--    Carousel Slider    --> */}
                <div className="carousel-inner" role="listbox">

                    <NavLink to = "/Main"  className="carousel-caption container-fluid fade-in">
                        <span >VIEW PRODUCTS</span>
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