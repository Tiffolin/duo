import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import storeFront from "./storeFront.png";

function About() {
    return (         
        <div id="about" className="row justify-content-md-center sections">
             <Row>
         
                <Col lg={6} md={12} id="aboutImgContainer">
                    <img alt="boss5" src={storeFront} className="pictures2 img-fluid" ></img>
                </Col>
                <Col lg={6} md={12}>
                        <br></br><br></br>
                        <p className="pageTitle col-12">ABOUT US</p>
                        <p className="info col-12 aboutinfo">
                            <p>Duo pâtisserie is a French inspired café with a Japanese flare that specializes in viennoiseries, cakes and chocolates.</p>
                            <br></br>
                            <p>The business aims to serve decadent French classics to satisfy your sweet cravings.</p>
       
 
                           <div className="quotes">
                            <p>
                                "They're not French, but their obsession with the craft has raised the bar for croissants." - Suresh Doss, CBC Canada
                                </p>
                
                                <p>
                                "The croissant is quite buttery, with fluffy, rich layers." - Sami Elfar, blogTO
                                </p>
                           </div>

                    </p>
                </Col>
  
            </Row>
        </div>

    
    )
}

export default About;