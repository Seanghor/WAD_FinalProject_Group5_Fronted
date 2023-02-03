import React from 'react'
import './navbar.css'
import kitchiLogo from '../.././assets/image/logo.svg';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="kitchilogo">
            <img src={kitchiLogo} alt="" />
          </div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className="nav-item" to="/">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </NavLink>
              <NavLink className="nav-item" to="/shop">
                <a className="nav-link" href="/shop">Shop</a>
              </NavLink>
              <NavLink className="nav-item" to="/about">
                <a className="nav-link" href="/about">About</a>
              </NavLink>
              <NavLink className="nav-item" to="/contact">
                <a className="nav-link" href="/contact">Contact</a>
              </NavLink>

              </ul>
              <div className="d-flex ">
                <div className="p-4">
                  <NavLink className="nav-link" to="/signin">
                     <i className="bi bi-person-exclamation icon"></i>
                  </NavLink>
                </div>
                <div className="p-4">
                  <i className="bi bi-heart icon"></i>
                </div>
                <div className="p-4">
                  <NavLink class="nav-link" to="/placeOrder">
                  <i className="bi bi-cart icon"></i>
                  </NavLink>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
