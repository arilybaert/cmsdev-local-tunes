import React, {  useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import SongPopup from '../songPopup';

import { LocalTunesContext } from '../../components';
import axios from 'axios';

const SongOverview = () => {
    const { popupState, setPopupState} = useContext(LocalTunesContext);
    const [ likedSongs, setLikedSongs ] = useState();
    const [ userId, setUserId ] = useState();
    const apiUrlUser = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/me`;
    const apiUrlAlbums = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums`;
    const apiUrlUserLikes = `${process.env.REACT_APP_URL}/wp-json/wp/v2/songs?slug=${userId}`;

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
            setUserId(res.data.id);
            // fetch liked songs
            axios.get(
                `${process.env.REACT_APP_URL}/wp-json/wp/v2/songs?slug=${res.data.id}`,
                config
            ).then((res) => {
                // setLikedSongs(res.data[0].acf.songs_ids)})
                const arr = res.data[0].acf.songs_ids;
                axios.get(
                    apiUrlAlbums,
                    config
                ).then((res) => {
                    arr && arr.forEach(song => {
                        res.data.forEach(album => {
                            album.acf.songs.forEach(songEl => {
                                console.log(album);
                                if(songEl.ID === song.ID) {
                                    song.image = album.acf.image.guid
                                    song.artist = album.acf.artist.data.display_name
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

const handleTrash = (id) => {
    let result = window.confirm("Want to delete?");
    if (result) {
        axios.get(
            apiUrlUserLikes,
            config
        ).then((res) => {
            const songArr = res.data[0].acf.songs_ids;
            const userLikesID = res.data[0].id
            songArr.forEach((song, index) => {
                if(song.ID === id) {
                    console.log("index " + index);
                    songArr.splice(index, 1);
                }
                const data = {
                    "fields": {
                        songs_ids: songArr
                    }
                }
                axios.post(
                    `${process.env.REACT_APP_URL}//wp-json/wp/v2/songs/${userLikesID}`,
                    data,
                    config
                ).then((res) => fetchUserSongs())
                .catch((res) => console.log(res));

            });
        })
        .catch((res)=> console.log(res));
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
                    <div className="col-2 m-songOverviewButton" onClick={() => handleTrash(data.ID)}>
                        <FontAwesomeIcon icon={faHeart} className="a-songOverviewButton" id="discover" />
                    </div>
                    <div className="col-2 m-songOverviewButton" onClick={handleMenu}>
                        <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                    </div>

                    {popupState ? <SongPopup/> : ''}
                </div>
                )
            }




    </div>

    )
}

export default SongOverview;