import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid py-2">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/products'>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>
                  Contact
                </NavLink>
              </li>
             
            </ul>
           
          </div>
          <NavLink className="navbar-brand fw-bold" to='/'>
            SHOPMART
          </NavLink>
          <Login/>
          <Signup/>
          <CartBtn/>
        </div>
      </nav>
    </>
  );
};

export default Header;
