import React from 'react';
import {NavLink} from "react-router-dom";
import whole from "./wholeblackforest.png";
import single from "./blackforest.png";
import viennoiseries from "./almondcroissant.png";
import drink from "./drinks.png";
import poundcake from "./rasp.png";
import retail from "./retail.png";
import bonbons from "./bonbons.png";


function Main() {
    return (
        <div id="main" class="row sections justify-content-md-center">
  
        <p class="pageTitle col-12">MAIN MENU</p>

        <div className="menuBox">        
            <NavLink to = "/Whole" className={"navlinks"}> 
            <div className="menuContainer">
            <p className="menuName">WHOLE CAKE</p>
                <img src={whole} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">

                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/Single" className={"navlinks"}> 
            <div className="menuContainer">
            <p className="menuName">SINGLE CAKE</p>
                <img src={single} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">

                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/Viennoiseries" className={"navlinks"}> 
            <div className="menuContainer">
            <p className="menuName">VIENNOISERIES</p>
                <img src={viennoiseries} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">

                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/Drinks" className={"navlinks"}> 
            <div className="menuContainer">
            <p className="menuName">Drinks</p>
                <img src={drink} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">

                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/PoundCakes" className={"navlinks"}> 
            <div className="menuContainer">
            <p className="menuName">TRAVEL CAKES</p>
                <img src={poundcake} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">

                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/BonBons" className={"navlinks"}> 
            <div className="menuContainer">
            <p className="menuName">Bon Bons</p>
                <img src={bonbons} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">

                </div>
            </div>
            </NavLink>
        </div>
        <div className="menuBox">        
            <NavLink to = "/Retail" className={"navlinks"}> 
            <div className="menuContainer">
            <p className="menuName">Retails</p>
                <img src={retail} className="cakeImg img-fluid" alt="..."></img>
                <div className="menuHover">

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