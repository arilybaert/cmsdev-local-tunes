import React, { useState } from 'react';
import { Header } from '../components/';
import * as Routes from '../routes';
import { useHistory } from "react-router-dom";

import axios from 'axios';


const Login = () => {
    const history = useHistory();
    const [error, setError]= useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const handleChange = (event) => {
        const value = event.target.value;
        setForm({
          ...form,
          [event.target.name]: value
        });
    }
    const apiUrl = 'http://www.local-tunes-server.test/wp-json/jwt-auth/v1/token';

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
                localStorage.setItem( 'login', data.token );

                history.push(Routes.HOME);
                window.location.reload();

                // _this.props.setLogin( data.token );
            }
        })
        .catch((error) => {
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
                    <input type="password" name="password" className="a-authTextInput" onChange={handleChange}></input>
                    <button type="submit" className="a-authButton" value={form.password} onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Login;