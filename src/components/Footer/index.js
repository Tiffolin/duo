import React from "react";
import '../style.css';
import'../mobileStyle.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import insta from "./ig.png";
import fb from "./fb.png";
import linkedIn from "./linkedIn.png";
import email from "./email.png";
import payment from "./payment.png";

function Footer() {
    return (

            <div id="footer">
                <Row>
                <Col lg={1} md={1} sm={0}></Col>
                    <Col  lg={4} md={4} sm={12} className="footerDivider ">
                        <p className="pageTitle">JOIN OUR TEAM</p>
                        <p className="footerSub justify-content-center">
                        We are always looking for enthusiastic individuals to join our team.  
                        Please click on the link below to apply for a position that is right for you.  
                        Only selected candidates will be contacted.</p>
                      
                        <p className="orderSub nosolicitations">*No orders or solicitations please</p>
                        <div id="email" className="justify-content-center">
                            <a href="mailto:Info@duo-patisserie.com?cc=cjclgd@gmail.com&subject=Job%20Candidate:%20[position%20]&body=I'm%20interested%20in%20joining%20the%0A%0Aa)%20Front%20Team%20(Barista)%0A%0Ab)%20Back%20Team%20(Kitchen)%0A%0AI%20can%20work%20the%20following%20days:%0A%0AI%20can%20start%20on:%0A%0AThe%20best%20times%20to%20reach%20me%20are:%0A%0APlease%20briefly%20introduce%20yourself%20and%20attach%20your%20resume%0A%0AOnly%20selected%20candidates%20will%20be%20contacted%0A%0AThank%20you%20for%20your%20interested%20in%20Duo%20Patisserie%20&%20Cafe%0A%0A">
                            <img src={email} className="emailImg img-fluid" alt="..."></img> 
                            </a>
                        </div>
                    </Col>
                    <Col lg={2}md={2} sm={0}></Col>
                    <Col lg={4} md={4} sm={12} className="footerDivider">
                        <p className="pageTitle">FOLLOW US ON:</p>
                        <div id="snsContainer">
                            <a href="https://www.instagram.com/duo_patisserie/">
                                <span id="instagram"><img src={insta} className="snsImg img-fluid" alt="..."></img></span>
                            </a>
                            <a href="https://www.facebook.com/duopattiseriecafe/">
                                <span id="facebook"><img src={fb} className="snsImg img-fluid" alt="..."></img></span>
                            </a>
                            {/* <a href="https://www.linkedin.com/company/duopatisserie/">
                                <span id="linkedIn"><img src={linkedIn} className="snsImg img-fluid" alt="..."></img></span>
                            </a> */}
                        </div>            
                        <div id="footerAddress">
                            <p className="footerAddressSub">ADDRESS</p>
                            <p className="footerAddressSub">230 Commerce Valley Dr E #4 Thornhill</p>
                            <p className="footerAddressSub">L3T 7Y3，Ontario, Canada</p>
                        </div>
                    </Col>
                    <Col lg={1}md={1} sm={0}></Col>
                    <Col lg={12}className="container-fluid">
                        <div id="copyright"><a href="http://www.duopatisserie.com">© 2020, Duo Pâtisserie & Café </a></div>
                        <a href="http://www.tiffolin.com"><div id="developer">developer : TiffoLin</div></a>
                        <img src={payment} id="paymenImg" className="img-fluid"alt="..."></img>
                        
                    </Col>
                    </Row>
            </div>
            

    )
}

export default Footer;

