import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const [names]=[props.cart];
   let name=[];
   for(const developer of names){
     name=  developer.name
   }
    const{cart}=props;
    let total=0;
    for(const developer of cart){
        total=total+developer.salary
    }
    return (
        <div className="cart-design">
            <h1>Cart</h1>
            <hr />
            <h3>Developer Added:{props.cart.length}</h3>
            <h3>Total Cost:{total}</h3>
            <h3>{name}</h3>
            <button className="button-color">Buy Now</button>
        </div>
    );
};

export default Cart;