import React from 'react'
import '.././styles/signup.css'
import { Link } from 'react-router-dom';

const signup = () => {
  return (
    <div class="container">
      <div class="col-md-6 register">
        <h1>Register</h1>
        <div class="text">
          <p>let ‘s get  you all set up so you can verify your account  and begin 
            <br/>setting up  your profile.
          </p>
        </div>
      </div>
        
      <div class="form row">
        {/* Left side form  */}
        <div class="col-md-6 input_left">
          <div class="first_name">
            <p>First Name</p>
            <input type="text" placeholder="sothea" class="item" />
          </div>
          <div class="phone_number">
            <p>Phone Number</p>
            <input type="number" placeholder="01234567" class="item"  />
          </div>
          <div class="password">
            <p>Password</p>
            <input type="password" placeholder="1234@14" class="item" />
          </div> 
        </div>

        {/* Right side form */}
        <div class="col-md-6 input_right">
          <div class="last_name">
            <p>Last Name</p>
            <input type="text" placeholder="team5" class="item" />
          </div>
          <div class="email">
            <p>Email Address</p>
            <input type="email" placeholder="team4@gmail.com" class="item" />
          </div>
          <div class="confirm_password">
            <p>Confirm Password</p>
            <input type="password" placeholder="1234@14" class="item" />
          </div>
        </div>

        {/* Text under Left side form */}
        <div class="text_under">
          <div class="tick1">
            <input type="checkbox" className='checkbox' />
            <label for="text"> Yes, This is my personal email.</label>
          </div>
          <div class="tick2">
              <input type="checkbox" className='checkbox' />
              <label for="text"> I agree with the terms <a href="/">private policy.</a></label>
          </div>
        </div>
        <div class="col-md-6 btn">
          <button  type="submit">Sign Up</button>
          
        </div>
        <p>Already have an Account ? <Link to="/signin">Login</Link></p>
          
      </div>
      
        
    </div>
  )
}

export default signup