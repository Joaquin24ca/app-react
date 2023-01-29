import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"

const Item = ({product}) => {
  return (
    <div className="card m-4 diseño fond-list " style={{width:"14rem"}}>
    <img src={product.image} className="imagenes" alt={`id.${product.id}`}/>
    <div className="card-body">
      <h5 className="card-title  text-light">{product.title}</h5>
      <p className="card-text text-light ">S/{product.price}</p>
      <Link to ={`/detail/${product.id}`} className="btn btn-success">Ir a detalle</Link>
    </div>
  </div>
  )
}

export default Item