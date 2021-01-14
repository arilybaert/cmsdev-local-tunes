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
        name: "",
        email:"",
        password: "",
        role: "",
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
    const apiUrlCreate = `${process.env.REACT_APP_URL}/wp-json/jwt-auth/v1/token`;
    const apiUrlRegister = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/register`;
    const apiUrlCreateLikedSongs = `${process.env.REACT_APP_URL}/wp-json/wp/v2/songs/`;
    const apiUrlUpdateUser = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/`;

    let uid;
    const userCreate = async (username, email, password, role, config, url) => {
        const bodyParameters = {
            "username": username,
            "email": email,
            "password": password,
            "role": role
        };
        console.log(bodyParameters);
        await axios.post(
            url,
            bodyParameters,
            config)
        .then(function (response) {
            console.log(response.data.id);
            uid = response.data.id;
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

    const tokenCreate = (username, password, name, config, url) => {
        const bodyParameters = {
            "username": username,
            "password": password,
        };
        axios.post(
            url,
            bodyParameters,
            config)
        .then( async function  (response) {
            if ( response.status === 200 ) {
                const data = response.data;
                localStorage.setItem( 'login', data.token );

                const config = {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 
                        'Authorization': `Bearer ${data.token}`,
                    },
                }
                const body = {
                        'title': uid.toString(),
                        'status': 'publish'
                }
                console.log(body);
                // let liked songs array for user
                await axios.post(
                    apiUrlCreateLikedSongs,
                    body,
                    config
                );
                const userBody = {
                    "first_name": name
                }
                await axios.post(
                    apiUrlUpdateUser + uid,
                    userBody,
                    config
                )
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
        console.log(form);
        e.preventDefault();
        await userCreate(form.username, form.email, form.password, form.role, config, apiUrlRegister);
        tokenCreate(form.username, form.password, form.name, config, apiUrlCreate);


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
                    <label htmlFor="name" className="a-authTextLabel">Name</label>
                    <input type="text" name="name" className="a-authTextInput" value={form.name} onChange={handleChange}></input>
                    <label htmlFor="email" className="a-authTextLabel">Email</label>
                    <input type="email" name="email" className="a-authTextInput" value={form.email} onChange={handleChange}></input>
                    <label htmlFor="password" className="a-authTextLabel">Password</label>
                    <input type="password" name="password" className="a-authTextInput" value={form.password} onChange={handleChange}></input>
                    <label htmlFor="username" className="a-authTextLabel">Are you...</label>
                    <div className="m-authRadioButton">
                        <label htmlFor="role">Listener</label>
                        <input type="radio" name="role" value="subscriber" className="a-authRadioButton" onChange={handleChange} ></input>
                        <label htmlFor="role">Artist</label>
                        <input type="radio" name="role" value="contributor" className="a-authRadioButton" onChange={handleChange} ></input>
                    </div>
                    <button type="submit" className="a-authButton" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Register;