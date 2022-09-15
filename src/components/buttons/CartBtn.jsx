import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
const CartBtn = () => {
const {totalItems}=useCart()
  return (
   <>
   <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
    Cart({totalItems})

   </NavLink>
   </>
  )
}

export default CartBtn;