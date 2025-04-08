import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function Signin() {
  return (
    <> <br></br>
    <h3 align='center'>SIGNIN</h3>
      <div className="row-12">
        <div className="my-container">    
 <form><br></br>
  <div className="col-md-7" >
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div> <br></br><br></br>
  <div className="col-md-7">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-2 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember me</label>
  </div> <br></br>
  <button type="submit" className="btn btn-primary">Signin</button>
</form> <br></br><br></br>
</div>
    
</div>
    </>
  )
}

export default Signin
