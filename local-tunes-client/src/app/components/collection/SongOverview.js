import React, {  useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import SongPopup from '../songPopup';

import { LocalTunesContext } from '../../components';
import axios from 'axios';

const SongOverview = () => {
    const { popupState, setPopupState} = useContext(LocalTunesContext);
    const [ likedSongs, setLikedSongs ] = useState();
    const apiUrlUser = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/me`;
    const apiUrlAlbums = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums`;
    
    const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };

    const fetchUserSongs = () => {
        // fetch user id
        axios.get(
            apiUrlUser,
            config
        ).then((res) => {
            console.log(res.data.id);
            // fetch liked songs
            axios.get(
                `${process.env.REACT_APP_URL}/wp-json/wp/v2/songs?slug=2`,
                config
            ).then((res) => {
                // setLikedSongs(res.data[0].acf.songs_ids)})
                const arr = res.data[0].acf.songs_ids;
                axios.get(
                    apiUrlAlbums,
                    config
                ).then((res) => {
                    arr.forEach(song => {
                        res.data.forEach(album => {
                            album.acf.songs.forEach(songEl => {
                                if(songEl.ID === song.ID) {
                                    song.image = album.acf.image.guid
                                    song.artist = album.acf.artist
                                    song.album = album.acf.title
                                }
                            })
                        })
                    });
                    setLikedSongs(arr);
                })
                .catch((res) => console.log(res))
            }).catch((res)=> console.log(res))
        }).catch((res) => console.log(res));
    };

    useEffect(() => {

        fetchUserSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
        <div className="row o-collectionSongOverview">
            {
                likedSongs && likedSongs.map((data, index) => 
                <div className="row m-songOveriew" key={index}>
                    <div className="col-2">
                        <img src={data.image} alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                    </div>
                    <div className="col-6 m-songOveriewTitle">
                        <span className="a-songOveriewTitle">{data.post_title}</span>
                        <span className="a-songOveriewArtist">{data.artist}</span>
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleMenu}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>

                    {popupState ? <SongPopup/> : ''}
                </div>
                )
            }

        
        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

        <div className="row m-songOveriew">
            <div className="col-2">
                <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
            </div>
            <div className="col-6 m-songOveriewTitle">
                <span className="a-songOveriewTitle">Hazy Jane</span>
                <span className="a-songOveriewArtist">Nick Drake</span>
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
            </div>
            <div className="col-2 m-songOverviewButton" onClick={handleTrash}>
                <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
            </div>
        </div>

    </div>

    )
}

export default SongOverview;