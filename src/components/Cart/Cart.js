import React from 'react';

const cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;
    }
    return (
        <div>
            <h5>Summary:</h5>
            <p>Order Iteam:{cart.length}</p>
            <p>SubTotal Price:{total}</p>
        </div>
    );
};

export default cart;