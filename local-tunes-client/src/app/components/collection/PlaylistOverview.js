import React from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';

const PlaylistOverview = () => {

    const handleTrash = () => {
        let result = window.confirm("Want to delete?");
        if (result) {
            console.log("deleted playlist");
        }
    }
    return (
        <div className="row o-collectionPlaylistOverview">
            <div className="col-12">

                {/* create playlist */}

                <div className="row m-playlistOveriew">
                    <div className="col-3">
                        <img src="album-placeholder.jpg" alt="cover-art" title="cover-art" className="a-PlaylistOverviewImage"></img>
                    </div>
                    <div className="col-6 m-playlistOveriewTitle">
                        <span>Create playlist</span>
                    </div>
                    <div className="col-3 m-listOverviewButton" >
                        {/* <FontAwesomeIcon icon={faTrash} className="a-listOverviewButton" id="discover"/> */}
                    </div>
                </div>

                {/* user playlists */}

                <Link className="row m-playlistOveriew" to={`/collection/playlist/1`}>
                {/* <Link className="row m-playlistOveriew" to={`${Routes.PLAYLIST}/1`}> */}
                    <div className="col-3">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-PlaylistOverviewImage"></img>
                    </div>
                    <div className="col-6 m-playlistOveriewTitle">
                        <span>Funk Blues</span>
                    </div>
                    <div className="col-3 m-listOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faTrash} className="a-listOverviewButton" id="discover" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PlaylistOverview;