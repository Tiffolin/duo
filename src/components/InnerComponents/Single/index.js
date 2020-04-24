import React from "react";
// import {NavLink} from "react-router-dom";
import Order from "../Order";
import Back from "../Back";
import avery from "./singleImage/avery.png";
import baba from "./singleImage/baba.png";
import blackforest from "./singleImage/blackforest.png";
import c4 from "./singleImage/c4.png";
import creme from "./singleImage/cream.png";
import fei from "./singleImage/fei.png";
import hazel from "./singleImage/hazel.png";
import lemontart from "./singleImage/lemontart.png";
import montblanc from "./singleImage/mb.png";
import mixberries from "./singleImage/mixberries.png";
import nova from "./singleImage/nova.png";
import pearl from "./singleImage/pearl.png";
import pistache from "./singleImage/pistache.png";
import sthonore from "./singleImage/sthonore.png";
import tatin from "./singleImage/tatin.png";
import virgo from "./singleImage/virgo.png";
import yuco from "./singleImage/yuco.png";
import dairy from "./allergens/dairy.png";
import wheat from "./allergens/wheat.png";
import egg from "./allergens/egg.png";
import nuts from "./allergens/nuts.png"

function Single() {
    return (
<div  className="justify-content-md-center">
    <Order />

        <div id="single" className="row sections justify-content-md-center">
            
        <p className="pageTitle col-12">INDIVIDUAL CAKES</p>
        <div className="cakeContainer">
            <img src={montblanc} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName">MONT BLANC</p>
                <div className="cakeDescription">
                    <p>Chestnut verimcele  with rum</p>
                    <p>Vanilla macepone</p>
                    <p>Chestnut soaked in aged rum</p>
                    <p>Almond cream</p>
                    <p>Shortbread crust</p>
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
            <img src={lemontart} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName">LEMON TART</p>
                <div className="cakeDescription">
                    <p>Fresh lime zest</p>
                    <p>Basil infused lemon cream</p>
                    <p>Almond shortbread crust</p>
                </div>
                <div className="allergy">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div> 
            </div>
        </div>
        <div className="cakeContainer">
            <img src={virgo} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName">VIRGO</p>
                <div className="cakeDescription">
                    <p>Honey marshmallow</p>
                    <p>Expreso mousse</p>
                    <p>White chocolate cream</p>
                    <p>Chocolate flourless biscuit</p>
                    <p>Coffee crème brûlée</p>
                    <p>Almond shortbread</p>
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
                    <p className="cakeSize">Available as a whole cake</p>  
                </div> 
                <div className="cakeDescription">
                    <p>Raspberry cream</p>
                    <p>Lychee gelee</p>
                    <p>Lychee soaked in Soho</p>
                    <p>Light lychee cream</p>
                    <p>shortbread crust</p>
                </div>
                <div className="allergy">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                </div> 
            </div>
        </div>
        <div className="cakeContainer">
            <img src={c4} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <div className="productName">
                    <p>C4</p>
                    <p className="cakeSize">Available as a whole cake</p>  
                </div> 
                <div className="cakeDescription">
                    <p>Chocolate nougatine</p>
                    <p>Chocolate mousse</p>
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

                {/* <NavLink to = "/Whole"><p className="cakeSize linktoWhole">| Available as a Whole Cake |</p></NavLink> */}
            </div>
        </div>
        <div className="cakeContainer">
            <img src={tatin} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName">TATIN</p>
                <div className="cakeDescription">
                    <p>Salted caramel crumb</p>
                    <p>Caramelized apple</p>
                    <p>Yuzu cream</p>
                    <p>Pastry cream</p>
                    <p>Short crust</p>
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
                    <p>MIXED BERRIES</p>
                    <p className="cakeSize">Available as a whole cake</p>  
                </div> 
                <div className="cakeDescription">
                    <p>Vanilla cream</p>
                    <p>Strawberry marmalade</p>
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
        <div className="cakeContainer">
            <img src={pearl} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName">PEARL</p>
                <div className="cakeDescription">
                    <p>Pâte à choux</p>
                    <p>Mint cream</p>
                    <p>Fresh mango</p>
                    <p>Mango crémeux</p>
                </div>
                <div className="allergy">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                </div> 
            </div>
        </div>
        <div className="cakeContainer">
            <img src={sthonore} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <div className="productName">
                    <p>ST HONORE</p>
                    <p className="cakeSize">Available as a whole cake</p>  
                </div> 
                <div className="cakeDescription">
                    <p>Hazelnut mousseline</p>
                    <p>Caramel coated pâte à choux</p>
                    <p>Homemade praline</p>
                    <p>Light lemon cream</p>
                    <p>Puff Pastry</p>
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
            <img src={avery} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName">AVERY</p>
                <div className="cakeDescription">
                    <p>Rose cheesecake</p>
                    <p>Vanilla sponge perfumed w/t strawberry</p>
                    <p>Raspberry cream</p>
                    <p>Crispy crust</p>
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
                    <p className="cakeSize">Available as a whole cake</p>  
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
            <img src={hazel} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName">HAZEL</p>
                <div className="cakeDescription">
                    <p>Dark chocolate mousse 66%</p>
                    <p>Hazelnut praline crispy</p>
                    <p>Almond sponge enrobed with toasted sesame</p>
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
            <img src={blackforest} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <div className="productName">
                    <p>BLACK FOREST</p>
                    <p className="cakeSize">Available as a whole cake</p>  
                </div> 
                <div className="cakeDescription">
                    <p>Chocolate mousse</p>
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
            <img src={nova} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName">NOVA</p>
                <div className="cakeDescription ">
                    <p>Vanilla cream</p>
                    <p>Caraïbe crémeux</p>
                    <p>Milk Chocolate mousse</p>
                    <p>Pistachio mousseline</p>
                    <p>Hazelnut dacquoise</p>
                    <p>Chocolate sable</p>
                </div>
                <div className="allergy ">
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
                    <p className="cakeSize">Available as a whole cake</p>  
                </div> 
                <div className="cakeDescription ">
                    <p>Fresh raspberry filled with raspberry jam</p>
                    <p>Pistachio cream</p>
                    <p>Raspberry jelly</p>
                    <p>Almond shortbread crust</p>
                </div>
                <div className="allergy ">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div> 
            </div>
        </div>
        <div className="cakeContainer">
            <img src={creme} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName ">CREMÉ CARAMEL</p>
                <div className="cakeDescription ">
                    <p>Caramel</p>
                    <p>Egg</p>
                </div> 
                <div className="allergy ">
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                </div>                 
            </div>
        </div>
        <div className="cakeContainer">
            <img src={baba} className="cakeImg img-fluid" alt="..."></img>
            <div className="cakeHover row">
                <p className="productName ">BABA</p>
                <div className="cakeDescription ">
                    <p>Congnac crème brûlée</p>
                    <p>Pouched pear</p>
                    <p>Vanilla cream</p>
                    <p>Rhum Baba</p>
                    <p>Almond crumble</p>
                </div>
                <div className="allergy ">
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

export default Single;