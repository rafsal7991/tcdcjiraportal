import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './css/portal.css'
import Register from './register';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
    <div>
  <form className=' log'>
  <div className='mb-3 mt-3'>
      <label htmlFor='email' className='form-label'>Email:</label>
      <input type='email' className='form-control' id='email' placeholder='Enter email'></input>
  </div>
  <div className='mb-3'>
  <label className='form-label'>Password</label>
  <input type='password' className='form-control' id='pwd' placeholder='Enter password' name="pwd"></input>
  </div>
  <div className='form-check mb-3'>
      <label className='form-check-label'>
          <input className='form-check-input' type='checkbox' name='remember'></input>
          Remember me
      </label>
  </div>
  <button type='submit' className='btn btn-primary'>Login</button>
  <ul><li>you are not registered? <Link to="/register"><b>register here</b></Link></li></ul>

  </form>
  </div>
    );

}
export default Login;
