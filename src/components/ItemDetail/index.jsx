import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shop } from '../../Context/Shop';
import ItemCount from '../ItemCount';



const ItemDetail = ({detail}) => {
const [quantity,setQuantity]=useState(0)

const {addProduct}=useContext(Shop)



 const onAdd=(cantidad)=>{
  console.log(`Se agrego cantidad de productos :${cantidad}`)
  setQuantity(cantidad)
  addProduct({...detail,quantity : cantidad})

}
 

  return (
    <div className="card centrado fond-list" style={{width:"14rem"}}>
    <img src={detail.image} class="img-fluid img-thumbnail" alt={`id.${detail.id}`}/>
    <div className="card-body">
      <h5 className="card-title text-light">{detail.title}</h5>
      <p className="card-text text-light"> S/{detail.price}</p>

     {
      quantity===0 ?
     <ItemCount 
     stock={20} 
     initial={1}
     onAdd={onAdd}
     />
     : <button className='btn btn-success'>
      <Link to ="/Cart">
      Go cart

      </Link>
     
      
      </button>
    }
    </div>
  </div>
    
  )
}

export default ItemDetail