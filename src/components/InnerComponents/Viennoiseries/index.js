import React from "react";
// other components
import Order from "../Order";
import Back from "../Back";
// product Image
import almondcroissant from "./viennoiseriesImage/almondcroissant.png";
import applecroissant from "./viennoiseriesImage/applecroissant.png";
import banane from "./viennoiseriesImage/banane.png";
import bichon from "./viennoiseriesImage/bichon.png";
import blacksesamebrioche from "./viennoiseriesImage/blacksesamebrioche.png";
import briocheloaf from "./viennoiseriesImage/briocheloaf.png";
import briochetete from "./viennoiseriesImage/briochetete.png";
import canele from "./viennoiseriesImage/canele.png";
import cheddargreyure from "./viennoiseriesImage/cheddargreyure.png";
import chestnut from "./viennoiseriesImage/chestnut.png";
import chocoalmond from "./viennoiseriesImage/chocoalmond.png";
import chocobook from "./viennoiseriesImage/chocobook.png";
import cinnamonrasonbrioche from "./viennoiseriesImage/cinnamonrasonbrioche.png";
import citrusbrioche from "./viennoiseriesImage/citrusbrioche.png";
import frangipane from "./viennoiseriesImage/frangipane.png";
import gb from "./viennoiseriesImage/gb.png";
import hamandcheese from "./viennoiseriesImage/hamandcheese.png";
import honeytwist from "./viennoiseriesImage/honeytwist.png";
import matchabook from "./viennoiseriesImage/matchabook.png";
import panauchocolat from "./viennoiseriesImage/panauchocolat.png";
import pistachiobrioche from "./viennoiseriesImage/pistachiobrioche.png";
import plaincroissant from "./viennoiseriesImage/plaincroissant.png";
import polonaise from "./viennoiseriesImage/polonaise.png";
import quiche from "./viennoiseriesImage/quiche.png";
import raspberryrose from "./viennoiseriesImage/raspberryrose.png";
import roastbeef from "./viennoiseriesImage/roastbeef.png";
import salamiandcheese from "./viennoiseriesImage/salamiandcheese.png";
import tropezienne from "./viennoiseriesImage/tropezienne.png";
import vanillacustard from "./viennoiseriesImage/vanillacustard.png";
import almondcroissant2 from "./viennoiseriesImage/almondcroissant.png";
import applecroissant2 from "./viennoiseriesImage/applecroissant.png";
import banane2 from "./viennoiseriesImage/banane.png";
import bichon2 from "./viennoiseriesImage/bichon.png";
import blacksesamebrioche2 from "./viennoiseriesImage/blacksesamebrioche.png";
import briocheloaf2 from "./viennoiseriesImage/briocheloaf.png";
import briochetete2 from "./viennoiseriesImage/briochetete.png";
import canele2 from "./viennoiseriesImage/canele.png";
// import cheddargreyure2 from "./viennoiseriesImage/cheddargreyure.png";
import chestnut2 from "./viennoiseriesImage/chestnut.png";
import chocoalmond2 from "./viennoiseriesImage/chocoalmond.png";
import chocobook2 from "./viennoiseriesImage/chocobook.png";
import cinnamonrasonbrioche2 from "./viennoiseriesImage/cinnamonrasonbrioche.png";
import citrusbrioche2 from "./viennoiseriesImage/citrusbrioche.png";
import frangipane2 from "./viennoiseriesImage/frangipane.png";
import gb2 from "./viennoiseriesImage/gb.png";
import hamandcheese2 from "./viennoiseriesImage/hamandcheese.png";
import honeytwist2 from "./viennoiseriesImage/honeytwist.png";
import matchabook2 from "./viennoiseriesImage/matchabook.png";
import panauchocolat2 from "./viennoiseriesImage/panauchocolat.png";
import pistachiobrioche2 from "./viennoiseriesImage/pistachiobrioche.png";
import plaincroissant2 from "./viennoiseriesImage/plaincroissant.png";
import polonaise2 from "./viennoiseriesImage/polonaise.png";
import quiche2 from "./viennoiseriesImage/quiche.png";
import raspberryrose2 from "./viennoiseriesImage/raspberryrose.png";
import roastbeef2 from "./viennoiseriesImage/roastbeef.png";
import salamiandcheese2 from "./viennoiseriesImage/salamiandcheese.png";
import tropezienne2 from "./viennoiseriesImage/tropezienne.png";
import vanillacustard2 from "./viennoiseriesImage/vanillacustard.png";
import turkeyB from "./viennoiseriesImage/turkeyB.png";
// import hazelnutBanana from "./viennoiseriesImage/hazelnutBanana.png";
// import appleturnover from "./viennoiseriesImage/appleturnover.png";
import peach from "./viennoiseriesImage/peach.png";
import pear from "./viennoiseriesImage/pear.png";




function Viennoiseries() {
    return (
<div className="sections">
    <Order />
        <div id="viennoiseries" className="row justify-content-center">
        <p class="pageTitle col-12">VIENNOISERIES</p>
            <div className="pastryContainer">
                <img src={pear} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Pear Danish</span><br></br>
                     <span className="pastryDescription col-5">pear & caramel pastry cream</span>
                </div>
            </div>
                        <div className="pastryContainer">
                <img src={peach} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Peach</span><br></br>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={turkeyB} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="pastryName ">Turkey Bechamel</span><br></br>
                     <span className="pastryDescription col-5">mushroom white sauce & smoke turkey</span>
                </div>
            </div>
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
                     <span className="productName">Quiche</span><br></br>
                     <span className="pastryDescription ">Salmon, Shepherd's</span>
                     <br></br>
                     <span className="pastryDescription ">(Friday, Saturday, Sunday)</span>
                     
                </div>
            </div>

        </div>
        <Back />
</div>
    )
}

export default Viennoiseries;