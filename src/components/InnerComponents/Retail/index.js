import React from "react";
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import retail from "./retail.png";
import Order from "../Order";
import Back from "../Back";

function Retail() {
    return (
        <div>        
            <div id="drinks" className="row sections justify-content-sm-center">       
            <p className="pageTitle col-12">Retail</p>               
                <div className="sectionContainer linedown ">
                        <Col lg={12} sm={12} className="productName2 description2">
                            <img src={retail} className="img-fluid" alt="retail"></img>
                        </Col>                   
                </div>
                <div className="sectionContainer">
                    <Row>
                        <Col lg={12} className="productName2 description2">
                        <p>Labore velit labore cillum ad deserunt officia exercitation adipisicing do qui nis cillum exercitation adipisicing do qui nisi. </p>
                        </Col>
                        <Col lg={6} className="productName2 description2 ">
                            <p>Madeleines</p>
                            <p>Chocolate Financier</p>
                            <p>Pistachio Financiers</p>
                            <p>Florentine</p>
                            <p>Chocolate Sable</p>
                            <p>Butter Sand</p>
                            <p>Langues De Chat</p>
                            <p>Galette </p>
                            <p>Curry Allumette </p>
                        </Col>
                        <Col lg={6} className="productName2 description2">
                            <p>Candied Orange</p>
                            <p>Chocolate Mendiants</p>
                            <p>Taïnori Chocolate Bar</p>
                            <p></p>
                            <p>Oolong Rose Tea (bottle)</p>
                            <p>Oolong Lavender Tea (bottle)</p>
                        </Col>
                    </Row>
                </div>  
            </div>
            <Back />
        </div>
        
        
            )
}

export default Retail;