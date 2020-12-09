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
            <div id="retail" className="row sections justify-content-sm-center">       
            <p className="pageTitle col-12">Retail</p>      
                <div className="sectionContainer row linedown">
                    <div className="retailProducts container-fluid col-10">
                        <img src={retail} className="img-fluid" alt="retail"></img>
                    </div>
                    <p className="productTitle col-12">Chocolate Bars</p>          
                        <div className="retailProducts">            
                            <p>Fraise Chocolate Bar</p>
                            <p>Xmas Chocolate bar (seasonal)</p>   
                        </div>
                    <p className="productTitle col-12">Tea Bottles</p>          
                        <div className="retailProducts">   
                            <p>Oolong Rose Tea</p>
                            <p>Oolong Lavender Tea</p> 
                        </div>
                </div>

                <div className="sectionContainer row">              
                    <p className="productTitle col-12">Other</p>          
                        <div className="retailProducts">                            
                            <p>Madeleine</p>
                            <p>Chocolate Financier</p>
                            <p>Pistachio Financiers</p>
                            <p>Salted Butter Financier</p>
                            <p>Florentine</p>
                            <p>Chocolate Sable</p>
                            <p>Butter Sand</p>
                            <p>Langues De Chat</p>
                            <p>Galette </p>
                            <p>Curry Allumette </p>
                            <p>Chocolate Mendiants</p>
                            <p>Pecan Breton</p>
                            <p>Raspberry Rose Twirl</p>
                            <p>Kokutou</p>
                            <p>Coconut Tuiles</p>
                            <p>Strawberry Coconut Meringue</p>
                            <p>Pecan Chocolate</p>
                            <p>Margherita</p>
                            <p>Multi-Grain</p>
                        </div>

                        <p className="productTitle col-12">Jam Bottles</p>       
                        <div className="retailProducts"> 
                            <p>Raspberry Lychee Jam</p>
                            <p>Tea infused Blueberry Jam</p>
                            <p>Kiwi Orange Jam</p>
                            <p>Strawberry Oolong Jam</p>
                            <p>Mango Grapefruit Jam</p>
                            <p>Pineapple Vanilla Jam</p>
                            <p>Vanilla Sugar</p>
                        </div>                  
                </div>  
            </div>
            <Back />
        </div>
        
        
            )
}

export default Retail;