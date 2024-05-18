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
import { Link, } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/inertia-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserList from '../Admin/UserList';
import AddUserForm from '../Admin/UserList';
import EditUserForm from '../Admin/UserList';



// import UserList from '../Admin/UserList';

const AdminPanel = ({ auth }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [tabManager, setTabmanager] = useState(true);


    const [selectedTab, setSelectedTab] = useState(0);






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
                                    <h1 class="list-group-item-heading">ADMIN</h1>
                                    <img src={Logo} className='passport'></img><br></br>
                                    <a href="/dashboard" class="list-group-item  span">DASHBOARD AND OVERVIEW</a><br></br>
                                    <a href="/personaldetails" class="list-group-item active  span">USER MANAGEMENT</a><br></br>
                                    <a href="/accademic" class="list-group-item  span">JOB MANAGEMENT</a><br></br>
                                    <a href="/proofesional QUALIFICATION" class="list-group-item span">APPLICATION MANAGEMENT</a><br></br>
                                    <a href="/referee" class="list-group-item span">CANDIDATE MANAGEMMENT</a>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 bround centerdiv spancenter">
                            <div className='disp'><img src={Logo2} className='logo'></img><div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div><img src={Logo1} className='logo'></img></div>

                            {/* the div to contain all particulars  */}
                            <br></br>
                            <div>

                                <div>

                                </div>

                                <h1>USER MANAGEMENT</h1>
                                <div> <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item"> <a href="/chairman" class="list-group-item active span">ADD USERS</a></li>
                                    <li class="list-group-item"> <a href="/chairman" class="list-group-item span">EDIT USERS</a></li>
                                    <li class="list-group-item"> <a href="/chairman" class="list-group-item span">USERS LIST</a></li>
                                    <li class="list-group-item"> <a href="/chairman" class="list-group-item span">UPLOAD USERS</a></li>
                                    <li class="list-group-item"> <a href="/chairman" class="list-group-item span">DOWNLOAD USERS</a></li>
                                </ul></div>
                                <AddUsers />
                                <UploadUsers />
                                {/* Form to import Excel data */}

                            </div>
                        </div>
                        <div class="col-sm-3 div1 column2 spanni">
                            <div class="broundsr">
                                <ul class="list-group">
                                    <h1 class="list-group-item-heading"></h1>
                                    <a href="/vacancemanager" class="list-group-item span">INTERVIEW MANAGENT<span class="badge rounded-pill bg-info"></span></a><br></br>
                                    <a href="/chairman" class="list-group-item span">OFFER AND UNBOUNDING<span class="badge rounded-pill bg-info"></span></a><br></br>
                                    <a href="#ICT/TEHAMA" class="list-group-item span">REPORTS AND ANALYTICS<span class="badge rounded-pill bg-info"></span></a><br></br>
                                    <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">COMMUNICATION<span class="badge rounded-pill bg-info"></span></a><br></br>
                                    <a href="#OTHER FILDS" class="list-group-item span">SETTING AND CONFIGURATION <span class="badge rounded-pill bg-info"></span></a><br />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div><Footer /></div>

            </div>
        </AuthenticatedLayout >
    );
};

export default AdminPanel;

export const AddUsers = ({ auth }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { data, setData, post } = useForm({
        // Initial form data
        formData: {
            name: '',
            email: '',
            // Add more form fields as needed
        },
        // Validation rules
        validationRules: {
            name: 'required|min:3',
            email: 'required|email',
            // Add more validation rules as needed
        },
    });


    const updateUsers = async (e) => {
        e.preventDefault();
        try {
            await post('/admin/update-users', data);
            setSuccessMessage('Users updated successfully!');
            setErrorMessage('');
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('An error occurred while updating users.');
        }
    };

    return (
        <div>
            {/* Display success message */}
            {successMessage && <div className="success-message">{successMessage}</div>}
            {/* Display error message */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={updateUsers}>
                {/* Input fields for user updates */}
                <label className='form-label'>user name</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className='form-control'
                /><br></br>
                <label className='form-label'>user email</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className='form-control'
                />
                <br></br>
                {/* Add more input fields as needed */}
                <PrimaryButton className="ml-4">
                    <span class="glyphicon glyphicon-plus-sign"></span>Update Users
                </PrimaryButton>
            </form>
            <br></br>
        </div>
    );

}

export const UploadUsers = ({ auth }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { data, setData, post } = useForm({
        // Initial form data
        formData: {
            name: '',
            email: '',
            // Add more form fields as needed
        },
        // Validation rules
        validationRules: {
            name: 'required|min:3',
            email: 'required|email',
            // Add more validation rules as needed
        },
    });
    const importExcel = async (e) => {
        e.preventDefault();
        try {
            await post('/admin/import-excel', data, {
                preserveState: true,
                onSuccess: () => {
                    setSuccessMessage('Excel data imported successfully!');
                    setErrorMessage('');
                },
                onError: (errors) => {
                    setSuccessMessage('');
                    setErrorMessage('An error occurred while importing Excel data.');
                },
            });
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('An error occurred while importing Excel data.');
        }
    };


    return (
        <div>
            <form onSubmit={importExcel}>
                {/* Input field for Excel file */}
                <input type="file" name="excel_file" />
                {/* Add more input fields as needed */}
                <PrimaryButton className="ml-4">
                    <span class="glyphicon glyphicon-plus-sign"></span>Import users
                </PrimaryButton>
            </form>
        </div>
    );

}




