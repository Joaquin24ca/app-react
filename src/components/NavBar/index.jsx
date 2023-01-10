import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CardWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fondo ">
  <div className="container-fluid">
    <Link  to="/" className="navbar-brand" >TuModa</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/category/men's clothing" className="nav-link">Moda Hombre</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/women's clothing" className="nav-link">Moda Mujer</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="buscar" aria-label="Search"/>
        <button className="btn btn-outline-success btn-info" type="submit">Buscar</button>
      </form>
      <CartWidget/>
    </div>
  </div>
</nav>
  )
}

export default NavBar