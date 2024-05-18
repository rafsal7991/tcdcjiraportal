import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './tcdc.css'
// import { Link } from 'react-router-dom'
import Logo from '../images/tcdc.png'

const Header = () => {
    return (
        <div className=''>
            <div>
                <nav class="navbar navbar-expand-sm ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">

                        </a>
                        <ul class="nav justify-content-end nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link" href="#home">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#language">LANGUAGE</a>
                            </li>
                            <li class="nav-item">

                                <a class="nav-link" href="#register">NOTIFICATIONS <span class="badge bg-danger">4</span></a>
                            </li>
                        </ul>
                    </div>


                </nav>

            </div>

        </div>
    );
}
export default Header;