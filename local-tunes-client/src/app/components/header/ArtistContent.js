import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons';
import { LocalTunesContext } from '../../components';

const ArtistContent = () => {

    const { artistTitle, artistImage } = useContext(LocalTunesContext);

    console.log('hey')
    const handleArtistTrash = () => {
        let result = window.confirm("Want to unfollow artist?");
        if (result) {
            console.log("unfollowed artist");
        }
    }
    return (
        <div className="row o-homeHeader">
                <div className="col-12 m-playlistDetailCover">
                    <img src={artistImage && artistImage} alt="cover-img" title="cover-img" className="a-artistDetailCover"></img>
                </div>

                <div className="col-3">
                </div>
                <div className="col-6">
                    <h2 className="a-playlistDetailTitle">{artistTitle && artistTitle}</h2>
                </div>
                <div className="col-3 m-playlistDetailTrash" onClick={handleArtistTrash}>
                    <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                </div>
            </div>
    )
}

export default ArtistContent;