import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import {Navigation} from '../../components';
const Player = () => {

    const [playerStatus, setPlayerStatus] = useState(false);

    const handleMiniPlayerClick = () => {
        setPlayerStatus(!playerStatus);
    };

    useEffect(() => {
        console.log(playerStatus);

    }, [playerStatus]);

    return (
        <div className="o-player">
            <div className="row">
                <div className="col-3">
                    <img src="https://i.redd.it/aayfot0hjwn21.png" title="cover-art" alt="cover-art" className="a-playerImg"></img>
                </div>
                
                <div className="col-6 m-currentTrackMiniPlayer">
                    <span className="a-currentTrackMiniPlayer">Optimistic</span>
                    <span className="a-currentAlbumMiniPlayer">Kid A</span>
                </div>

                <div className="col-3 m-playerIcon">
                    <FontAwesomeIcon icon={!playerStatus ? faPause : faPlay} className="a-playLogo" onClick={handleMiniPlayerClick}/>
                </div>
            </div>

            <Navigation/>
        </div>
    )
}

export default Player;