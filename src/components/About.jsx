import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead">
              Becoming India’s no. 1 fashion destination is not an easy feat.
              Sincere efforts, digital enhancements and a team of dedicated
              personnel with an equally loyal customer base have made ShopMart the
              online platform that it is today. The original B2B venture for
              personalized gifts was conceived in 2007 but transitioned into a
              full-fledged ecommerce giant within a span of just a few years. By
              2012, ShopMart had introduced 350 Indian and international brands to
              its platform, and this has only grown in number each passing year.
              Today ShopMart sits on top of the online fashion game with an
              astounding social media following, a loyalty program dedicated to
              its customers, and tempting, hard-to-say-no-to deals. The ShopMart
              shopping app came into existence in the year 2015 to further
              encourage customers’ shopping sprees. Download the app on your
              Android or IOS device this very minute to experience fashion like
              never before.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rb3kSwAQ8kOrZoAHe8cKehACyjO5ZqssXw&usqp=CAU"
              alt="About us"
              height="550px"
              width="550px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
