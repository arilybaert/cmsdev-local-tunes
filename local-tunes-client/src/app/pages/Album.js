import React, {  useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import {HeaderContainer, Player, LocalTunesContext } from '../components';
import SongPopup from '../components/songPopup';
import axios from 'axios';


const Playlist = () => {
    const { popupState, setPopupState} = useContext(LocalTunesContext);
    const { setAlbumTitle, setAlbumImage, setArtistTitle } = useContext(LocalTunesContext);

    let { id } = useParams();
    console.log(id);

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
            setAlbumImage("https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1")
        }).catch((err) => {
            console.log(err.response.data.message);
        });
    };

    useEffect (() => {
        fetchAlbum();
    },);

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

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleMenu}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>

                    {popupState ? <SongPopup/> : ''}
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

                <div className="row m-songOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                        <span className="a-songOveriewArtist">Nick Drake</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                </div>

            </div>
            <Player/>
        </div>
    )
};

export default Playlist;