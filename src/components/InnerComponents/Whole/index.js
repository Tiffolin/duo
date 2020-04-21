import React from "react";
import Order from "../Order";
import Back from "../Back";
import garden from "./wholeImage/garden.png";
import sicily from "./wholeImage/sicily.png";
import c4 from "./wholeImage/c4.png";
import blackforest from "./wholeImage/blackforest.png";
import cadaeu from "./wholeImage/cadaeu.png";
import yuco from "./wholeImage/yuco.png";
import mixberries from "./wholeImage/mixberries.png";
import soleil from "./wholeImage/soleil.png";
import supernova from "./wholeImage/supernova.png";
import mona from "./wholeImage/mona.png";
import pistache from "./wholeImage/pistache.png";
import fei from "./wholeImage/fei.png";
import dairy from "../Single/allergens/dairy.png";
import wheat from "../Single/allergens/wheat.png";
import egg from "../Single/allergens/egg.png";
import nuts from "../Single/allergens/nuts.png"


function Whole() {
    return (
        <div>
            <Order />

        <div id="whole" className=" row sections justify-content-md-center">
        <p className="pageTitle">WHOLE CAKES</p>
  
        <div className="cakeContainer">
                <img src={garden} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>GARDEN</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Red berries</p>
                        <p>Vanilla cream</p>
                        <p>Strawberry bavarian cream</p>
                        <p>White sponge perfumed in raspberry & strawberry</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={soleil} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>SOLEIL</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div>
                    <div className="cakeDescription">
                        <p>Mint cream</p>
                        <p>Fresh mango and grapefruit compote</p>
                        <p>Mango cream</p>
                        <p>White sponge perfumed in mango & passionfruit</p>
                        <p>Mango crémeux </p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={cadaeu} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>CADAUE</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div>                  
                    <div className="cakeDescription">
                        <p>Toasted white chocolate</p>
                        <p>Expresso mousse</p>
                        <p>White chocolate supreme</p>
                        <p>Chocolate flourless biscuit</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={blackforest} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>BLACK FOREST</p>
                        <p className="cakeSize">4 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Chocolate mouse</p>
                        <p>Chocolate sponge soaked in kirsch</p>
                        <p>Cherry compote</p>
                        <p>Kirsch chantilly</p>
                        <p>Chocolate sable</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={yuco} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>YUCO</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Coconut nectar</p>
                        <p>Light yuzu cheesecake</p>
                        <p>Yuzu mango confit</p>
                        <p>Almond crispy crust</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={supernova} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>SUPERNOVA</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Vanilla cream</p>
                        <p>Caraïbe crémeux</p>
                        <p>Milk chocolate mousse</p>
                        <p>Pistachio mousseline</p>
                        <p>Hazelnut dacquoise</p>
                        <p>Chocolate sable</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={mona} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>MONA</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Dark chocolate mousse 66%</p>
                        <p>Orange yuzu marmalade</p>
                        <p>Mandarin Yuu creameux</p>
                        <p>Praline crispy</p>
                        <p>Almond sponge</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={c4} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>C4</p>
                        <p className="cakeSize">4 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Chocolate nougatine & mousse</p>
                        {/* <p>Chocolate mousse</p> */}
                        <p>Chocolate flourless biscuit</p>
                        <p>Nama Chocolate</p>
                        <p>Pecan praline</p>
                        <p>Chocolate sable</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={fei} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>FEI</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Raspberry cream</p>
                        <p>Lychee gelee</p>
                        <p>Lychee saoked in Soho</p>
                        <p>Light lychee cream</p>
                        <p>shortbread crust</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={pistache} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>PISTACHE</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Chantilly cream</p>
                        <p>Raspberry jam</p>
                        <p>Chocolate cake</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={sicily} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                <div className="productName">
                        <p>SICILY</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Almond cream</p>
                        <p>Vanilla cream encrusted in pistachio</p>
                        <p>Elder flower gelée</p>
                        <p>Fresh figs and raspberry</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={mixberries} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>mix berries</p>
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Vanilla cream</p>
                        <p>Strawberry mamalade</p>
                        <p>Almond cream</p>
                        <p>Puff pastry</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
        </div>
        <Back />
</div>
    )
}

export default Whole;