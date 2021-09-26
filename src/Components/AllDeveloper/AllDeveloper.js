import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './AllDeveloper.css'

const AllDeveloper = (props) => {
    // console.log(props.developer)
    const {name, age, img, salary, place, profession}=props.developer;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
      <div className="developer-container">
          <div className="developers">
        <div>
        <img className="single-img" src={img} alt="" />
           <h3>{name}</h3>
           <p>{profession}</p>
           <h4>Age:{age}</h4>
           <h4>Institution:{place}</h4>
           <h4>Salary:{salary}</h4>
           <button onClick={ ()=>props.handAddToCart(props.developer)} className="btn-color"> {element} Add to group</button>
        </div>
          </div>
         

      </div>
    );
};

export default AllDeveloper;