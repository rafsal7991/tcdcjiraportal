import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../portal/tcdc/tcdc.css';
// import { Link } from 'react-router-dom';
import Header from '../portal/tcdc/Header';
import Footer from '../portal/tcdc/Footer';
import Logo from '../portal/images/rafsal.png'
import Logo1 from '../portal/images/tcdc.png'
import Logo2 from '../portal/images//Coat_of_arms_of_Tanzania.svg.png'
import { Component } from 'react';
import axios from 'axios';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Form from '../portal/tcdc/Form';
import Dashbord from '@/portal/tcdc/Dashbord';
import { Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';


export default function AccademicDetails({ auth }) {
    const { data, post, processing, setData } = useForm({
        edlevel: '',
        country: '',
        Institution: '',
        category: '',
        program: '',
        certificate: '',
        awardDate: '',
    });


    const PostData = (e) => {
        setIsOpen(false);
        e.preventDefault();
        post('AddAccademic');



    }

    const [isOpen, setIsOpen] = useState(false)


    return (
        <AuthenticatedLayout
            user={auth.user}
        // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Header /></h2>}
        >
            {/* <Head title="Dashboard" /> */}

            <div className="">

                <div class="div1">
                    <div class="row">
                        <div class="col-sm-3 div1 column1 spann">
                            <div class="broundsl">
                                <ul class="list-group">
                                    <h1 class="list-group-item-heading">DETAILS</h1>
                                    <img src={Logo} className='passport'></img><br></br>
                                    <a href="/dashboard" class="list-group-item  span">DASHBOARD</a><br></br>
                                    <a href="/personaldetails" class="list-group-item  span">PERSONAL DETAIL</a><br></br>
                                    <a href="/accademic" class="list-group-item active span">ACCADEMIC DETAILS</a><br></br>
                                    <a href="/proofesional QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                    <a href="/referee" class="list-group-item span">REFEREE</a>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 bround centerdiv spancenter">


                            <div className='disp'><img src={Logo2} className='logo'></img><div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div><img src={Logo1} className='logo'></img></div>

                            <div>
                                {/* the div to contain all particulars  */}
                                <br></br>
                                <div className='accH'><p>ACCADEMIC INFORMATION</p>
                                </div>
                                <>
                                    {isOpen ? <div>
                                        <form onSubmit={PostData}>

                                            <label className='form-label'>education level</label>
                                            <select className='form-select' name='Edlevel' value={data.edlevel} onChange={(e) => setData('edlevel', e.target.value)}>
                                                <option value="">select level</option>
                                                <option value="advanced">advanced</option>
                                                <option value="diploma">diploma</option>
                                                <option value="certificates">certificates</option>
                                                <option value="form four">form four</option>
                                                <option value="form six">form six</option>
                                            </select><br></br>
                                            <label className='form-label'>country</label>
                                            <select className='form-select' name='country' value={data.country} onChange={(e) => setData('country', e.target.value)}>
                                                <option value="">select country</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Uganda">uganda</option>
                                                <option value="kenya">Kenya</option>
                                                <option value="malawi">Malawi</option>
                                                <option value="Burundi">Burundi</option>
                                            </select><br></br>
                                            <label className='form-label'>Name of Institution</label>
                                            <select className='form-select' name='Institution' value={data.Institution} onChange={(e) => setData('Institution', e.target.value)}>
                                                <option value="">select Institution</option>
                                                <option value="udom">University of Dodoma</option>
                                                <option value="udsm">University of Dar es salaam</option>
                                                <option value="must">Must</option>
                                                <option value="ardhi">Ardhi</option>
                                                <option value="mipango">Mipango Institute</option>
                                            </select>
                                            <br></br>
                                            <label className='form-label'>Programme Category</label>
                                            <select className='form-select' name='Category' value={data.category} onChange={(e) => setData('category', e.target.value)}>
                                                <option value="">select Category</option>
                                                <option value="ce">engineering</option>
                                                <option value="ac">business</option>
                                                <option value="bis">information system</option>
                                                <option value="idit">advertising</option>
                                            </select>
                                            <br></br>
                                            <label className='form-label'>Programme Name</label>
                                            <select className='form-select' name='Program' value={data.program} onChange={(e) => setData('program', e.target.value)}>
                                                <option value="">select Program</option>
                                                <option value="ce">computer engineering</option>
                                                <option value="ac">accountant</option>
                                                <option value="bis">business information system</option>
                                                <option value="idit">IDIT</option>
                                                <option value="mta">MTA</option>
                                            </select>
                                            <br></br>
                                            <label className='form-label'>upload certificate</label>
                                            <input className='form-control' type='file' id="certificate" name="certificate" value={data.certificate} onChange={(e) => setData('certificate', e.target.value)}></input>
                                            <br></br>
                                            <label className='form-label'>Award date</label>
                                            <input className='form-control' type="date" id="birthday" name="birthday" value={data.awardDate} onChange={(e) => setData('awardDate', e.target.value)}></input>
                                            <br></br>
                                            <PrimaryButton className="ml-4" disabled={processing} onClick={() => { setIsOpen(true) }}>
                                                <span class="glyphicon glyphicon-plus-sign"></span>Add
                                            </PrimaryButton>
                                        </form>
                                    </div>
                                        : <div>
                                            <table class="table table-hover table-bordered">
                                                <thead>
                                                    <tr class="bg-success">
                                                        <th scope="col">#</th>
                                                        <th scope="col">LEVEL</th>
                                                        <th scope="col">PROGRAM</th>
                                                        <th scope="col">INSTITUTION</th>
                                                        <th scope="col">DATE</th>
                                                        <th scope="col">ATTACHMENT</th>
                                                        <th scope="col">ACTION</th>



                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="table-success">
                                                        <th scope="row">1</th>
                                                        <td>DEGREE</td>
                                                        <td>BUSINESS INFORMATION SYSTEM</td>
                                                        <td>UDOM</td>
                                                        <td>20/09/2022</td>
                                                        <td><button type="button" class="btn btn-info">View</button></td>
                                                        <th><td><button type="button" class="btn btn-primary">Edit</button></td>
                                                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                                                        </th>
                                                    </tr>
                                                    <tr class="table-success">
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                        <td>20/09/2012</td>
                                                        <td><button type="button" class="btn btn-info">View</button></td>
                                                        <th><td><button type="button" class="btn btn-primary">Edit</button></td>
                                                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                                                        </th>
                                                    </tr>
                                                    <tr class="table-success">
                                                        <th scope="row">3</th>
                                                        <td>Larry the Bird</td>
                                                        <td>@twitter</td>
                                                        <td>ulambao</td>
                                                        <td>20/09/2002</td>
                                                        <td><button type="button" class="btn btn-info">View</button></td>
                                                        <th><td><button type="button" class="btn btn-primary">Edit</button></td>
                                                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div>

                                                <button type="submit" class="btn btn-primary btn-sm" onClick={() => { setIsOpen(true) }}>
                                                    <span class="glyphicon glyphicon-plus-sign"></span>Add Certificate
                                                </button>
                                            </div>
                                        </div>
                                    }


                                </>
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
            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">{<Home />}</div>
                    </div>
                </div>
            </div> */}
        </AuthenticatedLayout >
    );
}

