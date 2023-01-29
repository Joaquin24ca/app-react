import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CardWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fondo ">
  <div className="container-fluid">
    <Link  to="/" className="navbar-brand text-white" >TuModa</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/category/men's clothing" className="nav-link text-white">Moda Hombre</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/women's clothing" className="nav-link text-white">Moda Mujer</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/electronics" className="nav-link text-white">Electronicos</Link>
        </li>
      </ul>
     
      <CartWidget/>
    </div>
  </div>
</nav>
  )
}

export default NavBar