import React from 'react';
import {HeaderContainer} from '../components';

const Upload = () => {

    return (
        <div>
            <HeaderContainer/>

        <form>
            <div className="row">
                <div className="col-12 o-form">

                    <form className="m-form">
                        <label for="musicfile" className="a-authTextLabel">Music file</label>
                        <input type="text" name="musicfile" className="a-authTextInput"></input>
                        <label for="coverart" className="a-authTextLabel">Cover-art</label>
                        <input type="text" name="coverart" className="a-authTextInput"></input>
                        <label for="name" className="a-authTextLabel">Name</label>
                        <input type="text" name="name" className="a-authTextInput"></input>
                        <label for="artist" className="a-authTextLabel">Artist</label>
                        <input type="text" name="artist" className="a-authTextInput"></input>
                        <label for="album" className="a-authTextLabel">Album</label>
                        <input type="text" name="album" className="a-authTextInput"></input>

                        <button type="submit" className="a-authButton">Upload</button>

                    </form>
                </div>
            </div>

        </form>
        </div>
    );
};

export default Upload;