import React, {  useContext } from 'react';

import { LocalTunesContext } from '../../components';
const SongPopup = () => {
    const { popupState, setPopupState} = useContext(LocalTunesContext);

    const handleMenu = () => {
        setPopupState(!popupState);
    }
    return (
        <div className="o-songPopup">
                <div className="col-12 m-songPopup">
                    <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songPopupImage"></img>
                    <span className="a-songPopupTitle">Hazy Jane</span>
                    <span className="a-songPopupArtist">Nick Drake</span>
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