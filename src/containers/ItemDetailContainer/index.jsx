import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';



const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})


  const {id} = useParams()
  
      useEffect(()=>{
       
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response=>
              {  console.log(response)
                 return response.json()})
            .then(json=>{
              console.log(json)
              setDetail(json)})
        .catch((err)=>{
          alert("hubo un error")
        });
     


      }, [id])

      

  return (
    <div>
      <ItemDetail detail={detail}/>

     </div>
  )
}

export default ItemDetailContainer