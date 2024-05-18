import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './tcdc.css'
// import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Logo from '../images/rafsal.png'
import Logo1 from '../images/tcdc.png'
import Logo2 from '../images/Coat_of_arms_of_Tanzania.svg.png'
import { Component } from 'react';
import axios from 'axios';

class Test extends Component {

    state = {
        name: '',
        nida: '',
        post: '',
        placeBirth: '',
        originality: '',
        // gender: '',
        phone: '',
        email: '',
        // maritialStatus: '',


    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveDetails = async (e) => {
        e.preventDefault();
        const rec = await axios.post('/addDetails', this.state);

        if (rec.data.status === 200) {
            console.log("error is here");
            this.setState({
                name: '',
                nida: '',
                post: '',
                placeBirth: '',
                originality: '',
                // gender: '',
                phone: '',
                email: '',
                // maritialStatus: '',s
            });
        }
        else {
            return <>no data</>
        }
    }

    render() {
        return (
            <div>


                <div><Header /></div>
                <div class="div1">
                    <div class="row">
                        <div class="col-sm-3 div1 column1 spann">
                            <div class="broundsl">
                                <ul class="list-group">
                                    <h1 class="list-group-item-heading">DETAILS</h1>
                                    <img src={Logo} className='passport'></img><br></br>
                                    <a href="/dashbord" class="list-group-item  span">DASHBOARD</a><br></br>
                                    <a href="/personaldetails" class="list-group-item active span">PERSONAL DETAIL</a><br></br>
                                    <a href="#ACCADEMIC DETAILS" class="list-group-item span">ACCADEMIC DETAILS</a><br></br>
                                    <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                    <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                    <a href="#REFEREE" class="list-group-item span">REFEREE</a>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 bround centerdiv spancenter">


                            <div className='disp'><img src={Logo2} className='logo'></img><div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div><img src={Logo1} className='logo'></img></div>

                            <div>
                                {/* the div to contain all particulars  */}
                                <form action="/home" method='post'>
                                    <br></br>
                                    <label class='form-label'>FULL NAME</label>
                                    <input className='form-control' type='name' name='name' onChange={this.handleInput} value={this.state.name} placeholder='eg RAPHAEL ELIAS RICHARDI'></input>
                                    <br></br>
                                    {/* <label className='form-label'>GENDER</label>
                                    <select className='form-select' name='gender' onChange={this.handleInput} value={this.state.gender}>
                                        <option>OTHER</option>
                                        <option>FEMALE</option>
                                        <option>MALE</option>
                                    </select><br></br> */}
                                    <label class='form-label'>NIDA</label>
                                    <input className='form-control' type='name' name='nida' onChange={this.handleInput} value={this.state.nida} placeholder='eg 79911025-21108-00001-27'></input>
                                    <br></br>
                                    <label class='form-label'>PHONE</label>
                                    <input className='form-control' type='name' name='phone' onChange={this.handleInput} value={this.state.phone} placeholder='eg 0658381644'></input>
                                    <br></br>
                                    {/* <label class='form-label'>MARITIAL STATUS</label>
                                    <select className='form-select' name='maritialStatus' onChange={this.handleInput} value={this.state.maritialStatus}>
                                        <option>SINGLE</option>
                                        <option>MARRIED</option>
                                        <option>DIVOCED</option>
                                    </select> */}
                                    <br></br>
                                    <label class='form-label'>PLACE OF BIRTH</label>
                                    <input className='form-control' type='name' name='placeBirth' onChange={this.handleInput} value={this.state.placeBirth} placeholder='eg TANGA'></input>
                                    <br></br>
                                    <label class='form-label'>ORIGINALITY</label>
                                    <input className='form-control' type='name' name='originality' onChange={this.handleInput} value={this.state.originality} placeholder='eg TANZANIA'></input>
                                    <br></br>
                                    <label class='form-label'>EMAIL</label>
                                    <input className='form-control' type='name' name='email' onChange={this.handleInput} value={this.state.email} placeholder='eg raphaelrichard754@gmail.com'></input>
                                    <br></br>
                                    <label class='form-label'>POST ADRESS</label>
                                    <input className='form-control' type='name' name='post' onChange={this.handleInput} value={this.state.post} placeholder='eg P.O.BOX 1789 TANGA'></input>
                                    {/* <button type='button' className='btn btn-warning btn-sm float-end' onClick={this.saveDetails}>submit</button> */}
                                    <input type='submit' />
                                </form>



                            </div>
                        </div>
                        <div class="col-sm-3 div1 column2 spanni">
                            <div class="broundsr">
                                <ul class="list-group">
                                    <h1 class="list-group-item-heading">VACANCIES</h1>
                                    <a href="/vacancemanager" class="list-group-item span">MANAGERS/MAMENEJA <span class="badge rounded-pill bg-info">4</span></a><br></br>
                                    <a href="/chairman" class="list-group-item span">CHAIRMAN/WENYEVITIL<span class="badge rounded-pill bg-info">4</span></a><br></br>
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
}
export default Test;

