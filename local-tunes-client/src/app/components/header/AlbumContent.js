import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGuitar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { LocalTunesContext } from '../../components';

const PlaylistContent = () => {

    const { albumImage, albumTitle, artistTitle, artistId } = useContext(LocalTunesContext);

    // const handlePlaylistTrash = () => {
    //     let result = window.confirm("Want to delete?");
    //     if (result) {
    //         console.log("deleted song");
    //     }
    // }

    
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
                <Link to={`/collection/artist/${artistId && artistId}`} className="col-3 m-playlistDetailTrash">
                    <FontAwesomeIcon icon={faGuitar} className="a-songOverviewButton" id="discover" />
                </Link>
            </div>
    )
}


export default PlaylistContent;