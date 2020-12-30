import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dairy from "./dairy.png";
import wheat from "./wheat.png";
import egg from "./egg.png";
import nuts from "./nuts.png"
import alcohol from "./alcohol.png"

function Allergens() {
    return (
        <div id="allergensLegend" className="container-fluid">
            <Row>
            <Col lg={12} sm={12} className="allergenIndex">ALLERGEN INDEX :</Col>
            <Col lg={12} sm={12} className="allergenContainer container-fluid">
                <span>Wheat</span>
                <span><img src={wheat} className="allergens img-fluid"alt="wheat"></img></span>
                <span>Dairy</span>
                <span><img src={dairy} className="allergens img-fluid"alt="dairy"></img></span>
                <span>Egg</span>
                <span><img src={egg} className="allergens img-fluid"alt="egg"></img></span>
                <span>Nuts</span>
                <span><img src={nuts} className="allergens img-fluid"alt="nuts"></img></span>
                <span>Alcohol</span>
                <span><img src={alcohol} className="allergens img-fluid"alt="alcohol"></img></span>
            </Col>

            </Row>
        </div>   

        
    )
}

export default Allergens;