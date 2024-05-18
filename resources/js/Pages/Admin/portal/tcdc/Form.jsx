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

function Form() {
    const [isOpen, setIsOpen] = useState("");
    const [name, setName] = useState("")
    const [originality, setOriginality] = useState("")
    const [post, setPost] = useState("")
    const [nida, setNida] = useState("")
    const [phone, setPhone] = useState("")
    const [placeBirth, setPlaceBirth] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [maritialStatus, setMaritialStatus] = useState("")

    async function details() {
        let Item = { name, originality, post, nida, phone, placeBirth, email }
        // console.warn(Item)

        let result = await fetch("http://localhost:8000/addDetails", {
            method: 'POST',
            body: JSON.stringify(Item)
        })
        // result = await Item.json()
        localStorage.setItem("data for rafsal", JSON.stringify(result))
    }

    return (
        <div>
            {/* <div><Header /></div> */}
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
                            <form action="/getdata" method='get'>

                                <br></br>
                                <label class='form-label'>FULL NAME</label>
                                <input className='form-control' type='name' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='eg RAPHAEL ELIAS RICHARDI'></input>
                                <br></br>
                                <label className='form-label'>GENDER</label>
                                <select className='form-select' name='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="other">OTHER</option>
                                    <option value="female">FEMALE</option>
                                    <option value="male">MALE</option>
                                </select><br></br>
                                <label class='form-label'>NIDA</label>
                                <input className='form-control' type='name' name='nida' value={nida} onChange={(e) => setNida(e.target.value)} placeholder='eg 79911025-21108-00001-27'></input>
                                <br></br>
                                <label class='form-label'>PHONE</label>
                                <input className='form-control' type='name' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='eg 0658381644'></input>
                                <br></br>
                                <label class='form-label'>MARITIAL STATUS</label>
                                <select className='form-select' name='maritialStatus' value={maritialStatus} onChange={(e) => setMaritialStatus(e.target.value)}>
                                    <option value="single">SINGLE</option>
                                    <option value="maried">MARRIED</option>
                                    <option value="divoced">DIVOCED</option>
                                </select>
                                <br></br>
                                <label class='form-label'>PLACE OF BIRTH</label>
                                <input className='form-control' type='name' name='placeBirth' value={placeBirth} onChange={(e) => setPlaceBirth(e.target.value)} placeholder='eg TANGA'></input>
                                <br></br>
                                <label class='form-label'>ORIGINALITY</label>
                                <input className='form-control' type='name' name='originality' value={originality} onChange={(e) => setOriginality(e.target.value)} placeholder='eg TANZANIA'></input>
                                <br></br>
                                <label class='form-label'>EMAIL</label>
                                <input className='form-control' type='name' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='eg raphaelrichard754@gmail.com'></input>
                                <br></br>
                                <label class='form-label'>POST ADRESS</label>
                                <input className='form-control' type='name' name='post' value={post} onChange={(e) => setPost(e.target.value)} placeholder='eg P.O.BOX 1789 TANGA'></input>
                                <br></br>
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
export default Form;

