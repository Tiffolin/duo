import React from "react";


function Order() {
    return (
        <div id="order" className="justify-content-md-center container-fluid">
            {/* <p id="placeOrder">To place an order, please give us a call during business hours at <a href="tel:+19057632232">(905) 763-2232</a></p>    
            <p className="orderSub">Orders over $50 will require full payment over phones</p> 
            <p className="orderSub">Minimum 1 business day required for orders</p>      */}

            <p className="placeOrder">For all orders, a minimum of 1 business day is required. Please call us at <a href="tel:+19057632232">(905) 763-2232</a> during our regular business hours.</p>
            <p className="orderSub">Full payment is required for over the phone orders over $50 or more</p>
        </div>   

        
    )
}

export default Order;