import React from "react";
// other components
import Order from "../Order";
import Back from "../Back";
// product Image
import almondcroissant from "./viennoiseriesImage/almondcroissant.webp";
import applecroissant from "./viennoiseriesImage/applecroissant.webp";
import banane from "./viennoiseriesImage/banane.webp";
import bichon from "./viennoiseriesImage/bichon.webp";
import blacksesamebrioche from "./viennoiseriesImage/blacksesamebrioche.webp";
import briocheloaf from "./viennoiseriesImage/briocheloaf.webp";
import briochetete from "./viennoiseriesImage/briochetete.webp";
import canele from "./viennoiseriesImage/canele.webp";
import cheddargreyure from "./viennoiseriesImage/cheddargreyure.webp";
import chestnut from "./viennoiseriesImage/chestnut.webp";
import chocoalmond from "./viennoiseriesImage/chocoalmond.webp";
import chocobook from "./viennoiseriesImage/chocobook.webp";
import cinnamonrasonbrioche from "./viennoiseriesImage/cinnamonrasonbrioche.webp";
import citrusbrioche from "./viennoiseriesImage/citrusbrioche.webp";
import frangipane from "./viennoiseriesImage/frangipane.webp";
import gb from "./viennoiseriesImage/gb.webp";
import hamandcheese from "./viennoiseriesImage/hamandcheese.webp";
import honeytwist from "./viennoiseriesImage/honeytwist.webp";
import matchabook from "./viennoiseriesImage/matchabook.webp";
import panauchocolat from "./viennoiseriesImage/panauchocolat.webp";
import pistachiobrioche from "./viennoiseriesImage/pistachiobrioche.webp";
import plaincroissant from "./viennoiseriesImage/plaincroissant.webp";
import polonaise from "./viennoiseriesImage/polonaise.webp";
import quiche from "./viennoiseriesImage/quiche.webp";
import raspberryrose from "./viennoiseriesImage/raspberryrose.webp";
import roastbeef from "./viennoiseriesImage/roastbeef.webp";
import salamiandcheese from "./viennoiseriesImage/salamiandcheese.webp";
import tropezienne from "./viennoiseriesImage/tropezienne.webp";
import vanillacustard from "./viennoiseriesImage/vanillacustard.webp";
import almondcroissant2 from "./viennoiseriesImage/almondcroissant.webp";
import applecroissant2 from "./viennoiseriesImage/applecroissant.webp";
import banane2 from "./viennoiseriesImage/banane.webp";
import bichon2 from "./viennoiseriesImage/bichon.webp";
import blacksesamebrioche2 from "./viennoiseriesImage/blacksesamebrioche.webp";
import briocheloaf2 from "./viennoiseriesImage/briocheloaf.webp";
import briochetete2 from "./viennoiseriesImage/briochetete.webp";
import canele2 from "./viennoiseriesImage/canele.webp";
import cheddargreyure2 from "./viennoiseriesImage/cheddargreyure.webp";
import chestnut2 from "./viennoiseriesImage/chestnut.webp";
import chocoalmond2 from "./viennoiseriesImage/chocoalmond.webp";
import chocobook2 from "./viennoiseriesImage/chocobook.webp";
import cinnamonrasonbrioche2 from "./viennoiseriesImage/cinnamonrasonbrioche.webp";
import citrusbrioche2 from "./viennoiseriesImage/citrusbrioche.webp";
import frangipane2 from "./viennoiseriesImage/frangipane.webp";
import gb2 from "./viennoiseriesImage/gb.webp";
import hamandcheese2 from "./viennoiseriesImage/hamandcheese.webp";
import honeytwist2 from "./viennoiseriesImage/honeytwist.webp";
import matchabook2 from "./viennoiseriesImage/matchabook.webp";
import panauchocolat2 from "./viennoiseriesImage/panauchocolat.webp";
import pistachiobrioche2 from "./viennoiseriesImage/pistachiobrioche.webp";
import plaincroissant2 from "./viennoiseriesImage/plaincroissant.webp";
import polonaise2 from "./viennoiseriesImage/polonaise.webp";
import quiche2 from "./viennoiseriesImage/quiche.webp";
import raspberryrose2 from "./viennoiseriesImage/raspberryrose.webp";
import roastbeef2 from "./viennoiseriesImage/roastbeef.webp";
import salamiandcheese2 from "./viennoiseriesImage/salamiandcheese.webp";
import tropezienne2 from "./viennoiseriesImage/tropezienne.webp";
import vanillacustard2 from "./viennoiseriesImage/vanillacustard.webp";

