import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './css/portal.css'
import Register from './register';
import Login from './login';
import Home from './home';

const Controler = () =>{
    const [log,setLog] = useState(false);
    const [reg,setReg] = useState(false);
    const checker = () =>{
        if (log) {
            return(
                <Home />
            );
        } else {
            return(
                reg ? <Login /> : <Register />
            );
            
        }
    }

    
    return(
           checker()
     
    );
}

export default Controler;