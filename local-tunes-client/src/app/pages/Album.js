import React, {  useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import {HeaderContainer, Player, LocalTunesContext } from '../components';
import SongPopup from '../components/songPopup';
import axios from 'axios';

const Playlist = () => {
    // context
    const { popupState, setPopupState} = useContext(LocalTunesContext);
    const { setAlbumTitle, setAlbumImage, setArtistTitle, artistTitle, albumImage } = useContext(LocalTunesContext);

    // states
    const [ songs, setSongs ] = useState();
    const [ likedSongs, setLikedSongs ] = useState([]);
    const [ likedSongsID, setLikedSongsID ] = useState();
    // eslint-disable-next-line no-unused-vars
    const [ userID, setUserID ] = useState();



    let { id } = useParams();

    // consts
    const apiUrl = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums/${id}`;
    const apiUserSongUrl = `${process.env.REACT_APP_URL}/wp-json/wp/v2/songs/${likedSongsID}`;
    const apiUserID = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/me`;
    const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: { 
            // 'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };

    const fetchUserSongs = async () => {
        // Get current user
        const conf = {
            method: 'GET',
            mode: 'cors',
            origin: "*",
            "Access-Control-Allow-Origin": "*",
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('login')}`,
            },
        }

        await axios.get(
            apiUserID,
            conf,
        ).then(async(res) => {
            setUserID(res.data.id)

            await axios.get(
                `${process.env.REACT_APP_URL}/wp-json/wp/v2/songs?slug=${res.data.id}`, // tried this with setUserID but it updates to late. So the result below gives me undefined
                conf,
            ).then((res) => {
                setLikedSongs([]);
                setLikedSongsID(res.data[0].id);
                console.log(res);
                if(res.data[0].acf.songs_ids.length > 0 ) {
                    const array = [];
                    console.log(res.data[0].acf.songs_ids);
                    for(let i = 0 ; i < res.data[0].acf.songs_ids.length ; i++) {
                    console.log(res.data[0].acf.songs_ids[i].ID);
                    array.push(res.data[0].acf.songs_ids[i].ID);
                }
                setLikedSongs(array);
                }
                
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });

        
    };



    const fetchAlbum = async () => {
        await axios.get(
            apiUrl,
            config,
        ).then((res) => {
            setAlbumTitle(res.data.acf.title);
            setArtistTitle(res.data.acf.artist);
            setAlbumImage(res.data.acf.image.guid);
            setSongs(res.data.acf.songs);
        }).catch((err) => {
            console.log(err.response.data.message);
        });
    };

    const updateUserSongs = async (array) => {
        const config = {
            method: 'POST',
            mode: 'no-cors',
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('login')}`
            },
        };
        const data = {
            "fields": {
                "songs_ids": array

            },
            "status": "publish"
        };
        await axios.post(
            apiUserSongUrl,
            data,
            config,
        ).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err.response.data.message);
        });
    }

    useEffect (() => {
        fetchAlbum();
        fetchUserSongs();

        // fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const likeChange = () => {
        // remove like colors
        const btns = document.querySelectorAll(".a-songBtn");
        btns.forEach(btn => {
            btn.classList.remove("a-songOverviewButton");
            btn.classList.add("a-songOverviewButtonAlt");
        })
        likedSongs.forEach(like => {
            if(document.getElementById(like) !== null ) {
                // add like colors
                document.getElementById(like).classList.add("a-songOverviewButton");
                document.getElementById(like).classList.remove("a-songOverviewButtonAlt");
            }

        });
    }

    const handleLike = (id) => {
            const array = likedSongs;
            const index = array.indexOf(id);
            if (index > -1) {
                array.splice(index, 1);
            } else {
                array.push(id);
            }
            setLikedSongs(likedSongs);
            console.log(likedSongs);
            updateUserSongs(array);
            // window.location.reload();
            likeChange();

        }

    const handleMenu = () => {
        setPopupState(!popupState);
    }
    return (
        <div>
            <HeaderContainer/>
            <div className="row o-collectionSongOverview">

                { songs && songs.map((data, index) => 
                // console.log(songs)
                    <div className="row m-songOveriew" key={index}>
                        <div className="col-2">
                            <img src={albumImage} alt="cover-art" title="cover-art" className="a-songOverviewImage"></img>
                        </div>
                        <div className="col-6 m-songOveriewTitle">
                            <span className="a-songOveriewTitle">{data.post_title}</span>
                            <span className="a-songOveriewArtist">{artistTitle}</span>
                        </div>
                        <div className="col-2 m-songOverviewButton" onClick={() => handleLike(data.ID)}>
                            <FontAwesomeIcon icon={faHeart} className="a-songBtn a-songOverviewButtonAlt" id={data.ID} />
                        </div>
                        <div className="col-2 m-songOverviewButton" onClick={handleMenu}>
                            <FontAwesomeIcon icon={faEllipsisV} className="a-songOverviewButtonAlt" id="discover" />
                        </div>

                        {popupState ? <SongPopup title={data.post_title} artist={artistTitle} img={"https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1"} /> : ''}
                    </div>
                )}



            </div>
            <Player/>
        </div>
    )
};

export default Playlist;