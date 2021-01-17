import React, {  useContext, useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {HeaderContainer, LocalTunesContext, Navigation } from '../components';
import SongPopup from '../components/songPopup';
import axios from 'axios';

const Artist = () => {
    const { artistId, setArtistImage, setArtistTitle, popupState, setPopupState } = useContext(LocalTunesContext);
    console.log(artistId);

    let { id } = useParams();
    
    const [ albums, setAlbums ] = useState();

    useEffect (() => {
        setArtistImage("https://pyxis.nymag.com/v1/imgs/045/fed/60966d175a6a6e653e21f0eeda4884dca3-27-radiohead-1993.rsquare.w700.jpg");
        fetchAlbums(id);

    },);
    // 30
    const fetchAlbums = (id) => {
        const apiUrl = `${process.env.REACT_APP_URL}/wp-json/acf/v3/albums/?artist=${id}`;
        const config = {
            method: 'GET',
            mode: 'no-cors',
        };
        axios.get(
            apiUrl,
            config
        ).then((res) => setAlbums(res.data));
    }

const handleTrash = () => {
    let result = window.confirm("Want to delete?");
    if (result) {
        console.log("deleted song");
    }
}
const handleMenu = () => {
    setPopupState(!popupState);
}
    return (
        <div>
            <HeaderContainer/>

            {/* albums */}

            <div className="row o-artistSection">
                <div className="col-12 a-artistSectionTitle">All New Release</div>
                
                { albums && albums.map((data, index) => 
                    <div className="col-3 o-artistAlbumCard">
                        <div className="m-artistAlbumCard">
                            <img src={data.acf.image.guid} alt="cover-art" title="cover-art" className="a-cardAlbumImg"></img>
                            <span className="a-albumTitleArtist">{data.acf.title}</span>
                        </div>
                    </div>
                )}
                


                {/* singles 

                <div className="col-12 a-artistSectionTitle">Singles</div>

                <div className="row m-songArtistOveriew">
                    <div className="col-2">
                        <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songArtistOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">Hazy Jane</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleMenu}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>
                    {popupState ? <SongPopup/> : ''}
                </div>

*/}

            </div>

            <Navigation/>
        </div>

    )
};

export default Artist;