import React, {useState} from 'react';
import {HeaderContainer} from '../components';
import axios from 'axios';

const Upload = () => {

    const [form, setForm] = useState({
        artist: "",
        album: "",
        songs: ""
    });
    const [ songIDs, setSongIDs ] = useState([]);
    const [ imgID, setImgID ] = useState([]);

    /*
    API information
    */
    const apiUrl = `${process.env.REACT_APP_URL}/wp-json/wp/v2/media/`;
    const apiUrlAlbum = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums/`;
    const config = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };
    const handleChange = (event) => {
        const value = event.target.value;
        setForm({
          ...form,
          [event.target.name]: value
        });
    }
    const uploadAlbumInformation = async () => {
        const data = {
            "fields": {
                "title": form.album,
                "artist": form.artist,
                "songs": songIDs,
                "image": imgID
            }
        };
        console.log(data);
        await axios.post(
            apiUrlAlbum,
            data,
            config
        ).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err.response.data.message);
        })
    }
    const uploadImg = async (image) => {
        const imgData = new FormData();
        imgData.set("file", image.files[0]);
        await axios.post(
            apiUrl,
            imgData,
            config
        ).then((res) => {
            setImgID(imgID.push(res.data.id));
            console.log(`image ${imgID}`);

            uploadAlbumInformation(); // sorry for the ghetto solution 

        }).catch((err) => {
            console.log(err.response.data.message);
        })
    }
    const uploadsongs = (songs) => {        // Loop throug songs and upload them one by one
        Array.from(songs.files).forEach( async (f) => { 
            const formData = new FormData();
            formData.set("file", f);

            await axios.post(
                apiUrl,
                formData,
                config
            ).then((res) => {
                setSongIDs(songIDs.push(res.data.id));
                console.log(songIDs);
                const coverart = document.getElementById("a-cover-art"); // find selected cover art
                uploadImg(coverart);  // sorry for the ghetto solution 

            }).catch((err) => {
                console.log(err.response.data.message);
            })
        });
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        const musicfile = document.getElementById("a-music");       // find selected songs

        uploadsongs(musicfile);


       /*
        @TODO upload form in one movement
        e.preventDefault();
        const uploadForm = document.getElementById("uploadForm");
        const formData = new FormData(uploadForm);
        */

    }

    return (
        <div>
            <HeaderContainer/>

            <div className="row">
                <div className="col-12 o-form">

                    <form className="m-form">
                        <label htmlFor="musicfile" className="a-authTextLabel">Music file</label>
                        <input type="file" name="musicfile" className="a-authTextInput" id="a-music" multiple></input>

                        {/* <button type="submit" className="a-authButton" onClick={handleSubmit}>Upload</button> */}

                    {/* </form> */}

                    {/* <form className="m-form"> */}
                        <label htmlFor="coverart" className="a-authTextLabel">Cover-art</label>
                        <input type="file" name="coverart" className="a-authTextInput" id="a-cover-art"></input>
                    {/* </form> */}

                    {/* <form className="m-form"> */}
                    <label htmlFor="artist" className="a-authTextLabel">Artist</label>
                        <input type="text" name="artist" className="a-authTextInput" onChange={handleChange} value={form.artist} ></input>
                        <label htmlFor="album" className="a-authTextLabel">Album</label>
                        <input type="text" name="album" className="a-authTextInput" value={form.album} onChange={handleChange}></input>
                        <input type="hidden" name="cover-art"></input>
                        <input type="hidden" value={songIDs} name="songs"></input>

                        <button type="submit" className="a-authButton" onClick={handleSubmit}>Upload</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Upload;