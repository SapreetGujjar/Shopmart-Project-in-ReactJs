import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import ProductData from '../ProductData';

const ProductDetails = () => {
   
    const proid=useParams();
    const proDetail=ProductData.filter(x=>x.id == proid.id);
    const product=proDetail[0];
    console.log(product);

   
  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} alt={product.title} height="600px"/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr />
                <h2 className='my-4'>{'\u20B9'}{product.price}</h2>
                <p className='lead'>{product.desc}</p>
                <button className="btn btn-primary my-5"><NavLink className='text-white' to='/products'>Go Back</NavLink></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails