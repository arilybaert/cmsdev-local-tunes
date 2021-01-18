import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ArtistOverview = () => {

    const [ artistsArr, setArtistsArr ] = useState()

    const apiUserID = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/me`;
    const apiUrlArtists = `${process.env.REACT_APP_URL}wp-json/wp/v2/songs?slug=`;
    const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };
    const fetchArtist = () => {
        axios.get(
            apiUserID,
            config
        ).then((res) => {
            const uid = res.data.id;
            axios.get(
                apiUrlArtists + uid,
                config
            ).then((res) => {
                if(res.data[0].acf.artists !== false) {
                    console.log(res.data[0].acf.artists);
                    setArtistsArr(res.data[0].acf.artists);
                }
            })
        })
    }

    useEffect(() => {
        fetchArtist();
    },[])
    const handleTrash = () => {
        let result = window.confirm("Want to delete?");
        if (result) {
            console.log("artist playlist");
        }
    }

    return (
        <div className="row o-collectionArtistOverview">

            {
                artistsArr && artistsArr.map((data, index) => 
                    <Link to={`/collection/artist/${data.ID}`} className="row m-artistOveriew">
                        <div className="col-3">
                            <img src="https://i0.wp.com/proxymusic.club/wp-content/uploads/2018/07/klarwein-davis-bitches2.jpg?fit=2280%2C2280&ssl=1" alt="cover-art" title="cover-art" className="a-artistOverviewImage"></img>
                        </div>
                        <div className="col-6 m-artistOveriewTitle">
                            <span>{data.data.display_name}</span>
                        </div>
                        {/* <div className="col-3 m-artistOverviewButton" onClick={handleTrash}>
                            <FontAwesomeIcon icon={faHeart} className="a-artistOverviewButton" id="discover" />
                        </div> */}
                    </Link>
                )
            }
            

        </div>

    )
}

export default ArtistOverview;