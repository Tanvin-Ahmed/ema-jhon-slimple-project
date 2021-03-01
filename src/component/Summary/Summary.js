import React from 'react';
import "./Summary.css";
const Summary = (props) => {
    let shipping = 0;
    const cart = props.summary;
    console.log(cart.price);
    shipping = cart.shipping;
    let total = cart.reduce((total, cart) => total + cart.price,0);
    total = Number(total.toFixed(2));
    const tax = Number((total*0.1).toFixed(2));
    const grentTotal = Number((total + tax).toFixed(2));
    return (
        <div className="summary-container">
            <h2>Ordered Summary</h2>
            <p>Ordered Items : {cart.length}</p>
            <p>Price : {total}$</p>
            <p><small>Shipping : {shipping}</small></p>
            <p>Tax : {tax}$</p>
            <p>Total Price : {grentTotal}</p>
        </div>
    );
};

export default Summary;