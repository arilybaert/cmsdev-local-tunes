import React from 'react';
import { HeaderContainer } from '../components';


const ChangePassword = () => {

    return (
        <div>
            <HeaderContainer/>
            <div className="col-12 o-form">

            <form className="m-form">
                        <label for="oldpass" className="a-authTextLabel">Old password</label>
                        <input type="text" name="oldpass" className="a-authTextInput"></input>
                        <label for="newpass" className="a-authTextLabel">New password</label>
                        <input type="text" name="newpass" className="a-authTextInput"></input>
                        <label for="newpassconf" className="a-authTextLabel">Confirm new password</label>
                        <input type="text" name="newpassconf" className="a-authTextInput"></input>

                        <button type="submit" className="a-authButton">Update password</button>

                </form>
        </div>
        </div>
    );
};

export default ChangePassword;