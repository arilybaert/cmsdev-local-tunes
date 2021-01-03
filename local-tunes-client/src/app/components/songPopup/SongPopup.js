import React, {  useContext } from 'react';

import { LocalTunesContext } from '../../components';
const SongPopup = ({title, artist, img}) => {
    const { popupState, setPopupState} = useContext(LocalTunesContext);

    const handleMenu = () => {
        setPopupState(!popupState);
    }
    return (
        <div className="o-songPopup">
                <div className="col-12 m-songPopup">
                    <img src={img} alt="cover-art" title="cover-art" className="a-songPopupImage"></img>
                    <span className="a-songPopupTitle">{title}</span>
                    <span className="a-songPopupArtist">{artist}</span>
                </div>
                <div className="col-12 m-songPopupAction">
                    <span className="a-songPopupAction">Add to a playlist</span>
                </div>
                <div className="col-12">
                    <span className="a-songPopupAction">Delete from this playlist</span>
                </div>
                <div className="col-12" onClick={handleMenu}>
                    <p className="a-songPopupClose">Close</p>
                </div>
            </div>
    )
}

export default SongPopup;