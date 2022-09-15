import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeData from '../HomeData';
const HomeSection = () => {

    const homeItem = (props) => {
        return (
          <>
            <div class="card my-5 mx-3 py-4" key={props.id} style={{width: "18rem"}}>
              <img src={props.img} class="card-img-top" alt={props.title} height="180px"/>
              <div class="card-body text-center">
                <h5 class="card-title fs-3">{props.title}</h5>
              <NavLink to='/products' class="text-black">
                 BUY NOW
                </NavLink>
              </div>
            </div>
          </>
        );
      };
  return (
    <div>
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          
          <hr />
        </div>
      </div>
    </div>
    <div className="container w-auto bg-light bg-gradient text-center">
      <div className="row">{HomeData.map(homeItem)}</div>
    </div>
  </div>
  )
}

export default HomeSection