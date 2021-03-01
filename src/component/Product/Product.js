import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {name, price, img, seller, stock} = props.product;
    return (
        <div className="product-container">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <a href="">{name}</a>
            <p><small>By : {seller}</small></p>
            <p>$ {price}</p>
            <p><small>Only {stock} left in stock - Order soon</small></p>
            <button type="submit" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/>Add to Car</button>
            </div>
        </div>
    );
};

export default Product;