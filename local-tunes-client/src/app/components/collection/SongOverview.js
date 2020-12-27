import React, {  useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import SongPopup from '../songPopup';

import { LocalTunesContext } from '../../components';

const SongOverview = () => {
    const { popupState, setPopupState} = useContext(LocalTunesContext);


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

    )
}

export default SongOverview;