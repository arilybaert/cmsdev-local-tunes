import React, { useEffect, useState } from 'react';
import {Player, HeaderContainer} from '../components';
import axios from 'axios';
import { Link } from "react-router-dom";




const Home = () => {


    const [recentAlbums, setRecentAlbums] = useState('');
    const [topAlbums, setTopAlbums] = useState('');
    // var slider = document.getElementById("myRange");
    // var output = document.getElementById("demo");
    // output.innerHTML = slider.value; // Display the default slider value
    
    // // Update the current slider value (each time you drag the slider handle)
    // slider.oninput = function() {
    //   output.innerHTML = this.value;
    // }

    const apiUrlRecentAlbums = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums?order=desc&per_page=6`;
    const apiUrlTopAlbums = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums?filter[orderby]=likes&order=desc`;

    const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: { 
            // 'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };
    
    const fetchRecentAlbums = () => {
        axios.get(
            apiUrlRecentAlbums,
            config,
        ).then((res) => {
            // console.log(res.data)
            setRecentAlbums(res.data);
        }).catch((err) => {
            console.log(err.response.data.message);
        });
    };

    const fetchTopAlbums = () => {
        axios.get(
            apiUrlTopAlbums,
            config,
        ).then((res) => {
            // console.log(res.data)
            setTopAlbums(res.data);
        }).catch((err) => {
            console.log(err.response.data.message);
        });
    }
    useEffect(() => {
        fetchRecentAlbums();
        fetchTopAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return (
        <div>
            <HeaderContainer/>

            <div className="row o-homeSection">
                <div className="col-12 a-homeSectionTitle">All New Release</div>
                { recentAlbums && recentAlbums.map((data, index) => 
                    <Link to={`/album/${data.id}`} className="col-4 o-releaseCard" key={index}>
                        <div className="m-releaseCard">
                            <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">{data.acf.title}</span>
                            <span className="a-albumArtistHome">{data.acf.artist}</span>
                        </div>
                    </Link>
                )}
                

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-12 a-homeSectionTitle">Top Releases</div>

                { topAlbums && topAlbums.map((data, index) => 
                    <Link to={`/album/${data.id}`} className="col-4 o-releaseCard" key={index}>
                        <div className="m-releaseCard">
                            <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">{data.acf.title}</span>
                            <span className="a-albumArtistHome">{data.acf.artist}</span>
                        </div>
                    </Link>
                )}
                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
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

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>
            </div>



            <Player/>
        </div>
    )
}

export default Home;

