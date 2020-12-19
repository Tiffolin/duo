import alcohol from "../Allergens/alcohol.png";
import React from "react";
// other components
import Order from "../Order";
import Allergens from "../Allergens";
import Back from "../Back";
//product Image
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
// import xmas from "./wholeImage/xmas.png";
import xmas2 from "./wholeImage/dor.png";
import xmas3 from "./wholeImage/rouge.png";
// import pavlova from "./wholeImage/pavlova.png";
// allergens
import dairy from "../Allergens/dairy.png";
import wheat from "../Allergens/wheat.png";
import egg from "../Allergens/egg.png";
import nuts from "../Allergens/nuts.png";


function Whole() {
    return (
        <div className="sections">
            <Order />

        <div id="whole" className=" row justify-content-md-center">
        <p className="pageTitle">WHOLE CAKES</p>
        <Allergens />
                    <div className="cakeContainer">
                <img src={xmas3} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>Rouge </p>
                        <p className="cakeSize">6 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Earl Grey Mousse</p>
                        <p>Rose Cheesecake</p>
                        <p>Raspberry Gelée</p>
                        <p>Almond Sponge Perfumed with Strawberry Soaking</p>
                        <p>Raspberry Mousse</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
                        <div className="cakeContainer">
                <img src={xmas2} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>D'or </p>
                        <p className="cakeSize">6 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Dark Chocolate Mousse</p>
                        <p>Honey Mousse</p>
                        <p>Caramel Mascarpone Cream</p>
                        <p>Caramelized Apples</p>
                        <p>Walnut Dacquoise</p>
                        <p>Chocolate Sablé</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>

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
                        <p>White sponge perfumed in Raspberry & strawberry</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
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
                        <p>Fresh mango and grapefruit Compote</p>
                        <p>Mango cream</p>
                        <p>White sponge perfumed in Mango & passionfruit</p>
                        <p>Mango crémeux </p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={cadaeu} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>CADEAU</p> 
                        <p className="cakeSize">4 serving | 8 serving</p>  
                    </div>                  
                    <div className="cakeDescription">
                        <p>Toasted white chocolate</p>
                        <p>Espresso mousse</p>
                        <p>White chocolate supreme</p>
                        <p>Chocolate flour-less biscuit</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={blackforest} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>BLACK FOREST (seasonal)</p>
                        <p className="cakeSize">4 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Chocolate mousse</p>
                        <p>Chocolate sponge soaked in Kirsch</p>
                        <p>Cherry compote</p>
                        <p>Kirsch chantilly</p>
                        <p>Chocolate sable</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
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
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
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
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
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
                        <p>Mandarin yuzu creameux</p>
                        <p>Praline crispy</p>
                        <p>Almond sponge</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
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
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={fei} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>FEI</p>
                        <p className="cakeSize">4 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Raspberry cream</p>
                        <p>Lychee gelee</p>
                        <p>Lychee soaked in Soho</p>
                        <p>Light lychee cream</p>
                        <p>Shortbread crust</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={pistache} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>PISTACHE</p>
                        <p className="cakeSize">4 serving | 6 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Fresh raspberry filled with Raspberry jam</p>
                        <p>Pistachio cream</p>
                        <p>Raspberry jelly</p>
                        <p>Almond shortbread crust</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={sicily} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                <div className="productName">
                        <p>SICILY</p>
                        <p className="cakeSize">4 serving | 6 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Almond cream</p>
                        <p>Vanilla cream encrusted in Pistachio</p>
                        <p>Elder flower gelée</p>
                        <p>Fresh figs and raspberry</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={mixberries} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <div className="productName">
                        <p>Mixed berries</p>
                        <p className="cakeSize">4 serving</p>  
                    </div> 
                    <div className="cakeDescription">
                        <p>Vanilla cream</p>
                        <p>Strawberry marmalade</p>
                        <p>Almond cream</p>
                        <p>Puff pastry</p>
                    </div>
                    <div className="allergy">
                        <span> <img className="allergen col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergen col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergen col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergen col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>

        </div>
        <Back />
</div>
    )
}

export default Whole;