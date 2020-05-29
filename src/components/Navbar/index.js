import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import logo2 from "./logo1.png";
import '../style.css';
import'../mobileStyle.css';

class Navbar extends Component{    
    constructor() {
    super();
    this.state = {
        scrolled:false,
    };
}

componentDidMount(){
    window.addEventListener("scroll", ()=>{
        const isTop = window.scrollY<100;
        if(isTop !== true){
            this.setState({scrolled: true});
        }else{
            this.setState({scrolled: false});
        }
    });
}

componentWillUnmount() {
window.removeEventListener("scroll");
}

render() {
return(

<div className={this.state.scrolled ? "nav scrolled" : "nav"}>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <NavLink to = "/duo" className="navbar-brand"><img id="logo2" alt="logo2" src={logo2}></img></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
    </nav>
</div>

    );
}
}
// function Navbar() {
//     return (  
//         <div id="NavigationBar">       
//             <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
//                 <NavLink to = "/duo" className="navbar-brand"><img id="logo2D" alt="logo2" src={logo2}></img></NavLink>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//                     <li className="nav-item active"></li>      
//                     <li><NavLink to = "/Cakes" className={"navlinks nav-link "}>CAKES </NavLink></li>
//                     <li><NavLink to = "/Viennoiseries" className={"navlinks nav-link "}>VIENNOISERIES </NavLink></li>
//                     <li><NavLink to = "/PoundCakes" className={"navlinks nav-link "}>TRAVEL CAKES </NavLink></li>
//                     <li><NavLink to = "/BonBons" className={"navlinks nav-link "}>BON BONS </NavLink></li>
//                     <li><NavLink to = "/Drinks" className={"navlinks nav-link "}>DRINKS </NavLink></li>
//                     <li><NavLink to = "/Retail" className={"navlinks nav-link "}>RETAIL </NavLink></li>
//                     <li><NavLink to = "/LocationHours" className={"navlinks nav-link "}>LOCATIONS </NavLink></li>
//                     <li><NavLink to = "/About" className={"navlinks nav-link "} >ABOUT </NavLink></li>    
//                     </ul>
//                 </div>
//             </nav>
//         </div>

    
//     )
// }




export default Navbar;