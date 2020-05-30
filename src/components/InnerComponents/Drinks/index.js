import React from "react";
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Back from "../Back";
import caffeineFree from "./caffeineFree.png";

function Drinks() {
    return (
<div>

        <div id="drinks" className="row sections justify-content-sm-center">

        <p className="pageTitle col-12">Drinks</p>
        
        <div className="sectionContainer linedown">
            <Row>
            <p className="pageTitle col-12">ESPRESSO</p>
                <Col lg={7} className="productName2 drinkName">
                    <p>Espresso</p>
                    <p>Americano</p>
                    <p><span>Espresso Machiato </span>
                        <span className="drinkDescript"></span>
                    </p>
                    <p>Cappucino</p>
                    <p>Flat White</p>
                    <p>Latte</p>
                    <p>Caramel Latte</p>
                    <p>Mocha</p>
                    <p><span>Café au lait </span>
                        <span className="drinkDescript"></span>
                    </p>
                </Col>
                <Col lg={5} className="temp">
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                    <p>Hot</p>
                </Col>
                <p className="pageTitle col-12">TEA</p>
                <Col lg={7} className="productName2 drinkName">
                    <p><span>Early Grey</span></p>
                    <p><span>Oolong Rose</span></p>
                    <p><span>Oolong Lavender</span></p>
                    <p><span>White Moonlight Tea</span></p>
                    <p><span>Simply Mango White</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Lemon Fresh</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Genmaicha</span></p>
                    <p><span>Jasmine</span></p>
                    <p><span>English Breakfast</span></p>
                    <p><span>Mint</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Chamomile</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                </Col>
                <Col lg={5} className="temp">
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot</p>
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
        <div className="sectionContainer">
            <Row>
            <p className="pageTitle col-12">SPECIALTY</p>
                <Col lg={7} className="productName2 drinkName">
                    <p><span>Premium Chocolate </span>
                        <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>London Fog </span>
                        <span className="drinkDescript"></span>
                    </p>
                    <p><span>Chai Latte </span>
                        <span className="drinkDescript"></span>
                    </p>
                    <p><span>Matcha Latte </span>
                        <span className="drinkDescript"></span>
                    </p>
                    <p><span>Black Sesame Latte</span>
                    <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Hazelnut Latte </span>
                        <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Ginger Lemonade </span>
                        <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Duo Specialty Latte </span>
                        <span className="drinkDescript"></span>
                    </p>
                </Col>
                <Col lg={5} className="temp">
                    <p>Hot/Ice</p>
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                    <p>Hot</p>
                    <p>Hot</p>
                    <p>Hot/Ice</p>
                    <p>Hot/Ice</p>
                </Col>
                <p className="pageTitle col-12">BOTTLED BEVERAGE</p>
                <Col lg={7} className="productName2 drinkName">
                    <p><span>Sanpellegrino</span>
                        <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Aranciata</span>
                        <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Limonata</span>
                        <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Orangina</span>
                        <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                    <p><span>Fiji Water</span>
                        <span><img src={caffeineFree} className="caffeineFree" alt="..."></img></span>
                    </p>
                </Col>
                <Col lg={5} className="temp">
                    <p>Ice</p>
                    <p>Ice</p>
                    <p>Ice</p>
                    <p>Ice</p>
                    <p>Ice</p>
                </Col>
                <p className="pageTitle col-12">EXTRA</p>
                <Col lg={12} className="productName2 drinkName">
                    <p><span>1 Espresso Shot</span></p>
                    <p><span>1 Scoop of Matcha</span></p>
                    <p><span>1 Pump of Syrup</span></p>
                    <p><span>1 Scoop of Honey</span></p>
                    <p><span>1 Tea bag</span> </p>
                    <p><span>Steamed milk</span> </p>
                    <p><span>Dairy choices & alternatives: Whole | Skim | Lactose | Soy </span></p>
                </Col>

            </Row>
        </div>
        </div>
        <Back />
</div>


    )
}

export default Drinks;