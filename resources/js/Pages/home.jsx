import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './css/portal.css'
import image from './images/katani.jpeg';
const Home = () => {
  return (
    <div>
      {/* the first apeared row */}
      <div className='row'>
        <div className='col-sm-12 firstDiv'>
          <div><img src='./images/Coat_of_arms_of_Tanzania.svg.png' className='rounded' alt='coat of arm' /></div>
          <div>MFUMO WA AJIRA KWA VYAMA VYA USHIRIKA</div>
          <div><img src='./images/tcdc.PNG' className='rounded' alt='tcdc' /></div>
        </div>
      </div>

      {/* the second apeared row */}
      <div className='row'>
        <div className='col-sm-3 leftDiv'>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className='container-fluid'>
              <a className='navbar-brand' href='#'>
                <img src='rafsal.png' alt='Avatar-Logo' style={{ width: "40px" }} className='rounded-pill'></img>
              </a>
            </div>
          </nav>
        </div>


        <div className='col-sm-6 centerDiv'>
          <div><p>registration status</p></div><br></br>
          <div className='progress'>

            <div className='progress-bar' style={{ width: "70%" }}>70%</div>
          </div>
        </div>
        <div className='col-sm-3 rightDiv'>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 firstDiv'>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom'>
            <div className='footer'>by rafsal <b>2023</b></div>
          </nav>
        </div>
      </div>

    </div>
  );
}
export default Home;