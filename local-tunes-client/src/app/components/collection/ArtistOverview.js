import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons';

const ArtistOverview = () => {

    const handleTrash = () => {
        let result = window.confirm("Want to delete?");
        if (result) {
            console.log("artist playlist");
        }
    }

    return (
        <div className="row o-collectionArtistOverview">

            <Link to="/collection/artist/1" className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>James Brown</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </Link>

            <div className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>Miles Davis</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </div>

            <div className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>John Coltrane</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </div>

            <div className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>John Coltrane</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </div>

            <div className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>John Coltrane</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </div>

            <div className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>John Coltrane</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </div>

            <div className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>John Coltrane</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </div>

            <div className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>John Coltrane</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </div>

            <div className="row m-artistOveriew">
                <div className="col-3">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                </div>
                <div className="col-6 m-artistOveriewTitle">
                    <span>John Coltrane</span>
                </div>
                <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                </div>
            </div>
        </div>

    )
}

export default ArtistOverview;