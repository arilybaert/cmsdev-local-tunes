import React, { useEffect, useContext } from 'react';
import {useParams} from 'react-router-dom';
import {Player, HeaderContainer,LocalTunesContext} from '../components';

const Genre = () => {
    const {setGenreTitle, discoverState} = useContext(LocalTunesContext);

    const {genre} = useParams();

    useEffect(() => {
        console.log(discoverState);
    },[discoverState]);


    useEffect(() => {
        setGenreTitle(genre);
    })
    return (
        <div>
            <HeaderContainer/>

            {discoverState === "mostListened" ?

                <div className="row o-homeSection">
                    
                    <div className="col-4 o-releaseCard">
                        <div className="m-releaseCard">
                            <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">Kid A</span>
                            <span className="a-albumArtistHome">Radiohead</span>
                        </div>
                    </div>

                    <div className="col-4 o-releaseCard">
                        <div className="m-releaseCard">
                            <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">Kid A</span>
                            <span className="a-albumArtistHome">Radiohead</span>
                        </div>
                    </div> 
                </div>
            : ""}
            {discoverState === "mostRecent" ?
                <div className="row o-homeSection">

                    <div className="col-4 o-releaseCard">
                        <div className="m-releaseCard">
                            <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">Kid A</span>
                            <span className="a-albumArtistHome">Radiohead</span>
                        </div>
                    </div>

                    <div className="col-4 o-releaseCard">
                        <div className="m-releaseCard">
                            <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">Kid A</span>
                            <span className="a-albumArtistHome">Radiohead</span>
                        </div>
                    </div>
                </div>
            : ""}
            
            

            <Player/>
        </div>
    )
}

export default Genre;