import React from 'react';
import { HeaderContainer } from '../components';


const CreatePlaylist = () => {

    return (
        <div>
            <HeaderContainer/>

            <div className="row">
                <div className="col-12 o-form">
                    <form className="m-form">
                        <label for="name" className="a-authTextLabel">Name</label>
                        <input type="text" name="nam" className="a-authTextInput"></input>

                        <button type="submit" className="a-authButton">Save</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CreatePlaylist;