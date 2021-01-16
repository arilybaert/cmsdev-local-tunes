import React, {useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faChevronDown, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';


import { LocalTunesContext } from '../context';
const Player = () => {

    const [header] = useState(window.location.pathname);

    const [ playerMin, setPlayerMin ] = useState(true);

    const { cookies, setCookie, audioSrc, playerSong, playerArtist, playerCover, playerStatus, setPlayerStatus } = useContext(LocalTunesContext);

    const [ audioTune, setAudioTune ] = useState();


    useEffect(() => {

        try {
            audioTune.pause();
            audioTune.currentTime = 0;
        } catch (err) {}

        const audio = new Audio(audioSrc);
        if(audio.src.length > 0) {
            if (parseInt(cookies.limit) === 5){
                setPlayerStatus(!playerStatus);
                window.confirm("you need a subscription to play more than 5 songs a day")
            } else {
                audio.play();
                setAudioTune(audio);
                setCookie("limit", parseInt(cookies.limit)+1, {
                    path: "/"
                  });
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[audioSrc]);


    useEffect(() => {
        console.log(playerStatus);
        if(playerStatus === true) {
            document.getElementById("a-cover-art").classList.add("a-rotate")
        } else {
            try {
                document.getElementById("a-cover-art").classList.remove("a-rotate")
            }catch{}
        }

    },[playerStatus])

    const handleMiniPlayerClick = () => {
        if(playerStatus === false){
            audioTune.play();
            setPlayerStatus(!playerStatus);
            // document.getElementById("a-cover-art").classList.add("a-rotate")
        } else {
            try {
                audioTune.pause();
                setPlayerStatus(!playerStatus);
                // document.getElementById("a-cover-art").classList.remove("a-rotate")

            } catch {}

        } 
    };

    const handleMiniPlayerState = () => setPlayerMin(playerMin);

    // useEffect(() => {
    //     console.log(playerStatus);

    // }, [playerStatus]);

    // return (
    //     header && header === "/register" ? 
    //     <div></div>
    //     :
        if (header === "/register" ) {
            return ""
        } else if (header === "/login") {
            return ""
        } else if (header === "/upload") {
            return ""
        } else {
            return (


        <div>
            
            {/* { playerMin ? */}
                <div className="o-player" onClick={handleMiniPlayerState}>

                    <div className="row">
                        <div className="col-3 m-cover-art">
                            {playerCover.length > 0? 
                            <img src={playerCover} title="cover-art" alt="cover-art" className="a-playerImg" id="a-cover-art"></img>
                            :
                            <img src="https://yt3.ggpht.com/_LrWtxX1Yu7dg_VyTdoTI6xBBQ1Lja_aRrUkgrFGOxGtWRIBjnm3BcemtmEWRQIVZs54ckUQxg=s900-c-k-c0x00ffffff-no-rj" title="cover-art" alt="cover-art" className="a-playerImg" id="a-cover-art"></img>
                            }
                        </div>
                        
                        <div className="col-6 m-currentTrackMiniPlayer">
                            <span className="a-currentTrackMiniPlayer">{playerSong}</span>
                            <span className="a-currentAlbumMiniPlayer">{playerArtist}</span>
                        </div>
                        <div className="col-3 m-playerIcon">
                            <FontAwesomeIcon icon={playerStatus ? faPause : faPlay} className="a-playLogo" onClick={handleMiniPlayerClick}/>
                        </div>
                    </div>

                {/* <Navigation/> */}
            </div>
            {/*
            :

            <div  className="o-playerMax">
                <div className="row o-closeBtn">
                    <div className="col-10"></div>
                    <div className="col-2" onClick={handleMiniPlayerState}>
                        <FontAwesomeIcon icon={faChevronDown} className="a-closeBtn" onClick={handleMiniPlayerClick}/>
                    </div>
                </div>

                <div className="row o-coverImg">
                    <div className="col-12 m-coverImg">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-img" title="cover-img" className="a-playerImg"></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 m-songInfo">
                        <h1>Optimistic</h1>
                        <h2>Radiohead</h2>
                    </div>
                </div>

                <div className="row o-playButtons">
                    <div className="col-3"></div>
                    <div className="col-2 m-playLogo">
                        <FontAwesomeIcon icon={faBackward} className="a-playLogo" onClick={handleMiniPlayerClick}/>
                    </div>
                    <div className="col-2 m-playLogo">
                        <FontAwesomeIcon icon={playerStatus ? faPlay :faPause} className="a-playLogo" onClick={handleMiniPlayerClick}/>
                    </div>
                    <div className="col-2 m-playLogo">
                        <FontAwesomeIcon icon={faForward} className="a-playLogo" onClick={handleMiniPlayerClick}/>
                    </div>
                    <div className="col-3"></div>
                </div>

            </div>
            }
        */}
        </div>

)
}
}

export default Player;