import React from "react";
import Order from "../Order";
import Back from "../Back";
import dairy from "../Single/allergens/dairy.png";
import wheat from "../Single/allergens/wheat.png";
import egg from "../Single/allergens/egg.png";
import nuts from "../Single/allergens/nuts.png";
import alcohol from "../Single/allergens/alcohol.PNG";
import peacan from "./poundCakeImg/peacan.png";
import rasp from "./poundCakeImg/rasp.png";
import citrus from "./poundCakeImg/citrus.png";
import choco from "./poundCakeImg/choco.png";
import apple from "./poundCakeImg/apple.png";
import matcha from "./poundCakeImg/matcha.png";
import chestnut from "./poundCakeImg/chestnut.png";
import fruit from "./poundCakeImg/fruit.png";


function Whole() {
    return (
        <div>
            <Order />

        <div id="whole" className=" row sections justify-content-md-center">
        <p className="pageTitle">Travel Cake</p>
  
        <div className="pCakeContainer">
                <img src={peacan} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>PEACAN</p>                        
                        <p className="cakeSize">Pound Cake</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Peacan</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
        </div>
        <div className="pCakeContainer">
                <img src={rasp} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>RASPBERRY PISTACHIO</p>
                        <p className="cakeSize">Pound Cake</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Raspberry Jam</p>
                        <p>Pistachio</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
        </div>
        <div className="pCakeContainer">
                <img src={citrus} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>CITRUS</p>
                        <p className="cakeSize">Pound Cake</p>   
                    </div>
                    <div className="cakeDescription">
                        <p>Candied Oranges</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
        </div>          
        <div className="pCakeContainer">
                <img src={choco} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>CHOCOLATE</p>
                        <p className="cakeSize">Pound Cake</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Chocolate</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
        </div>        
        <div className="pCakeContainer">
                <img src={apple} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>MAPLE APPLE</p>
                        <p className="cakeSize">Pound Cake</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Maple</p>
                        <p>Caramelized Apple</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
        </div>       
        <div className="pCakeContainer">
                <img src={matcha} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>MATCHA</p>
                        <p className="cakeSize">Pound Cake</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Matcha</p>
                        <p>Almond Flour</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
        </div>       
        <div className="pCakeContainer">
                <img src={chestnut} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>CHESTNUT</p>
                        <p className="cakeSize">Pound Cake</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Chestnut</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
        </div>
        <div className="pCakeContainer">
                <img src={fruit} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>FRUIT</p>
                        <p className="cakeSize">Pound Cake</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Figs</p>
                        <p>Cherry</p>
                        <p>Apple</p>
                        <p>Citrus</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                        <span> <img className="allergents col-2" src={alcohol} alt="nuts"></img></span>
                    </div> 
                </div>
        </div>       
        </div>
        <Back />
</div>
    )
}

export default Whole;