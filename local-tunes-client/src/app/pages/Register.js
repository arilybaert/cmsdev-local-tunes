import React, { useState} from 'react';
import { Header } from '../components/';
import * as Routes from '../routes';
import { useHistory } from "react-router-dom";

import axios from 'axios';

const Register = () => {
    const history = useHistory();
    const [error, setError]= useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [form, setForm] = useState({
        username: "",
        email:"",
        password: ""
    });
    const config = {
        method: 'POST',
        mode: 'cors',
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setForm({
          ...form,
          [event.target.name]: value
        });
    }
    const apiUrlCreate = 'http://www.local-tunes-server.test/wp-json/jwt-auth/v1/token';
    const apiUrlRegister = 'http://www.local-tunes-server.test/wp-json/wp/v2/users/register';

    const userCreate = async (username, email, password, config, url) => {
        const bodyParameters = {
            "username": username,
            "email": email,
            "password": password
        };
        console.log(bodyParameters);
        await axios.post(
            url,
            bodyParameters,
            config)
        .then(function (response) {
            if ( response.status === 200 ) {
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
    };

    const tokenCreate = (username, password, config, url) => {
        const bodyParameters = {
            "username": username,
            "password": password,
        };
        axios.post(
            url,
            bodyParameters,
            config)
        .then(function (response) {
            if ( response.status === 200 ) {
                const data = response.data;
                localStorage.setItem( 'login', data.token );

                history.push(Routes.HOME);
                window.location.reload();
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
    };

    const handleSubmit =  async ( e ) => {
        e.preventDefault();
        await userCreate(form.username, form.email, form.password, config, apiUrlRegister);
        tokenCreate(form.username, form.password, config, apiUrlCreate);


    }
    return (
        <div>
        <Header/>
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
                    <label htmlFor="email" className="a-authTextLabel">Email</label>
                    <input type="email" name="email" className="a-authTextInput" value={form.email} onChange={handleChange}></input>
                    <label htmlFor="password" className="a-authTextLabel">Password</label>
                    <input type="password" name="password" className="a-authTextInput" value={form.password} onChange={handleChange}></input>
                    {/* <label htmlFor="username" className="a-authTextLabel">Are you...</label>
                    <div className="m-authRadioButton">
                        <label for="listener">Listener</label>
                        <input type="radio" name="listener" value="listener" className="a-authRadioButton"></input>
                        <label for="listener">Listener</label>s
                        <input type="radio" name="subject" value="phyArtiestsics" className="a-authRadioButton"></input>
                    </div> */}
                    <button type="submit" className="a-authButton" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Register;