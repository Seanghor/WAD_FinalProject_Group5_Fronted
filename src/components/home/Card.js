import React from 'react'
import '../.././pages/styles/home.css'
const Card = (prop) => {
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-main">
            <div className="image">
              <img src={prop.img} alt="" />
            </div>
          </div>
          <div className="content">
            <h2>{prop.name}</h2>
            <p><li className='nav-link' onClick={prop.event}>{prop.linkName}</li></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card