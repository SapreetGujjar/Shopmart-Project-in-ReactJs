import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-light mt-auto text-center text-white">
  
  <div className="container p-4 pb-0">
    
    <section className="mb-4">
     
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><i className="fa fa-facebook-f"></i
      ></a>

      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#55acee"}}
        href="#!"
        role="button"
        ><i className="fa fa-twitter"></i
      ></a>

    
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#dd4b39"}}
        href="#!"
        role="button"
        ><i className="fa fa-google"></i
      ></a>

      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#ac2bac"}}
        href="#!"
        role="button"
        ><i className="fa fa-instagram"></i
      ></a>

      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="#!"
        role="button"
        ><i className="fa fa-linkedin"></i
      ></a>
      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#333333"}}
        href="#!"
        role="button"
        ><i className="fa fa-github"></i
      ></a>
    </section>
   
  </div>
  
  <div className="text-center p-3 text-black" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright: By Sapreet GuJJar  
    <a className="text-black" href="#"> Shopmart.com</a>
  </div>
 
</footer>
    </>
    )
}

export default Footer