import React, {useState} from 'react';
import {HeaderContainer} from '../components';
import axios from 'axios';

const Upload = () => {

    const [form, setForm] = useState({
        title: "",
    });
    const [ uploadedSongs, setUploadedSongs ] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setForm({
          ...form,
          [event.target.name]: value
        });
    }
    const apiUrl = `${process.env.REACT_APP_URL}/wp-json/wp/v2/media/`;

    const config = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('login')}`,
            // 'Content-Type': 'multipart/form-data',
            // 'Accept': '*/*',
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const musicfile = document.getElementById("a-music");


        Array.from(musicfile.files).forEach((f) => { 
            const formData = new FormData();

            // console.log(f.data.data.id);
            formData.set("file", f);

            axios.post(
                apiUrl,
                formData,
                config
            ).then((res) => {
                setUploadedSongs(uploadedSongs.push(res.data.id));
                console.log(uploadedSongs);
            }).catch((err) => {
                console.log(err.response.data.message);
            })
        });



        
        // console.log(musicfile.files);
        // formData.append("title", form.title);

       /*
        @TODO upload form in one movement
        e.preventDefault();
        const uploadForm = document.getElementById("uploadForm");
        const formData = new FormData(uploadForm);
        */



    }



    // const handleChange = (event) => {
    //     const value = event.target.value;
    //     setForm({
    //       ...form,
    //       [event.target.name]: value
    //     });
    // }
    return (
        <div>
            <HeaderContainer/>

            <div className="row">
                <div className="col-12 o-form">

                    <form className="m-form">
                        <label htmlFor="musicfile" className="a-authTextLabel">Music file</label>
                        <input type="file" name="musicfile" className="a-authTextInput" id="a-music" multiple></input>
 
                        {/* <label htmlFor="title" className="a-authTextLabel" id="a-title">Title</label>
                        <input type="text" name="title" className="a-authTextInput" onChange={handleChange}></input> */}

                        <button type="submit" className="a-authButton" onClick={handleSubmit}>Upload</button>

                    </form>

                    <form className="m-form">
                        <label htmlFor="coverart" className="a-authTextLabel">Cover-art</label>
                        <input type="file" name="coverart" className="a-authTextInput"></input>
                    </form>

                    <form className="m-form">
                    <label htmlFor="artist" className="a-authTextLabel">Artist</label>
                        <input type="text" name="artist" className="a-authTextInput" ></input>
                        <label htmlFor="album" className="a-authTextLabel">Album</label>
                        <input type="text" name="album" className="a-authTextInput"></input>
                        <input type="hidden" name="cover-art"></input>
                        <input type="hidden" name="songs"></input>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Upload;