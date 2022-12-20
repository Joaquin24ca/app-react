import React from 'react'

const Item = ({title}) => {
  return (
    <div className="card m-4 " style={{width:"18rem"}}>
    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_640978-MPE41384463075_042020-F.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Item