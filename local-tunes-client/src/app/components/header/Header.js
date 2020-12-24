import React, {useEffect, useState} from 'react';
import {
    Link
  } from "react-router-dom";
import * as Routes from '../../routes';
const Header = () => {
    const [header, setHeader] = useState(window.location.pathname.substring(1));

    // Give active navbar items a specific style
    useEffect(() => {
        if(header === "login"){
            document.getElementById("a-login").className = "a-activeHeader"; 
            document.getElementById("a-register").classList.remove = "a-activeHeader"; 
        } else if (header === "register") {
            document.getElementById("a-register").className = "a-activeHeader"; 
            document.getElementById("a-login").classList.remove = "a-activeHeader"; 
        }
    },[header])
    return (
            <div className="o-header row">
                    <div className="col-12 m-header m-headerTop">
                        Local<span className="a-headerAccent">Tunes</span>
                    </div>
                    <span className="col-6 m-header">
                        <Link to={Routes.LOGIN} id="a-login">Login</Link>
                    </span>
                    <span className="col-6 m-header">
                        <Link to={Routes.REGISTER}id="a-register">Register</Link>
                    </span>
            </div>

    )
}

export default Header;