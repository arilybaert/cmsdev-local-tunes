import React, { useState, useContext } from 'react';
import { Header, LocalTunesContext } from '../components/';
import * as Routes from '../routes';
import { useHistory } from "react-router-dom";

import axios from 'axios';


const Login = () => {
    const history = useHistory();
    const {setCookie, verifyUser } = useContext(LocalTunesContext);

    const [error, setError]= useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    console.log(verifyUser());
    if(verifyUser() === true) {
        history.push(Routes.HOME)
    }
    const handleChange = (event) => {
        const value = event.target.value;
        setForm({
          ...form,
          [event.target.name]: value
        });
    }
    const apiUrl = 'http://www.local-tunes-server.test/wp-json/jwt-auth/v1/token';
    const handleCookie = (token) => {
        setCookie("login", token, {
          path: "/"
        });
      }
    const handleSubmit = ( e ) => {
        e.preventDefault();

        const config = {
            method: 'POST',
            mode: 'cors',
            headers: { 
                // 'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH'
            },
        };

        const bodyParameters = {
            "username": form.username,
            "password": form.password
        };

        console.log(bodyParameters);
        axios.post(
            apiUrl,
            bodyParameters,
            config)
        .then(function (response) {
            if ( response.status === 200 ) {
                const data = response.data;
                console.log(data.token);
                const p = new Promise((resolve) => {
                    handleCookie(data.token);
                    localStorage.setItem('login', data.token);
                    
                    resolve();
                });
                p.then(() => {
                    history.push(Routes.HOME);
                })


            }
        }).catch((error) => {
            console.log(error);
            // strip htlm tags for client friendly error
            function strip_html_tags(str) {
                if ((str===null) || (str===''))
                    return false;
                else
                str = str.toString();
                return str.replace(/<[^>]*>/g, '');
            }
            setError(true);
            setErrorMsg(strip_html_tags( error.response.data.message ));
        });
    }

    return (
        <div>
        <Header />
        {error ? 
        <div className="o-error">
            {errorMsg}
        </div>
        : ''}
        <div className="row">
            <div className="col-12 o-form">
                <form className="m-form">
                    <label htmlFor="username" className="a-authTextLabel">Username</label>
                    <input type="text" name="username" className="a-authTextInput" value={form.username} onChange={handleChange}></input>
                    <label htmlFor="password" className="a-authTextLabel">Password</label>
                    <input type="password" name="password" className="a-authTextInput" value={form.password} onChange={handleChange}></input>
                    <button type="submit" className="a-authButton"  onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Login;