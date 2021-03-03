import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => 
{
    const {img,name,seller,price,stock,star}=props.product;

    return (
        <div className="product">
            <div>
          
             <img src={img}></img>
            </div>
            <div>
            <h4>{name}</h4>
            <br/>
            <p><small>By:{seller}</small></p>
            <p>${price}</p>
            <br/>
            <p>Stock:{stock}</p>
            <br/>
            <button className="btn" onClick={()=>props.HandleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>


            </div>
            
            
        </div>
    );
};

export default Product;