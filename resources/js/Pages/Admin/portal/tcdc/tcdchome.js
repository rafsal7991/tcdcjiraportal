import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './tcdc.css'
import { Link } from 'react-router-dom';
import Layout from './layout';

const Tcdchome = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (count===1) {
               
                for(var j = 0; j < 100000; j++){
                    document.getElementById("homeDiv").style.backgroundColor =" #355E3B";
                    setCount(1);
                }
                for(var i = 0; i < 1000000; i++){
                    document.getElementById("homeDiv").style.backgroundColor =" #01796F";
                    setCount(1);
                }
                
            } else {
                for(var k = 0; k < 100000; k++){
                    document.getElementById("homeDiv").style.backgroundColor =" #355E3B";
                    setCount(1);
                }

                for(var n = 0;n < 100000; n++){
                    document.getElementById("homeDiv").style.backgroundColor ="#4B5320";
                setCount(0);
                }
                
                
            }

          setCount((count) => count + 1);
        }, 1000);
        
      })

    return(
        <div id='homeDiv'> 
        <div><Layout /></div>
<div class="container-fluid p-5   text-center">
    <div class="row">
        <div class="col-sm-4">
            <p>chama cha wachapakazi ajira (3) kwa mameneja na watendaji wa vyama</p>
            <a href="tcdclogin">login to apply</a>
            <p>chama cha wachapakazi ajira (2) kwa maafisa tehama</p>
            <a href="tcdclogin">login to apply</a>
            <p>chama cha wachapakazi ajira (2) kwa wahasibu</p>
            <a href="tcdclogin">login to apply</a>
        </div>
        <div class="col-sm-4">
            <p>chama cha wachapakazi ajira (3) kwa mameneja na watendaji wa vyama... condition <b>reposted</b></p>
            <a href="login">login to apply</a>
            <p>chama cha wachapakazi ajira (2) kwa maafisa tehama</p>
            <a href="login">login to apply</a>
            <p>chama cha wachapakazi ajira (2) kwa wahasibu</p>
            <a href="login">login to apply</a>
        </div>
        <div class="col-sm-4">
            <p>chama cha wachapakazi ajira (3) kwa mameneja na watendaji wa vyama</p>
            <a href="login">login to apply</a>
            <p>chama cha wachapakazi ajira (2) kwa maafisa tehama</p>
            <a href="login">login to apply</a>
            <p>chama cha wachapakazi ajira (2) kwa wahasibu</p>
            <a href="login">login to apply</a>
        </div>
    </div>
</div>
</div>
    );
}
export default Tcdchome;
