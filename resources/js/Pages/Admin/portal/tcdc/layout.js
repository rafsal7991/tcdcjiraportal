import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './tcdc.css'
import { Link } from 'react-router-dom';

const Layout = () => {
    return(
<div>
    <div>
        <ul class="nav justify-content-end nav-tabs">
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#home">HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#language">LANGUAGE</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#register">REGISTER</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="tcdclogin">LOGIN</a>
            </li>
        </ul>
    </div>
    <div class="container-fluid p-5 bg-white text-secondary text-center">
        <div class="row">
            <div class="col-sm-4">
                <img src="../images/Coat_of_arms_of_Tanzania.svg.pngsss" alt="tcdc image" width="120" height="120" />
            </div>
            <div class="col-sm-4"> 
                <h1>TCDC AJIRA</h1>
                <p>MFUMO WA USIMAMIZI WA AJIRA KATIKA VYAMA VYA USHIRIKA</p>
            </div>
            <div class="col-sm-4">
                <img src="images/tcdc.png" alt="tcdc image" width="120" height="120" float="left" />
            </div>

        </div>



    </div>
</div>
);
}
export default Layout;