import React from "react";
import {NavLink} from "react-router-dom";
import Order from "../Order";
import Back from "../Back";
import blackforest from "./blackforest.png";
import wholeblackforest from "./wholeblackforest.png";

function Cakes() {
    return (
<div>
    <Order />
        <div id="cakes" className="row sections justify-content-sm-center">

        <div className="menuBox">        
            <NavLink to = "/Whole" className={"navlinks"}> 
            <div className="menuContainer">
                <img src={wholeblackforest} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">
                    <p className="menuName">WHOLE CAKE</p>
                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/Single" className={"navlinks"}> 
            <div className="menuContainer">
                <img src={blackforest} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">
                    <p className="menuName">SINGLE CAKE</p>
                </div>
            </div>
            </NavLink>
        </div>
        </div>
        <Back />
</div>


    )
}

export default Cakes;