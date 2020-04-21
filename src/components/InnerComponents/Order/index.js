import React from "react";


function Order() {
    return (
        <div id="order" className="justify-content-md-center container-fluid">
            <p id="placeOrder">To place an order, please give us a call during business hours at <a href="tel:+19057632232">(905) 763-2232</a></p>    
            <p className="orderSub">Orders over $50 will require full payment over phones</p> 
            <p className="orderSub">Minimum 1 business day required for orders</p>     
        </div>   
    )
}

export default Order;