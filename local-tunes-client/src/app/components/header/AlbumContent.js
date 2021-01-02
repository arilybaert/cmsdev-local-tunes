import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons';

import { LocalTunesContext } from '../../components';

const PlaylistContent = () => {

    const { albumImage, albumTitle, artistTitle } = useContext(LocalTunesContext);

    const handlePlaylistTrash = () => {
        let result = window.confirm("Want to delete?");
        if (result) {
            console.log("deleted song");
        }
    }

    
    return (
        <div className="row o-homeHeader">
                <div className="col-12 m-playlistDetailCover">
                    <img src={albumImage && albumImage} alt="cover-img" title="cover-img" className="a-playlistDetailCover"></img>
                </div>

                <div className="col-3">
                </div>
                <div className="col-6">
                    <h2 className="a-playlistDetailTitle">{albumTitle && albumTitle}</h2>
                    <h6 className="a-playlistDetailTitle">{artistTitle && artistTitle}</h6>
                </div>
                <div className="col-3 m-playlistDetailTrash" onClick={handlePlaylistTrash}>
                    <FontAwesomeIcon icon={faTrash} className="a-songOverviewButton" id="discover" />
                </div>
            </div>
    )
}


export default PlaylistContent;