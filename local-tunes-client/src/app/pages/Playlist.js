import React, {  useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import {HeaderContainer, LocalTunesContext, Navigation } from '../components';
import SongPopup from '../components/songPopup';


const Playlist = () => {
    const { popupState, setPopupState} = useContext(LocalTunesContext);
    const { setPlaylistTitle, setPlaylistImage } = useContext(LocalTunesContext);

    let { id } = useParams();
    console.log(id);

    useEffect (() => {
        setPlaylistTitle("Solid Jazz")
        setPlaylistImage("https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1")
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
            <Navigation/>
        </div>
    )
};

export default Playlist;