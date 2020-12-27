import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons';

import { LocalTunesContext } from '../../components';

const PlaylistContent = () => {

    const { playlistTitle, playlistImage } = useContext(LocalTunesContext);

    const handlePlaylistTrash = () => {
        let result = window.confirm("Want to delete?");
        if (result) {
            console.log("deleted song");
        }
    }
    return (
        <div className="row o-homeHeader">
                <div className="col-12 m-playlistDetailCover">
                    <img src={playlistImage && playlistImage} alt="cover-img" title="cover-img" className="a-playlistDetailCover"></img>
                </div>

                <div className="col-3">
                </div>
                <div className="col-6">
                    <h2 className="a-playlistDetailTitle">{playlistTitle && playlistTitle}</h2>
                </div>
                <div className="col-3 m-playlistDetailTrash" onClick={handlePlaylistTrash}>
                    <FontAwesomeIcon icon={faTrash} className="a-songOverviewButton" id="discover" />
                </div>
            </div>
    )
}


export default PlaylistContent;