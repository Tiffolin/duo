import React from "react";
import {NavLink} from "react-router-dom";


function Back() {
    return (
        <div id="backBtnWrapper">
        <NavLink to = "/Main" className={"navlinks"}>               
            <div id="backBtn" className="justify-content-md-center container-fluid">
                <p>Back to Main</p>
            </div>   
        </NavLink>
        </div>
    )
}

export default Back;