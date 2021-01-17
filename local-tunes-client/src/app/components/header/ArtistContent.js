import React, {useContext, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons';
import { LocalTunesContext } from '../../components';
import axios from 'axios';

const ArtistContent = () => {

    const { artistTitle, artistImage, followedArtists, setFollowedArtists, artistLikeId } = useContext(LocalTunesContext);
    const apiUrl = `${process.env.REACT_APP_URL}wp-json/wp/v2/users/`;
    const apiUserID = `${process.env.REACT_APP_URL}wp-json/wp/v2/users/me`;

    
    useEffect(() => {
        console.log(followedArtists);
        console.log(artistLikeId)
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
    }, [followedArtists]);

    const handleArtistTrash = () => {
        const array = followedArtists
        const index = array.indexOf(artistLikeId);
        if (index > -1) {
            array.splice(index, 1);
        } else {
            array.push(artistLikeId);
        }
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
                apiUrl + res.data.id,
                config,
                body
            ).then((res) => console.log(res));
    })


        let result = window.confirm("Want to unfollow artist?");
        if (result) {
            console.log("unfollowed artist");
        }
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