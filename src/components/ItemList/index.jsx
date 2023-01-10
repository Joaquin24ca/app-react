import React from 'react'
import Item from '../Item'

const ItemList = ({productos}) => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
        {productos.map(producto =>{
           return <Item product={producto} key={producto.id}/>
        })}
        
         </div>
  )
}

export default ItemList