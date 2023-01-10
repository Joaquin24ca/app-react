import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className="card m-4 " style={{width:"14rem"}}>
    <img src={product.image} className="imagenes" alt={`id.${product.id}`}/>
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">S/{product.price}</p>
      <Link to ={`/detail/${product.id}`} className="btn btn-success">Go detail</Link>
    </div>
  </div>
  )
}

export default Item