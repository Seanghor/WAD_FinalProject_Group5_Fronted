import React from 'react'
import '../.././pages/styles/home.css'
const ProductCard = (prop) => {
  return (
    <>
    <div className="col-md-3">
     <div className="card">
        <div className="card-main">
          <div className="new">New</div>
          <div className="image">
            <img src={prop.img} alt="" />
          </div>
          <div className="cart-line"></div>
        </div>
        <div className="content">
          <a href="/">{prop.name}</a>
          <div className="rating">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p><span className='price'>$ {prop.newPrice}</span><span className='price-old'>$ {prop.oldPrice}</span></p>
        </div>
     </div>
    </div>
    </>
  )
}

export default ProductCard