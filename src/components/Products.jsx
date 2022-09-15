import React from "react";

import CardItem from "./CardItem";
import ProductData from "../ProductData";
const Products = () => {
 
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container w-75 bg-info bg-gradient">
        <div className="row">
          {ProductData.map((item,index)=>{
            return(
              <CardItem id={item.id} img={item.img} title={item.title} price={item.price} item={item} key={index} />
            )
          })}</div>
      </div>
    </div>
  );
};

export default Products;
