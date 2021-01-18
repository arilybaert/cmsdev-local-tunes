import React, {useContext, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons';
import { LocalTunesContext } from '../../components';
import axios from 'axios';

const ArtistContent = () => {

    const { artistTitle, artistImage, followedArtists, setFollowedArtists, artistLikeId, likedArtistsId } = useContext(LocalTunesContext);
    const apiUrl = `${process.env.REACT_APP_URL}wp-json/wp/v2/songs/`;
    const apiUserID = `${process.env.REACT_APP_URL}wp-json/wp/v2/users/me`;

    const checkLikes = () => {
        document.getElementById('discover').classList.remove("a-songOverviewButtonAlt");
        document.getElementById('discover').classList.remove("a-songOverviewButton");
        console.log(followedArtists.includes(parseInt(artistLikeId)))
        if(followedArtists.includes(parseInt(artistLikeId))) {
            console.log("in");
            document.getElementById('discover').classList.add("a-songOverviewButton");
        } else {
            console.log("out");
            document.getElementById('discover').classList.add("a-songOverviewButtonAlt");
        }
    }
    useEffect(() => {
        checkLikes();
        // console.log(artistLikeId)
        
    }, [followedArtists]);

    const handleArtistTrash = () => {
        const array = followedArtists
        console.log(array);
        const index = array.indexOf(parseInt(artistLikeId));
        if (index > -1) {
            array.splice(index, 1);
        } else {
            array.push(parseInt(artistLikeId));
        }
        setFollowedArtists(array);
        checkLikes();
        const body = {
            "fields": {
                "artists": array
            }
        }
        const conf = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('login')}`,
            },
        }
        axios.get(
            apiUserID,
            conf
        ).then((res) => {
            const config = {
                method: 'POST',
                mode: 'cors',
                headers: { 
                    'Authorization': `Bearer ${localStorage.getItem('login')}`,
                },
            }
            axios.post(
                apiUrl + likedArtistsId,
                body,
                config
            ).then((res) => console.log(res));
    })



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