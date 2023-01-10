import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
  return (
    <div className="card centrado" style={{width:"14rem"}}>
    <img src={detail.image} class="img-fluid img-thumbnail" alt={`id.${detail.id}`}/>
    <div className="card-body">
      <h5 className="card-title">{detail.title}</h5>
      <p className="card-text"> S/{detail.price}</p>
      <Link to ={`/detail/${detail.id}`} className="btn btn-success">Buy</Link>
    </div>
  </div>
    
  )
}

export default ItemDetail