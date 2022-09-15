import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImuG9L7NHhP-b8oB9Yom7hKfqjI-OFVh1VA&usqp=CAU" alt="Contact us" height="400px" width="400px" />
          </div>
          <div className="col-md-6">
            <div class="mb-3">
              <label for="exampleForm" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleForm"
                placeholder="Abc"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
               Feedback or Query
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
              <button type="submit" className="btn btn-outline-primary my-3 w-100">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
