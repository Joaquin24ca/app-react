import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Ad from '../../components/Ad';
import ItemList from '../../components/ItemList'; 
import { db } from '../../Firebase/config';
import { collection, getDocs ,query,where} from "firebase/firestore"; 


const ItemListContainer = () => {

  const [products, setProducts] = useState([])

   
  const [adVisibility, setAdVisibility] =useState(true)
  
   const {categoryId}=useParams()

   console.log(categoryId)

// Cerrar add con escape

useEffect(() => {
  const handleEsc = (event) => {
      console.log(event); 

      if (event.keyCode === 27) {
          console.log("will close");
          setAdVisibility(false)
          window.removeEventListener("keydown", handleEsc);
      }
  };

  window.addEventListener("keydown", handleEsc);

  return () => {
      window.removeEventListener("keydown", handleEsc);
  };
}, []);

// Se ejecuta cuando se monta el componente
      useEffect(()=>{

       const getProducts = async() => {
        let querySnapshot;

        if(categoryId){
          const q = query(collection(db, "products"), where("category", "==", categoryId));

          querySnapshot = await getDocs(q);
        } else{
            querySnapshot = await getDocs(collection(db,"products"));
        }
        
        const productosFirebase=[];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          const product = {
            id:doc.id,
            ...doc.data()
          }
          productosFirebase.push(product)
        });
        setProducts(productosFirebase)
       }

           getProducts();

       


      }, [categoryId])


     const handleCloseAd =()=>{
         setAdVisibility(false)
     }

      console.log(products)

  return (
    <div >
  <ItemList productos={products}/>

{
  adVisibility===true
  ?<Ad>
  <h3>Tenemos ofertas increibles solo por este mes, aprovecha la oportunidad</h3>
   <button style={{width:100, padding : 8, border: "2px solid white"}} onClick={handleCloseAd}>
     Cerrar
   </button>
  </Ad>
  : null

}

   
    
    </div>
  )
}

export default ItemListContainer