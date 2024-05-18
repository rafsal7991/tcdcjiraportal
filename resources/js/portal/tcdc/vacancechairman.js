import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './tcdc.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Logo from '../images/rafsal.png'
import Logo1 from '../images/tcdc.png'
import Logo2 from '../images/Coat_of_arms_of_Tanzania.svg.png'

const Vacancechairman = () => {
    return (
        <div>
            <div><Header /></div>
            <div class="div1">
                <div class="row">
                    <div class="col-sm-3 div1 column1 spann">
                        <div class="brounds">
                            <ul class="list-group">
                                <h1 class="list-group-item-heading">DETAILS</h1>
                                <img src={Logo} className='passport'></img><br></br>
                                <a href="#dashboard" class="list-group-item active span">DASHBOARD</a><br></br>
                                <a href="#PERSONAL DETAIL" class="list-group-item span">PERSONAL DETAIL</a><br></br>
                                <a href="#ACCADEMIC DETAILS" class="list-group-item span">ACCADEMIC DETAILS</a><br></br>
                                <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                <a href="#REFEREE" class="list-group-item span">REFEREE</a>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 bround centerdiv spancenter">


                        <div className='disp'><img src={Logo2} className='logo'></img><div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div><img src={Logo1} className='logo'></img></div>

                        <p>chama cha wachapakazi ajira (3) kwa mameneja na watendaji wa vyama... condition <b>reposted</b></p>
                        <a href="login"> apply</a>
                        <p>chama cha wachapakazi ajira (2) kwa maafisa tehama</p>
                        <a href="login">  apply</a>
                        <p>chama cha wachapakazi ajira (2) kwa wahasibu</p>
                        <a href="login"> apply</a>
                    </div>
                    <div class="col-sm-3 div1 column2 spanni">
                        <div class="brounds">
                            <ul class="list-group">
                                <h1 class="list-group-item-heading">VACANCIES</h1>
                                <a href="/vacancemanager" class="list-group-item span">MANAGERS/MAMENEJA <span class="badge rounded-pill bg-info">4</span></a><br></br>
                                <a href="/vacancechairman" class="list-group-item span">CHAIRMAN/WENYEVITIL<span class="badge rounded-pill bg-info">4</span></a><br></br>
                                <a href="#ICT/TEHAMA" class="list-group-item span">ICT/TEHAMA <span class="badge rounded-pill bg-info">4</span></a><br></br>
                                <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">FINANCE/UHASIBU <span class="badge rounded-pill bg-info">4</span></a><br></br>
                                <a href="#OTHER FILDS" class="list-group-item span">OTHER FILDS <span class="badge rounded-pill bg-info">4</span></a><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
}
export default Vacancechairman;
