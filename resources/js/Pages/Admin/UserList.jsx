import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './portal/tcdc/tcdc.css';
// import { Link } from 'react-router-dom';
import Footer from './portal/tcdc/Footer';
import Logo from './portal/images/rafsal.png'
import Logo1 from './portal/images/tcdc.png'
import Logo2 from './portal/images//Coat_of_arms_of_Tanzania.svg.png'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InertiaLink } from '@inertiajs/inertia-react';
import axios from 'axios';

const UserList = ({ users, auth }) => {
    const handleSendResetPassword = async (userId) => {
        try {
            const response = await axios.post('/admin/send-reset-password-link', {
                user_id: userId,
            });
            console.log(response.data.message); // Display success message
        } catch (error) {
            console.error('Error sending reset password link:', error);
        }
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="">
                <div className="div1">
                    <div className="row">
                        <div className="col-sm-3 div1 column1 spann">
                            <div className="broundsl">
                                <ul className="list-group">
                                    <h1 className="list-group-item-heading">DETAILS</h1>
                                    <img src={Logo} className="passport" alt=""></img><br></br>
                                    <a href="/dashboard" className="list-group-item  span">DASHBOARD</a><br></br>
                                    <a href="/personaldetails" className="list-group-item active  span">USER MANAGEMENT</a><br></br>
                                    <a href="/accademic" className="list-group-item  span">ACCADEMIC DETAILS</a><br></br>
                                    <a href="/proofesional QUALIFICATION" className="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                    <a href="/referee" className="list-group-item span">REFEREE</a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 bround centerdiv spancenter">
                            <div className='disp'>
                                <img src={Logo2} className='logo' alt=""></img>
                                <div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div>
                                <img src={Logo1} className='logo' alt=""></img>
                            </div>

                            <br></br>
                            <div>
                                <h1>User List</h1>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr className="bg-success">
                                            <th scope="col">id</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Update Time</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id} className='table-success'>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.role}</td>
                                                <td>{user.updated_at}</td>
                                                <td>
                                                    <td><InertiaLink href={`/users/edit/${user.id}`}>
                                                        Edit
                                                    </InertiaLink></td>
                                                    <td><button
                                                        className='btn btn-primary btn-sm'
                                                        onClick={() => handleSendResetPassword(user.id)}
                                                    >
                                                        Reset
                                                    </button></td>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-3 div1 column2 spanni">
                            <div className="broundsr">
                                <ul className="list-group">
                                    <h1 className="list-group-item-heading">VACANCIES</h1>
                                    <a href="/vacancemanager" className="list-group-item span">MANAGERS/MAMENEJA <span className="badge rounded-pill bg-info">4</span></a><br></br>
                                    <a href="/chairman" className="list-group-item span">CHAIRMAN/WENYEVITIL<span className="badge rounded-pill bg-info">4</span></a><br></br>
                                    <a href="#ICT/TEHAMA" className="list-group-item span">ICT/TEHAMA <span className="badge rounded-pill bg-info">4</span></a><br></br>
                                    <a href="#PROFESIONAL QUALIFICATION" className="list-group-item span">FINANCE/UHASIBU <span className="badge rounded-pill bg-info">4</span></a><br></br>
                                    <a href="#OTHER FILDS" className="list-group-item span">OTHER FILDS <span className="badge rounded-pill bg-info">4</span></a><br />
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

export default UserList;
