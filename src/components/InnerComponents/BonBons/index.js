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
            <div id="bonBon" className="row sections justify-content-sm-center">       
            <p className="pageTitle col-12">Bon Bons</p>           
            <p className="bonBonDesctiption col-12">Labore velit labore cillum ad deserunt officia cillum exercitation adipisicing do qui nisi officia cillum exercitation adipisicing do qui nisi.</p>    
            <div className="sectionContainer row linedown">
                    <div className="retailProducts container-fluid col-10">
                      <img src={Bonbon} className="img-fluid" alt="bonbon"></img>
                    </div>

                </div>                            
                <div className="sectionContainer row linedown">
                    <p className="productTitle col-12">FLAVOURS</p>          
                        <div className="bonBonProducts">   
                            <p>Venezuela</p>
                            <p>Japanese Whiskey</p>
                            <p>Banana Almond</p>
                            <p>Matcha</p>
                            <p>Coconut Lime</p>
                            <p>Berry Tea</p>
                            <p>Blueberry Cassis</p>
                            <p>Hibiki Pecan</p>
                            <p>Vanilla Caramel</p>
                            <p>Raspberry Rose</p>
                            <p>Lemon Mint</p>
                            <p>Grapefruit</p>
                        </div>
                </div>  
            </div>
            <Back />
        </div>
        
        
            )
}

export default BonBons;