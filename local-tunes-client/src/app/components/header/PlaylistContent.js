import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
const PlaylistContent = () => {
    const handlePlaylistTrash = () => {
        let result = window.confirm("Want to delete?");
        if (result) {
            console.log("deleted song");
        }
    }
    return (
        <div className="row o-homeHeader">
                <div className="col-12 m-playlistDetailCover">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-img" title="cover-img" className="a-playlistDetailCover"></img>
                </div>

                <div className="col-3">
                </div>
                <div className="col-6">
                    <h2 className="a-playlistDetailTitle">Solid Jazz</h2>
                </div>
                <div className="col-3 m-playlistDetailTrash" onClick={handlePlaylistTrash}>
                    <FontAwesomeIcon icon={faTrash} className="a-songOverviewButton" id="discover" />
                </div>
            </div>
    )
}


export default PlaylistContent;