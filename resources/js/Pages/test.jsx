import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../portal/tcdc/tcdc.css';
import Header from '../portal/tcdc/Header';
import Footer from '../portal/tcdc/Footer';
import Logo from '../portal/images/rafsal.png';
import Logo1 from '../portal/images/tcdc.png';
import Logo2 from '../portal/images/Coat_of_arms_of_Tanzania.svg.png';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

const Personaldetails = ({ auth, details }) => {
    const email = details.length > 0 ? details[0].email : '';

    const [activeDiv, setActiveDiv] = useState('table');
    const [isLoading, setIsLoading] = useState(false); // Set to false by default
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const { data, post, processing, setData } = useForm({
        fullname: details.fullname || '',
        gender: details.gender || '',
        dob: details.dob || '',
        rob: details.rob || '',
        diob: details.diob || '',
        country: details.country || '',
        maritial: details.maritial || '',
        pic: details.pic || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const updatePersonalDetails = (e) => {
        e.preventDefault();
        if (auth.user.email === email) {
            setIsLoading(true); // Show loading spinner during the update
            post('UpdatePdetails')
                .then(() => {
                    setSuccessMessage('Data updated successfully');
                    setActiveDiv('table');
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setIsLoading(false); // Hide loading spinner
                });
        } else {
            console.error("Logged-in user's email does not match personal details email.");
            setActiveDiv('table');
        }
    };

    const PostData = (e) => {
        setIsLoading(true);
        e.preventDefault();
        post('AddPdetails')
            .then(() => {
                setSuccessMessage('Data added successfully');
                setActiveDiv('table');
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        // Reset form data when details change
        setData({
            fullname: details.fullname || '',
            gender: details.gender || '',
            dob: details.dob || '',
            rob: details.rob || '',
            diob: details.diob || '',
            country: details.country || '',
            maritial: details.maritial || '',
            pic: details.pic || '',
        });
    }, [details]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <div>
                <div className="div1">
                    <div className="row">
                        <div className="col-sm-3 div1 column1 spann">
                            <div class="broundsl">
                                <ul class="list-group">
                                    <h1 class="list-group-item-heading">DETAILS</h1>
                                    <img src={Logo} className='passport'></img><br></br>
                                    <a href="/dashboard" class="list-group-item  span">DASHBOARD</a><br></br>
                                    <a href="/personaldetails" class="list-group-item active  span">PERSONAL DETAIL</a><br></br>
                                    <a href="/accademic" class="list-group-item  span">ACCADEMIC DETAILS</a><br></br>
                                    <a href="/proofesional QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                    <a href="/referee" class="list-group-item span">REFEREE</a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 bround centerdiv spancenter">
                            <div className="disp">
                                <div className='disp'><img src={Logo2} className='logo'></img><div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div><img src={Logo1} className='logo'></img></div>
                            </div>
                            <div>
                                <br />
                                <div className="accH">
                                    <p>PERSONAL DETAILS</p>
                                </div>
                                {activeDiv === 'form' && (
                                    <div>
                                        {auth.user.email === email ? (
                                            <div>
                                                <form onSubmit={updatePersonalDetails} disabled={processing}>
                                                    {/* Your form fields */}
                                                    <PrimaryButton className="ml-4" disabled={processing}>
                                                        <span className="glyphicon glyphicon-plus-sign"></span>UPDATE
                                                    </PrimaryButton>
                                                </form>
                                            </div>
                                        ) : (
                                            <div>
                                                <form onSubmit={PostData} disabled={processing}>
                                                    {/* Your form fields for non-authenticated users */}
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {activeDiv === 'table' && (
                                    <div>
                                        <div>{successMessage}</div>
                                        {auth.user.email === email ? (
                                            <div>
                                                <table className="table table-hover table-bordered">
                                                    {/* Your table content for authenticated users */}
                                                </table>
                                                <PrimaryButton className="ml-4" onClick={() => setActiveDiv('form')}>
                                                    <span className="glyphicon glyphicon-plus-sign"></span>UPDATE
                                                </PrimaryButton>
                                            </div>
                                        ) : (
                                            <div>
                                                <table className="table table-hover table-bordered">
                                                    {/* Your table content for non-authenticated users */}
                                                </table>
                                                <PrimaryButton className="ml-4" onClick={() => setActiveDiv('form')}>
                                                    <span className="glyphicon glyphicon-plus-sign"></span>ADD
                                                </PrimaryButton>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-sm-3 div1 column2 spanni">
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
        </AuthenticatedLayout>
    );
};

export default Personaldetails;
