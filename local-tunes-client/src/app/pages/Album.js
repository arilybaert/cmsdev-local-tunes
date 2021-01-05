import React, {  useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import {HeaderContainer, Player, LocalTunesContext } from '../components';
import SongPopup from '../components/songPopup';
import axios from 'axios';


const Playlist = () => {
    const { popupState, setPopupState} = useContext(LocalTunesContext);
    const { setAlbumTitle, setAlbumImage, setArtistTitle, artistTitle } = useContext(LocalTunesContext);
    const [ songs, setSongs ] = useState();
    let { id } = useParams();

    const apiUrl = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums/${id}`;

    const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: { 
            // 'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };
    
    const fetchAlbum = () => {
        axios.get(
            apiUrl,
            config,
        ).then((res) => {
            console.log(res.data)
            setAlbumTitle(res.data.acf.title);
            setArtistTitle(res.data.acf.artist);
            setAlbumImage("https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1");
            setSongs(res.data.acf.songs);
        }).catch((err) => {
            console.log(err.response.data.message);
        });
    };

    useEffect (() => {
        fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

const handleTrash = () => {
    let result = window.confirm("Want to delete?");
    if (result) {
        console.log("deleted song");
    }
}
const handleMenu = () => {
    setPopupState(!popupState);
}
    return (
        <div>
            <HeaderContainer/>
            <div className="row o-collectionSongOverview">

                { songs && songs.map((data, index) => 
                    <div className="row m-songOveriew" key={index}>
                        <div className="col-2">
                            <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                        </div>
                        <div className="col-6 m-songOveriewTitle">
                            <span className="a-songOveriewTitle">{data.post_title}</span>
                            <span className="a-songOveriewArtist">{artistTitle}</span>
                        </div>
                        <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                            <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                        </div>
                        <div className="col-2 m-songOverviewButton" onClick={handleMenu}>
                            <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                        </div>

                        {popupState ? <SongPopup title={data.post_title} artist={artistTitle} img={"https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1"} /> : ''}
                    </div>
                )}



            </div>
            <Player/>
        </div>
    )
};

export default Playlist;