import React from "react";
import { NavLink } from "react-router-dom";
import TopData from "../TopData";
const TopDeals = () => {
  const topItem = (props) => {
    return (
      <>
        <div class="card my-5 mx-3 py-4" key={props.id} style={{width: "18rem"}}>
          <img src={props.img} class="card-img-top" alt={props.title} height="300px"/>
          <div class="card-body text-center">
            <h5 class="card-title">{props.title}</h5>
            <p className="lead">{'\u20B9'}{props.price}</p>
            <NavLink to='/products' class="btn btn-outline-primary">
             BUY NOW
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">{TopData.map(topItem)}</div>
      </div>
    </div>
  );
};

export default TopDeals;
