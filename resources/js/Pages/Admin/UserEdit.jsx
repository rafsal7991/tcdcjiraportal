
import { usePage } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './portal/tcdc/tcdc.css';
// import { Link } from 'react-router-dom';
import Footer from './portal/tcdc/Footer';
import Logo from './portal/images/rafsal.png'
import Logo1 from './portal/images/tcdc.png'
import Logo2 from './portal/images//Coat_of_arms_of_Tanzania.svg.png'
import { Component } from 'react';
import axios from 'axios';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Form from '../portal/tcdc/Form';
import Dashbord from '@/portal/tcdc/Dashbord';
import { Link, } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/inertia-react';

const UserEdit = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [role, setRole] = useState(props.user.role);

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = () => {
        Inertia.put(route('users.updateRole', { user: props.user.id }), {
            role: role,
        });
    };


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
                                    <a href="/personaldetails" class="list-group-item active  span">USER MANAGEMENT</a><br></br>
                                    <a href="/accademic" class="list-group-item  span">ACCADEMIC DETAILS</a><br></br>
                                    <a href="/proofesional QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                    <a href="/referee" class="list-group-item span">REFEREE</a>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 bround centerdiv spancenter">
                            <div className='disp'><img src={Logo2} className='logo'></img><div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div><img src={Logo1} className='logo'></img></div>

                            {/* the div to contain all particulars  */}
                            <br></br>
                            <div>
                                <div>
                                    <h1>Edit User</h1>
                                    <p>Name: {props.user.name}</p>
                                    <p>Email: {props.user.email}</p>
                                    <select onChange={handleRoleChange} value={role}>
                                        <option value="user">User</option>
                                        <option value="staff">Staff</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    <button onClick={handleSubmit}>Save Changes</button>
                                </div>
                            </div>
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
        </AuthenticatedLayout >
    );
}

export default UserEdit;
