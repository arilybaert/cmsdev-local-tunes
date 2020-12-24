import React from 'react';
import { Header } from '../components/';

const Register = () => {

    return (
        <div>
        <Header/>
        <div className="row">
            <div className="col-12 o-form">
                <form className="m-form">
                    <label for="username" className="a-authTextLabel">Username</label>
                    <input type="text" name="username" className="a-authTextInput"></input>
                    <label for="password" className="a-authTextLabel">Password</label>
                    <input type="password" name="password" className="a-authTextInput"></input>
                    <label for="username" className="a-authTextLabel">Are you...</label>
                    <div className="m-authRadioButton">
                        <label for="listener">Listener</label>
                        <input type="radio" name="listener" value="listener" className="a-authRadioButton"></input>
                        <label for="listener">Listener</label>s
                        <input type="radio" name="subject" value="phyArtiestsics" className="a-authRadioButton"></input>
                    </div>
                    <button type="submit" className="a-authButton">Login</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Register;