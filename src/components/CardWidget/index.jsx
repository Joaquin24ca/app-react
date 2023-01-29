import React from 'react'
import { useContext } from 'react'
import {HiShoppingCart} from "react-icons/hi"
import { Shop } from '../../Context/Shop'
import {Link} from "react-router-dom";
const CartWidget = () => {

const {countCart}=useContext(Shop)



  return (
    <Link to ="/cart"> 
        <HiShoppingCart style={{height:40, width:40 , color:"white"}}/>
        <span style={{color:"white"}}>{countCart()}</span>
    </Link>
  )
}

export default CartWidget
