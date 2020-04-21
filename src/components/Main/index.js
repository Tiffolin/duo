import React from 'react';
import {NavLink} from "react-router-dom";
import viennoiseries from "./almondcroissant.png";
import drink from "./drinks.png";
import poundcake from "./rasp.png";
import retail from "./retail.png";
import whole from "./wholeblackforest.png";
import single from "./blackforest.png";

function Main() {
    return (
        <div id="main" class="row sections justify-content-md-center">
  
        <p class="pageTitle col-12">MAIN MENU</p>

        <div className="menuBox">        
            <NavLink to = "/Whole" className={"navlinks"}> 
            <div className="menuContainer">
                <img src={whole} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">
                    <p className="menuName">WHOLE CAKE</p>
                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/Single" className={"navlinks"}> 
            <div className="menuContainer">
                <img src={single} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">
                    <p className="menuName">SINGLE CAKE</p>
                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/Viennoiseries" className={"navlinks"}> 
            <div className="menuContainer">
                <img src={viennoiseries} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">
                    <p className="menuName">VIENNOISERIES</p>
                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/Drinks" className={"navlinks"}> 
            <div className="menuContainer">
                <img src={drink} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">
                    <p className="menuName">Drinks</p>
                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/PoundCakes" className={"navlinks"}> 
            <div className="menuContainer">
                <img src={poundcake} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">
                    <p className="menuName">TRAVEL CAKES</p>
                </div>
            </div>
            </NavLink>
        </div>



     {/* <div className="menuBox">
            <p className="menuName col-6">RETAIL</p>
            <div className="menuContainer">
                <NavLink to = "/Single" className={"navlinks"}>  
                    <img src={retail} className="menuImg img-fluid" alt="..."></img>
                    <div className="menuHover row">
                    </div>
                </NavLink>
            </div>
    </div> */}
      
       
               
            {/* <LocationHours/> */}

        </div>

    )
}

export default Main;