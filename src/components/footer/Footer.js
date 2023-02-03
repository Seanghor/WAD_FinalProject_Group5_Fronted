import React from 'react';
import { useNavigate } from "react-router";
import Navbar from '../navbar/Navbar';
import './footer.css';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
    <footer className='text-center text-lg-start bg-light text-muted mt-auto'>
        <section className=''>

        <div className="container text-center text-md-start mt-55">
          <div className="row mt-3">
          {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/*  Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Group Project
          </h6>
          <p>
           Web development final project Group5
          </p>
        </div>
        {/* Grid column  */}

        {/* Grid column  */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/*  Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Links
          </h6>
          <p>
            <a href="/" className="text-reset" onClick={() => navigate('/')}>Home</a>
          </p>
          <p>
            <a href="/shop" className="text-reset"onClick={() => navigate('/shop')}>Shop</a>
          </p>
          <p>
            <a href="/about" className="text-reset" onClick={() => navigate('/about')}>About</a>
          </p>
          <p>
            <a href="/contact" className="text-reset" onClick={() => navigate('/contact')}>Contact</a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Help
          </h6>
          <p>
            <a href="#!" className="text-reset">Payment Options</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Returns</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Privacy Policies</a>
          </p>
        </div>
        {/* Grid column */}

        {/*  Grid column  */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <div>
            <h4>Newsletter</h4>
            <div>
              <label for="Newsletter" className="form-label">Subscribe To Our Newsletter</label>
              <input type="text" className='form-control' placeholder='Enter Your Email'/>
              <button className="btn btn-danger mt-3">Subscribe</button>
            </div>
          </div>
        </div>
        {/* Grid Column */}
        <div className="text-center p-4 mb-4" style={{backgroundColor: (0.,0,0,0.05)}}>
          <p className="text-reset fw-bold"><span>© 2023 Copyright :</span> Group5 All rights reserved</p>
        </div>
      </div>
    </div>

     </section>
    </footer>
    </>
  )
}

export default Footer