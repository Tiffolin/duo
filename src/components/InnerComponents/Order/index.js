import React from "react";


function Order() {
    return (
        <div id="order" className="justify-content-md-center container-fluid">
            {/* <div className="notice col-12  justify-content-md-center">
                Due to COVID-19, we are faced with the challenge of both shortage of supplies and staff.  
                As a result, our store hours, products, and availability may change at anytime.  
                We advise customers to call us in advance to place your order (1 business day required), 
                check product availability and confirm store hours.  
                We apologize in advance for any inconvenience we may have caused, and we are trying our best to serve you better.
            </div>
            <br></br>
            <br></br> */}

            <p className="placeOrder">For orders, cancellations & rescheules, a minimum of 1 business day is required. Please call us at <a href="tel:+19057632232">(905) 763-2232</a> during our regular business hours.</p>
            <p className="orderSub">Full payment is required for over the phone orders over $50 or more</p>
        </div>   

        
    )
}

export default Order;