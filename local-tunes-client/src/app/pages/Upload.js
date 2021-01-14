import React, { useEffect, useState} from 'react';
import {HeaderContainer} from '../components';
import axios from 'axios';


const Upload = () => {
    const [form, setForm] = useState({
        artist: "",
        album: "",
        songs: "",
        genre: ""
    });
    // const [ songIDs, setSongIDs ] = useState([]);
    const [ imgID, setImgID ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ uid, setUid ] = useState();
    const songIDs = []
    /*
    API information
    */
    const apiUrl = `${process.env.REACT_APP_URL}/wp-json/wp/v2/media/`;
    const apiUrlAlbum = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums/`;
    const apiUrlGenres = `${process.env.REACT_APP_URL}/wp-json/wp/v2/genres`;
    const apiUrlUId = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/me`;

    const config = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };


    useEffect(() => {
        navigator.geolocation.getCurrentPosition( function(position) {
            localStorage.setItem("lat", position.coords.latitude)
            localStorage.setItem("long", position.coords.longitude)
        })
    },[])



        
    // get artist id
    useEffect(() => {
        axios.get(
            apiUrlUId,
            config
        ).then((res) => setUid(res.data.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleChange = (event) => {
        const value = event.target.value;
        setForm({
          ...form,
          [event.target.name]: value
        });
    }

    // fetch available genres from db
    const fetchGenres = async () => {
        await axios.get(
            apiUrlGenres,
            config
        ).then((res) => setGenres(res.data))
        .catch((res) => console.log(res));
    }
    useEffect(() => {
        fetchGenres();
    })
    const uploadAlbumInformation = async () => {
        console.log(localStorage.getItem("lat"))
        const data = {
            "title": form.album,
            "fields": {
                "title": form.album,
                "artist": uid,
                "songs": songIDs,
                "image": imgID,
                "genre": form.genre,
                "latitude": localStorage.getItem("lat"),
                "longitude": localStorage.getItem("long")
            },
            "status": "publish"
        };
        console.log(data);
        await axios.post(
            apiUrlAlbum,
            data,
            config
        ).then((res) => {
            console.log(res);
            window.alert(res.statusText) // todo
        }).catch((err) => {
            console.log(err.response.data.message);
        })
    };

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
        Array.from(songs.files).forEach( async (f, i) => { 
            const formData = new FormData();
            formData.set("file", f);

            await axios.post(
                apiUrl,
                formData,
                config
            ).then((res) => {
                songIDs.push(res.data.id);
                console.log(songIDs);
                if(i === songs.files.length-1) {
                    const coverart = document.getElementById("a-cover-art"); // find selected cover art
                    uploadImg(coverart);  // sorry for the ghetto solution 

                }


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

                        <label htmlFor="album" className="a-authTextLabel">Album</label>
                        <input type="text" name="album" className="a-authTextInput" value={form.album} onChange={handleChange}></input>
                        <input type="hidden" name="cover-art"></input>
                        <input type="hidden" value={songIDs} name="songs"></input>
                        <label htmlFor="genre" className="a-authTextLabel">Genre</label>

                        <select name="genre" id="genre" onChange={handleChange}>
                            {
                                genres && genres.map((data, index) => 
                                    <option value={data.id} key={index}>{data.title.rendered}</option>
                                )
                            }

                        </select>
                        <button type="submit" className="a-authButton" onClick={handleSubmit}>Upload</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Upload;