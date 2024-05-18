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
// import Form from '../portal/tcdc/Form';
import Dashbord from '@/portal/tcdc/Dashbord';
import { Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Inertia } from '@inertiajs/inertia';

//import for testing model
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const testPersonaldetails = ({ auth, details }) => {

    //states for model
    var test;
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
  
    const handleClose = () => {
      setEmail("");
      setName("");
       setShow(false)
      };
  
      const saveChanges = () => {
         setShow(false)
        };
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
  
    const[email,setEmail] = useState('');
    const[name,setName] = useState('');
    //

    const succes = " ";

    const userEmail = auth.user.email;
    const [filteredDetails, setFilteredDetails] = useState([]);
    const [hasData, setHasData] = useState(false);
    // ...

    useEffect(() => {
        // Filter the details array based on email
        const filtered = details.filter((detail) => detail.email === userEmail);
        setFilteredDetails(filtered);
        if (filtered.length > 0) {
            setHasData(false);
        } else {
            setData(true);
        }
    }, [details, userEmail]);


    const imageUrl = details && details.pic
        ? `data:image/jpeg;base64,${details.pic}`
        : '';




    const { data, post, processing, reset, setData } = useForm({
        fullname: details.fullname,
        gender: details.gender,
        dob: details.dob,
        rob: details.rob,
        diob: details.diob,
        country: details.country,
        maritial: details.maritial,
        pic: details.pic,
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };



    const PostData = (e) => {
        setIsLoading(true);
        e.preventDefault();
        post('AddPdetails');
        setIsLoading(false);
        setIsOpen(false);
    }

    useEffect(() => {
        reset({
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

    const updatePersonalDetails = (e) => {
        e.preventDefault();

        post('UpdatePdetails');
        for (let index = 0; index < 10; index++) {
            succes = "data updated succesfully";
            setIsLoading(false);
            setIsOpen(false);

        }
        succes = " ";
        setActiveDiv("table")// Adjust the route name as needed

        // Adjust the route name as needed
    };


    const [activeDiv, setActiveDiv] = useState('table');
    const [isLoading, setIsLoading] = useState(true);
    const handleDivChange = (newDiv) => {
        setActiveDiv(newDiv);
    };
    useEffect(() => {
        // Print details to the console when the component mounts
        console.log('Component mounted with details:', details);
        console.log('Component mounted with auth:', auth);
    }, [details]);


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
                                    <a href="/personaldetails" class="list-group-item active  span">PERSONAL DETAIL</a><br></br>
                                    <a href="/accademic" class="list-group-item  span">ACCADEMIC DETAILS</a><br></br>
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
                                <div className='accH'><p>PERSONAL DETAILS</p>
                                </div>
                                <>
                            
                                           
                                            <div>{succes}</div>
                                            <div>
                                                <table class="table table-hover table-bordered" disabled={isLoading}>
                                                    <thead>
                                                        <tr class="bg-success">
                                                            <th scope="col">#</th>
                                                            <th scope="col">PERTICULAR</th>
                                                            <th scope="col">VALUE</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {hasData === false ? ( // Check if there are no details
                                                            <tr className="table-success">
                                                                <td colSpan="3" className="text-center">
                                                                   acha usenge   No personal details available. Please add your details.
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            // Render table rows if details exist
                                                            filteredDetails.map((detail, index) => (
                                                                <React.Fragment key={index}>
                                                                    <tr className='table-success'>
                                                                        <td>{index + 1}</td>
                                                                        <td>FULL NAME</td>
                                                                        <td>{detail.fullname}</td>
                                                                    </tr>
                                                                    <tr className='table-info'>
                                                                        <td>{index + 2}</td>
                                                                        <td>GENDER</td>
                                                                        <td>{detail.gender}</td>
                                                                    </tr>
                                                                    <tr className='table-success'>
                                                                        <td>{index + 3}</td>
                                                                        <td>DATE OF BIRTH</td>
                                                                        <td>{detail.dob}</td>
                                                                    </tr>
                                                                    <tr className='table-info'>
                                                                        <td>{index + 4}</td>
                                                                        <td>COUNTRY</td>
                                                                        <td>{detail.country}</td>
                                                                    </tr>
                                                                    <tr className='table-success'>
                                                                        <td>{index + 5}</td>
                                                                        <td>REGION</td>
                                                                        <td>{detail.rob}</td>
                                                                    </tr>
                                                                    <tr className='table-info'>
                                                                        <td>{index + 6}</td>
                                                                        <td>DISTRICT</td>
                                                                        <td>{detail.diob}</td>
                                                                    </tr>
                                                                    <tr className='table-success'>
                                                                        <td>{index + 7}</td>
                                                                        <td>MARITIAL STATUS</td>
                                                                        <td>{detail.maritial}</td>
                                                                    </tr>
                                                                    <tr className='table-info'>
                                                                        <td>{index + 8}</td>
                                                                        <td>EMAIL</td>
                                                                        <td>{detail.email}</td>
                                                                    </tr>
                                                                    {/* Add more rows for other details */}
                                                                </React.Fragment>
                                                            ))
                                                        )}
                                                    </tbody>
                                                </table>
                                                <div>
                                                <button type="submit" class="btn btn-primary btn-sm" onClick={handleShow}>
                                                        <span class="glyphicon glyphicon-plus-sign"></span>UPDATE
                                                    </button>
                                                 
                                                </div>
                                       {/* the model div */}

      <Modal show={show} >
        <Modal.Header >
          <Modal.Title>ADD USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>user email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              
                                                                                      
            </Form.Group>
            <Form.Group>
            <Form.Label className='form-label'>country</Form.Label>
                                                            <select className='form-select' name='country' value={data.country} onChange={(e) => setData('country', e.target.value)}>
                                                                <option value="">select country</option>
                                                                <option value="Tanzania">Tanzania</option>
                                                                <option value="Uganda">uganda</option>
                                                                <option value="kenya">Kenya</option>
                                                                <option value="malawi">Malawi</option>
                                                                <option value="Burundi">Burundi</option>
                                                            </select><br></br>
                                                            </Form.Group>
                                                            <Form.Group>
            <Form.Label className='form-label'>country</Form.Label>
                                                            
                                                            <select className='form-select' name='gender' value={data.gender} onChange={(e) => setData('gender', e.target.value)}>
                                                                <option value="">select gender</option>
                                                                <option value="male">MALE</option>
                                                                <option value="female">FEMALE</option>
                                                            </select><br></br>
                                                            </Form.Group>
                                                            <Form.Group>
            <Form.Label className='form-label'>country</Form.Label>
            <select className='form-select' name='country' value={data.country} onChange={(e) => setData('country', e.target.value)}>
                                                                <option value="">select country</option>
                                                                <option value="Tanzania">Tanzania</option>
                                                                <option value="Uganda">uganda</option>
                                                                <option value="kenya">Kenya</option>
                                                                <option value="malawi">Malawi</option>
                                                                <option value="Burundi">Burundi</option>
                                                            </select><br></br>
                                                            </Form.Group>
                                                            <Form.Group>        
            <Form.Label className='form-label'>country</Form.Label>
                                                           ``    <select className='form-select' name='country' value={data.country} onChange={(e) => setData('country', e.target.value)}>
                                                                <option value="">select country</option>
                                                                <option value="Tanzania">Tanzania</option>
                                                                <option value="Uganda">uganda</option>
                                                                <option value="kenya">Kenya</option>
                                                                <option value="malawi">Malawi</option>
                                                                <option value="Burundi">Burundi</option>
                                                            </select><br></br>
                                                            </Form.Group>
                                                            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='form-label'>Full Name {show}</Form.Label>
                                                       <Form.Control
                                                            type='text'
                                                            className='form-control'
                                                            name='fullname'
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                          
                                                        />
                                                         </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     
                                            </div>








                                     


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
export default testPersonaldetails;

