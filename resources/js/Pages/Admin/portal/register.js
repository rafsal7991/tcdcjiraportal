import React, { useState, useEffect, useRef } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './css/portal.css'
import { Link } from 'react-router-dom';

const Register = () =>{
  //to make variable for showing error
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [rpwdError, setRpwdError] = useState(" ");

 //variables captured from typing
 const [email, setEmail] = useState("");
 const [pwd, setPwd] = useState("");
 const [rpwd, setRpwd] = useState("");
 const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 const passwordFormat =/["[A-Z]","[a-z]","[0-9]","\\W"]/;
 const ref = useRef();


  useEffect(() =>{
     if (!email) {
        ref.current.style.color ='yellow';
        setEmailError("enter password");
        
     } else {
        if (mailformat.test(email)===false) {
            ref.current.style.color ='red';
            setEmailError("bad email format, please use this example rafsal@gmail.com");
        } else {
            setEmailError("");
        }
        
     }
    
       if(pwd===rpwd){
       setRpwdError("");
       }
       else{
        ref.current.style.color ='red';
        setRpwdError("password are  not equal");
       }
       
       if (!pwd) {
          ref.current.style.color ='yellow';
         setPwdError("enter password")
       } else {
        if (passwordFormat.test(pwd)===false) {
            ref.current.style.color ='red';
            setPwdError("your password not strong, please use example Rafsal@2023");
            
           } else {
            setPwdError("");
            
           }
        
       }
    
  });

    return(
        <form className=' log'>
        <div className='mb-3 mt-3'>
            <label htmlFor='email' className='form-label'>Email:</label>
            <input type='email' className='form-control' id='email' placeholder='rafsal@gmail.com' onChange={(e) => setEmail(e.target.value)} value={email}></input>
        </div>
        <div className='error'>{emailError}</div>
        <div className='mb-3'>
        <label htmlFor='pwd' className='form-label'>Password</label>
        <input type='password' className='form-control' id='pwd' placeholder='Rafsal@2023' name="pwd" onChange={(e) => setPwd(e.target.value)} value={pwd}></input>
        </div>
        <div className='error'>{pwdError}</div>
        <div className='mb-3'>
        <label htmlFor='rpwd' className='form-label'>Retype Password</label>
        <input type='password' className='form-control' id='rpwd' placeholder='Rafsal@2023' name="pwd" onChange={(e) => setRpwd(e.target.value)} value={rpwd}></input>
        </div>
        <div className='error'>{rpwdError}</div>
        <button type='submit' className='btn btn-primary'>Register</button>
        <ul><li>you are registered? <Link to="/login"><b>login here</b></Link></li></ul>
        </form>
    );

}
export default Register;
