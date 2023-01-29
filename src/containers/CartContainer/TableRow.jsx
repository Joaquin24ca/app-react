import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/Shop'

const TableRow = ({product}) => {


const {removeProduct}=useContext(Shop);


  return (
    <tr className='fond-list'>
    <th className='fond-list text-success' scope="row">{product.id}</th>
    <td className='fond-list text-success'><img className='rounded mx-auto d-block' src={product.image} alt="table-row"style={{height:150}} /></td>
    <td  className='fond-list text-success'>{product.title}</td>
    <td className='fond-list text-success'>{product.price}</td>
    <td className='fond-list text-success'>{product.quantity}</td>
    <td className='fond-list text-success'><button className='button' onClick={() => removeProduct(product.id)}>Remove</button></td>
  
  </tr>
  )
}

export default TableRow