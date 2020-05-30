import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dairy from "./dairy.webp";
import wheat from "./wheat.webp";
import egg from "./egg.webp";
import nuts from "./nuts.webp"

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
            </Col>

            </Row>
        </div>   

        
    )
}

export default Allergens;