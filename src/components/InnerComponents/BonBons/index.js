import React from "react";
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bonbon from "./bonbon.png";
import Order from "../Order";
import Back from "../Back";

function BonBons() {
    return (
        <div>        
            <div id="drinks" className="row sections justify-content-sm-center">       
            <p className="pageTitle col-12">Bon Bons</p>               
                <div className="sectionContainer linedown ">
                    <Col lg={12} className="productName2 description2">
                        <img src={Bonbon} className="img-fluid" alt="bonbon"></img>
                    </Col>                   
                </div>
                <div className="sectionContainer">
                    <Row>
                        <Col lg={12} className="productName2 description2">
                            <p>Labore velit labore cillum ad deserunt officia cillum exercitation adipisicing do qui nisi officia cillum exercitation adipisicing do qui nisi.</p>
                        </Col>
                        <p className="pageTitle col-12">FLAVOURS</p>
                        
                        <Col lg={6} sm={6} className="bonbonNames productName2 description2 ">
                            <p>Venezuela</p>
                            <p>Japanese Whiskey</p>
                            <p>Banana Almond</p>
                            <p>Matcha</p>
                            <p>Coconut Lime</p>
                            <p>Berry Tea</p>
                        </Col>
                        <Col lg={6} sm={6} className="bonbonNames productName2 description2">
                            <p>Blueberry Cassis</p>
                            <p>Hibiki Pecan</p>
                            <p>Vanilla Caramel</p>
                            <p>Raspberry Rose</p>
                            <p>Lemon Mint</p>
                            <p>Grapefruit</p>
                        </Col>
                    </Row>
                </div>                 
 
            </div>
            <Back />
        </div>
        
        
            )
}

export default BonBons;