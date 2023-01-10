import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList'; 


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  
   const {categoryId}=useParams()

   console.log(categoryId)

      useEffect(()=>{
       
        fetch('https://fakestoreapi.com/products')
            .then(response => {
              console.log(response)
              return response.json()})
            .then(products=> {
              if(categoryId) {
                const productosFiltradosPorCategoria=products.filter(producto => producto.category===categoryId)
                console.log(productosFiltradosPorCategoria)
                setProducts(productosFiltradosPorCategoria)
              }else {
                setProducts(products)
              }
              

            })
        .catch((err)=>{
          alert("hubo un error")
        });
     


      }, [categoryId])
      console.log(products)

  return (
    <div>
  <ItemList productos={products}/>
    
    </div>
  )
}

export default ItemListContainer