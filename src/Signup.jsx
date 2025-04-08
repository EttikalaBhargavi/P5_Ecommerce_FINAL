import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


function Signup() {
  return (
    <><br></br>
    <h6 align="center">DON'T HAVE AN ACCOUNT? <span style={{color:'blue'}}>SIGNUP</span></h6>  <br></br>
    <h3 align='center'>SIGNUP</h3>
      <div className="row-3">
        <div className='col-12'>
          <div className="my-container">
  <form>
  
  <div className="form-row"> <br></br>
  <div className="form-group col-md-8">
      <label for="inputName">Full Name</label>
      <input type="name" className="form-control" id="inputName" placeholder="Full Name"/>
    </div>
    <div className="form-group col-md-8">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-8">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group col-md-8">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-8">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-8">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose</option>
        <option>Andhra Pradesh</option>
        <option>Telangana</option>

      </select>
    </div> 
  </div> 
  <br></br>
  <button type="submit" className="btn btn-primary">Sign up</button>
</form>
</div>
</div>
</div>
    </>
  )
}

export default Signup
