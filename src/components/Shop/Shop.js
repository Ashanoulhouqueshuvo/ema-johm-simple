import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from  '../Cart/Cart';

const Shop = () => {
    //console.log(fakeData);
    const firstTen=fakeData.slice(0,15);

    const[products,setProducts]= useState(firstTen);
    const[cart,setCart]=useState([]);


    const HandleAddProduct = (product) =>{
        console.log("add product successfully",product);
        const newCart=[...cart,product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            
            <div className="product-container">
<ul>
          {

                products.map(pd=> <Product 
                HandleAddProduct={HandleAddProduct}    
                product = {pd}> 
                </Product>)
           

          }

          </ul>
            </div>
            <div className="cart-container">

           <Cart cart={cart}></Cart>

            </div>
           
        </div>
    );
};

export default Shop;
