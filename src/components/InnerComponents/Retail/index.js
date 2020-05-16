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

                        <p className="productTitle col-12">Chocolate Bars</p>       
                        <Col lg={6} className="productName2 description2 ">                           
                            <p>Taïnori 64% Chocolate Bar</p>
                            <p>Fraise Chocolate Bar</p>
                            <p>Z-Caramel 43%</p>                            
                        </Col>
                        <p className="productTitle col-12">Tea Bottles</p>
                        <Col lg={6} className="productName2 description2"> 
                            <p>Oolong Rose Tea</p>
                            <p>Oolong Lavender Tea</p>
                        </Col>         
                </div>
                <div className="sectionContainer">
                    <Row>                        
                        <Col lg={12} className="productName2 description2">
                        <p>Labore velit labore cillum ad deserunt officia exercitation adipisicing do qui nis cillum exercitation adipisicing do qui nisi. </p>
                        </Col>
                
                        <Col lg={6} className="productName2 description2 ">
                            <p>Madeleine</p>
                            <p>Chocolate Financier</p>
                            <p>Pistachio Financiers</p>
                            <p>Pineapple Cake</p>
                            <p>Salted Butter Financier</p>
                            <p>Florentine</p>
                            <p>Chocolate Sable</p>
                            <p>Butter Sand</p>
                            <p>Langues De Chat</p>
                            <p>Galette </p>
                            <p>Curry Allumette </p>
                        </Col>
                        <Col lg={6} className="productName2 description2 ">
                            <p>Candied Orange</p>
                            <p>Chocolate Mendiants</p>
                            <p>Pecan Breton</p>
                            <p>Raspberry Rose Twirl</p>
                            <p>Kokutou</p>
                            <p>Coconut Tuiles</p>
                            <p>Strawberry Coconut Meringue</p>
                            <p>Pecan Chocolate</p>
                            <p>Margherita</p>
                            <p>Multi-Grain</p>
                        </Col>

                        <p className="productTitle col-12">Jam Bottles</p>
                        <Col lg={6} className="productName2 description2"> 
                            <p>Raspberry Jam</p>
                            <p>Tea infused Blueberry Jam</p>
                            <p>Kiwi Orange Jam</p>
                            <p>Strawberry Oolong Jam</p>
                        </Col>
                        <Col lg={6} className="productName2 description2"> 
                            <p>Mango Grapefruit Jam</p>
                            <p>Pineapple Vanilla Jam</p>
                            <p>Vanilla Sugar</p>
                        </Col>   
                    </Row>
                </div>  
            </div>
            <Back />
        </div>
        
        
            )
}

export default Retail;