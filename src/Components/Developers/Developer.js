import React, { useEffect, useState } from 'react';
import AllDeveloper from '../AllDeveloper/AllDeveloper';
import Cart from '../Cart/Cart';
import './Developer.css'

const Developer = () => {
    const [developers, setDevelopers]=useState([])
    const [cart, setCart]=useState([])
    useEffect( ()=>{
        fetch('./developers.JSON')
        .then(res=>res.json())
        .then(data=>setDevelopers(data))
    }, [])

    const handAddToCart=developer=>{
        // console.log(developer.name)
        const newCart=[...cart,developer]
        setCart(newCart);
    }
    return (
    <div className="main-dev">
         <div className="dev">
    {
        developers.map(developer=><AllDeveloper 
            handAddToCart={handAddToCart}
            developer={developer}></AllDeveloper>)
    }
    
    </div>
    <div className="group-container">
              <Cart cart={cart}></Cart>
          </div>
    </div>
    );
};

export default Developer;