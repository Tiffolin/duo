import React from "react";
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Order from "../Order";
import Back from "../Back";
import caffeineFree from "./caffeineFree.PNG";
// import wholeblackforest from "./wholeblackforest.png";

function Drinks() {
    return (
<div>

        <div id="drinks" className="row sections justify-content-sm-center">

        <p className="pageTitle col-12">Drinks</p>
        
        <div className="drinksContainer linedown">
            <Row>
            <p className="pageTitle col-12">ESPRESSO</p>
                <Col lg={6} className="drinkName">
                    <p>Esspresso</p>
                    <p>Latte</p>
                    <p>Cappucino</p>
                    <p>Flat White</p>
                    <p>Cafe Au Le</p>
                    <p>Americano</p>
                    <p>Caramel Latte</p>
                    <p>Mocha</p>
                </Col>
                <Col lg={6} className="temp">
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                </Col>
            </Row>
        </div>
        <div className="drinksContainer">
            <Row>
            <p className="pageTitle col-12">SPECIALTY</p>
                <Col lg={6} className="drinkName">
                    <p><span>Matcha Latte</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Black Sesame Latte</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p>Duo Specialty Latte</p>
                    <p><span>Red Bean Latte</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p>London Fog</p>
                    <p><span>Hot Chocolate</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                </Col>
                <Col lg={6} className="temp">
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                </Col>
                <p className="pageTitle col-12">TEA</p>
                <Col lg={6} className="drinkName">
                    <p>English Breakfast</p>
                    <p>Early Grey</p>
                    <p>Oolong Rose</p>
                    <p>Oolong Lavender</p>
                    <p><span>Mint</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p>Jasmine</p>
                    <p>Japanese Sencha</p>
                    <p><span>Chamomile</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                </Col>
                <Col lg={6} className="temp">
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot</p>
                </Col>
            </Row>
        </div>







        {/* <div id="menuItemContainer">
            <div id="esspresso" className="columnLeft">
                <dl>
                <dt className="menuTitle">ESSPRESSO BASED</dt>
                    <dt>Esspresso</dt>
                    <dt>Latte</dt><dd>Hot/Ice</dd>
                    <dt>Cappucino</dt><dd>Hot/Ice</dd>
                    <dt>Flat White</dt>
                    <dt>Cafe Au Le</dt>
                    <dt>Americano</dt><dd>Hot/Ice</dd>
                    <dt>Caramel Latte</dt><dd>Hot/Ice</dd>
                    <dt>Mocha</dt><dd>Hot/Ice</dd>
                </dl>
            </div>
            <div id="other" className="columnRight">
                <dl>
                    <dt className="menuTitle">SPECIALTY DRINKS</dt>
                    <dt>Matcha Latte</dt><dd>Hot/Ice</dd>
                    <dt>Black Sesame Latte</dt>
                    <dt>Duo Specialty Latte</dt><dd>Hot/Ice</dd>
                    <dt>Red Bean Latte</dt>
                    <dt>Hot Chocolate</dt><dd>Hot/Ice</dd>
                    <dt className="menuTitle">TEA</dt>
                    <dt>Early Grey</dt>
                    <dt>English Breakfast</dt>
                    <dt>Oolong Rose</dt>
                    <dt>Oolong Lavender</dt>
                    <dt>Mint</dt>
                    <dt>Jasmine</dt>
                    <dt>Japanese Sencha</dt>
                    <dt>Cammomile</dt>
                </dl>
            </div>

        </div> */}

        </div>
        <Back />
</div>


    )
}

export default Drinks;