function Viennoiseries() {
    return (
<div className="sections">
    <Order />
        <div id="viennoiseries" className="row justify-content-center">
        <p class="pageTitle col-12">VIENNOISERIES</p>

            <div className="pastryContainer">
                <img src={plaincroissant} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Plain Croissant</span><br></br>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={panauchocolat} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Pain Au Chocolate</span><br></br>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={almondcroissant} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Almond Croissant</span><br></br>
                     <span className="pastryDescription ">almond paste</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={chocoalmond} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Chocolate Almond Croissant</span><br></br>
                     <span className="pastryDescription ">chocolate, almond paste, hazelnut</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={roastbeef} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Roast Beef Croissant</span><br></br>
                     <span className="pastryDescription ">roast beef, swiss cheese, mushroom</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={hamandcheese} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Ham & Cheese Croissant</span><br></br>
                     <span className="pastryDescription">black forest ham, swiss cheese</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={salamiandcheese} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Salami & Cheese Croissant</span><br></br>
                     <span className="pastryDescription ">spicy salami, swiss cheese</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={polonaise} className="pastryImg img-fluid" alt="..."></img>
                        
                <div className="pastryHover">
                     <span className="pastryName ">Polonaise</span><br></br>
                     <span className="pastryDescription ">double baked croissant, hazelnuts, rum</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={vanillacustard} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">8</span><br></br>
                     <span className="pastryDescription ">vanilla custard</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={raspberryrose} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Raspberry Rose</span><br></br>
                     <span className="pastryDescription ">strawberry, raspberry, rose paste</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={honeytwist} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Honey Twist</span><br></br>
                     <span className="pastryDescription ">honey glazed</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={applecroissant} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Apple Croissant</span><br></br>
                     <span className="pastryDescription ">apple, vanilla custard</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={citrusbrioche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Citrus Brioche</span><br></br>
                     <span className="pastryDescription ">citrus zest</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={cinnamonrasonbrioche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Cinnamon & Raison Brioche</span><br></br>
                     <span className="pastryDescription ">cinnamon, raison</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={blacksesamebrioche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Black Sesame Brioche</span><br></br>
                     <span className="pastryDescription ">black sesame paste</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={pistachiobrioche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Pistachio Brioche</span><br></br>
                     <span className="pastryDescription ">pistachio</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={cheddargreyure} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Gruyère & Cheddar Brioche</span><br></br>
                     <span className="pastryDescription "></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={briochetete} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Brioche À Tête</span><br></br>
                     <span className="pastryDescription "></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={briocheloaf} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Brioche Loaf</span><br></br>
                     <span className="pastryDescription "></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={canele} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName">Canelé</span><br></br>
                     <span className="pastryDescription">rum, vanilla, egg</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={chestnut} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Chestnut Tart</span><br></br>
                     <span className="pastryDescription">chestnut paste</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={banane} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Banane</span><br></br>
                     <span className="pastryDescription">banana compote</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={bichon} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName">Bichon</span><br></br>
                     <span className="pastryDescription">lemon pastry cream</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={frangipane} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Frangipane</span><br></br>
                     <span className="pastryDescription ">almond cream, cassis jam, apple compote</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={gb} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName">Gâteau Basque</span><br></br>
                     <span className="pastryDescription "> matcha cream with raspberry</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={chocobook} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Book</span><br></br>
                     <span className="pastryDescription ">Chocolate cream filled</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={matchabook} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Book</span><br></br>
                     <span className="pastryDescription ">Matcha cream filled</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={tropezienne} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName ">Tropézienne</span><br></br>
                     <span className="pastryDescription ">vanilla custard cream</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={quiche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName">Daily Quiche</span><br></br>
                     <span className="pastryDescription ">Lorranie, Eggplant, Salmon, Shepherd's</span>
                </div>
            </div>

        </div>
        <Back />
</div>
    )
}

export default Viennoiseries;