import React from 'react'
import '.././styles/placeOrder.css'
const placeOrder = () => {
  return (
    <div class="container">
        <div class="row">
                <div class="form col-5">
                    <h1>Billing details</h1>
                    <form action="#">
                        <div class="name">
                            <div class="form-group first_name">
                                <label for="name">First Name</label>
                                <input type="text" class="form-control" placeholder="Team 5" />
                            </div>
                            <div class="form-group last_name">
                                <label for="name">Last Name</label>
                                <input type="text" class="form-control" placeholder="team 5" />
                            </div>
                        </div>
                        <div class="information">
                            <div class="form-group company_name">
                                <label for="company">Company Name (optional)</label>
                                <input type="text" class="form-control" placeholder="KIT"  />
                            </div>
                            <div class="form-group country">
                                <label for="country">Country / Region</label>
                                <select name="country" class="form-control">
                                    <option value="country">Cambodia</option>
                                    <option value="country">USA</option>
                                    <option value="country">India</option>
                                    <option value="country">Thailand</option>
                                    <option value="country">Singapore</option>
                                </select>
                            </div>
                            <div class="street form-group">
                                    <label for="street">Street Address</label>
                                    <input type="text" class="form-control" placeholder="Phnom Penh " />
                            </div>
                            <div class="town form-group">
                                <label for="town">Town / City </label>
                                <input type="text" class="form-control" placeholder="Phnom Penh" />
                            </div>
                            <div class="province form-group">
                                <label for="province">Province</label>
                                <input type="text" class="form-control" placeholder="Kandal" />
                            </div>
                            <div class="zipCode form-group">
                                <label for="zip">Zip Code</label>
                                <input type="number" class="form-control" placeholder="12000" />
                            </div>
                            <div class="phone form-group">
                                <label for="phone">Phone</label>
                                <input type="number" class="form-control" placeholder="012345678 /" />
                            </div>
                            <div class="form-group email">
                                <label for="inputEmail">Email Address</label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="addMore form-group">
                                <label for="add-More"></label>
                                <input type="text" class="form-control" placeholder="Add more infomation" />
                            </div>
                        </div>
                    </form>
                </div>
        
        
            <div class="col placeOder">
                <div class="row order">
                    <div class="col">
                        <h1>product</h1>
                        <p>Coca</p>
                        <p>Subtotal</p>
                        <h2 class="total">Total</h2>
                    </div>
                    <div class="col">
                        <h1>Subtotal</h1>
                        <p>70.00$</p>
                        <p>70.00$</p>
                        <h2 class="total">70.00$</h2>
                    </div>
                </div>
                <hr/>
                <div class="description">
                    <ul class="describe">
                        <li>
                          <p><strong>Direct Bank Transfer</strong> </p> 
                        </li>
                    </ul>
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <ul type="circle">
                        <li>Direct Bank Transfer</li>
                        <li>Cash On Delivery</li>
                    </ul>
                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

                </div>
                <div class="checkout-btb">
                    <button type="submit">Place Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default placeOrder
