/* eslint-disable react/jsx-no-undef */
import React, { useContext } from 'react';
import TableRow from "./TableRow";
import { useState } from 'react';
import { Shop } from '../../Context/Shop';
import generateOrderObject from '../../Services/generateOrderObjects';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../Firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import FormComp from '../../components/Form';
import Spinner from 'react-bootstrap/Spinner';
import Swal from "sweetalert2";




const Cart = () => {
  const {products,total,cleanCart}=useContext(Shop);
  const[formsVis , setFormVis]=useState(false);

 const [loader,setLoader]=useState(false);




 

  console.log(products)

  const confirmPurchase = async (dataDelFormulario) => {

    const{phone:telefono,nombre,email}=dataDelFormulario


  try {

    setLoader(true);

    const order = generateOrderObject({
      nombre,
      email ,
      telefono,
      cart:products,
      total : total(),
   
      })
     setFormVis(true);
   
     console.log(order);
     
   
   
     
     const docRef = await addDoc(collection(db, "orders"), order);
     cleanCart()

     for (const productCart of products) {
     

const productRef = doc(db, "products",productCart.id);

// Set the "capital" field of the city 'DC'
await updateDoc(productRef, {
  stock: productCart.stock - productCart.quantity
});
     }

     Swal.fire(
      'Orden procesada con id :' + docRef.id,
      'Muchas gracias por su compra',
      'success'
    )
     
   
    

  } catch (error) {
    console.log(error);
  } finally{
    setLoader(false);
    setFormVis(false);
  }



  }

  return (

    <>
    
     {
         products.length !== 0 ?
 
          <>
 <table class="table table-striped mt-5 tamaño">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">remove</th>
    </tr>
  </thead>
  <tbody>
  {products.map(product => {
    return <TableRow key={product.id} product={product}/>
  })}
  </tbody>
</table>
 

{
  loader ? 
  <Spinner animation="grow" variant="success" />
  :
  <button onClick={ () => setFormVis(true)}>Confirm purchase</button>
}
 
           </>

           :
            <>
<h1 className='noproduct'>No hay productos en el carrito</h1>
<button className='noproduct-boton'>
  <Link className='text-white ' to ="/">Home</Link>
</button>
            </>
}



     { formsVis ?
     <FormComp 
    confirmPurchase={confirmPurchase}
    formVis={formsVis}
    setFormVis={setFormVis}
     />
       :null}


    </>
  
  )
}

export default Cart