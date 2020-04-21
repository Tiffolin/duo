import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import About from "./components/InnerComponents/About"
import Main from "./components/Main";
import Cakes from "./components/InnerComponents/Cakes";
import Whole from "./components/InnerComponents/Whole";
import Single from "./components/InnerComponents/Single";
import Viennoiseries from "./components/InnerComponents/Viennoiseries";
import PoundCakes from "./components/InnerComponents/PoundCakes";
import Drinks from "./components/InnerComponents/Drinks";
// import Retail from "./components/InnerComponents/Retail";
import LocationHours from "./components/InnerComponents/LocationHours";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>        
          <div className="justify-content-md-center">
            <Route exact path="/duo" component={Splash} />
            <Navbar />
            <ScrollToTop>
            <Route exact path="/About" component={About} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/Cakes" component={Cakes} />
            <Route exact path="/Whole" component={Whole} />
            <Route exact path="/Single" component={Single} />
            <Route exact path="/Viennoiseries" component={Viennoiseries} />
            <Route exact path="/PoundCakes" component={PoundCakes} />
            <Route exact path="/Drinks" component={Drinks} />
            {/* <Route exact path="/Retail" component={Retail} /> */}
            <Route exact path="/LocationHours" component={LocationHours} />
            </ScrollToTop>
            <Footer/>
          </div>
      </BrowserRouter>   


    </div>
  );
}


export default App;
