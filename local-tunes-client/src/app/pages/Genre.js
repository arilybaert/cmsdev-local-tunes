import React, { useEffect, useContext, useState } from 'react';
import {useParams} from 'react-router-dom';
import { HeaderContainer,LocalTunesContext, Navigation} from '../components';
import axios from 'axios';
import { Link } from "react-router-dom";



const Genre = () => {
    const [ albums, setAlbums ] = useState();
    const {setGenreTitle, discoverState} = useContext(LocalTunesContext);
    const {genre} = useParams();
    const apiUrlGenre = `${process.env.REACT_APP_URL}/wp-json/acf/v3/albums/?genre=${genre}`;
    const apiUrlGenreName = `${process.env.REACT_APP_URL}/wp-json/wp/v2/genres/${genre}`;

    const config = {
        method: 'GET',
        mode: 'no-cors',
    };

    useEffect(() => {
        console.log(discoverState);
        // searchMusic
        // fetch music
    },[discoverState]);

    // useEffect(() => {
    //     setGenreTitle(genreName);
    // });



    const fetchGenre = () => {
        axios.get(
            apiUrlGenreName,
            config
        ).then((res) => {
            console.log(res.data)
            setGenreTitle(res.data.title.rendered)})
        .catch((res) => console.log(res));
    }
    const fetchAlbums = () => {
        axios.get(
            apiUrlGenre,
            config
        ).then((res) => {
            setAlbums(res.data);
        })
        .catch((res) => console.log(res));
    };
    useEffect(() => {
        fetchGenre()
        fetchAlbums()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // const fetchListens = () => {
    //     axios.get(
    //         apiUrlTopAlbums,
    //         config,
    //     ).then((res) => {
    //         // console.log(res.data)
    //         setTopAlbums(res.data);
    //     }).catch((err) => {
    //         console.log(err.response.data.message);
    //     });
    // }
    // useEffect(() => {
    //     fetchRecentAlbums();
    //     fetchTopAlbums();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[]);
    return (
        <div>
            <HeaderContainer/>

            {discoverState === "mostListened" ?

                <div className="row o-homeSection">
                    {
                        albums && albums.map((data, index) => 
                        <Link to={`/album/${data.id}`} className="col-4 o-releaseCard o-genre" key={index}>
                            <div className="m-releaseCard">
                                <img src={data.acf.image.guid} alt="cover-art" title="cover-art" className="a-cardImg"></img>
                                <span className="a-albumTitleHome">{data.acf.title}</span>
                                <span className="a-albumArtistHome">{data.acf.artist.data.display_name}</span>
                            </div>
                        </Link>
                        )
                    }


                </div>
            : ""}
            {discoverState === "mostRecent" ?
                <div className="row o-homeSection">

                    <div className="col-4 o-releaseCard">
                        <div className="m-releaseCard">
                            <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">Kid A</span>
                            <span className="a-albumArtistHome">Radiohead</span>
                        </div>
                    </div>

                    <div className="col-4 o-releaseCard">
                        <div className="m-releaseCard">
                            <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">Kid A</span>
                            <span className="a-albumArtistHome">Radiohead</span>
                        </div>
                    </div>
                </div>
            : ""}
            
            

            <Navigation/>
        </div>
    )
}

export default Genre;