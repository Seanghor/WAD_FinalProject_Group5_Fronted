import React from 'react'
import '.././styles/signin.css'
import { Link } from 'react-router-dom';
const signin = () => {
  return (

    <div class="container">
      <div class="row">
        {/* Login Form Left Side */}
        <div class="col-md-6 ">
          <h1 class="login">Login</h1>
            <form action="">
              <div class="form-group">
                <label for="email">Username or Email address </label>
                <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" placeholder="kitchi" />
              </div>

              <div class="form-group">
                <label for="password"> Password</label>
                <input type="password" class="form-control" id="input-password" placeholder="123345" />
              </div>

              {/* Rememeber me & Forget pwd */}
              <div class="row">
                <div class="col-md-4">
                  <input type="checkbox" className='checkbox' />
                  <label for="text"> Remember me</label>
                </div>
                <div class="col-md-4 forgetpassword">
                  <p>Forgot password?</p>
                </div>
              </div>

              {/* Login Btn */}
              <div className="row">
                <div class="btn">
                  <button type="submit" class="btb btb-primary">Log in</button>
                </div>                
              </div>
              <div class="row">
                  <p>Don't you have account? <Link to="/signup">Signup</Link></p>
                </div>
            </form>
        </div>

        {/* Welcome Right Side */}
        <div class="col-md-6 welcome d-flex justify-content-center">
          <div class=" text-center">
            <p>Welcome <a href='/'>Back!</a></p>
          </div>
        </div>
    </div>
</div>
  )
}

export default signin
