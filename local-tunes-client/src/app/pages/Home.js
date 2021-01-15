import React, { useContext, useEffect, useState } from 'react';
import { HeaderContainer, LocalTunesContext, Navigation} from '../components';
import axios from 'axios';
import { Link } from "react-router-dom";
import openGeocoder from 'node-open-geocoder';





const Home = () => {

    const { setCity, setLat, setLong, getDistance } = useContext(LocalTunesContext)
    const [recentAlbums, setRecentAlbums] = useState('');
    const [topAlbums, setTopAlbums] = useState('');
    const [ finalAlbums, setRecentFinalAlbums] = useState([]);
    /*
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
    */
    const apiUrlRecentAlbums = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums?order=desc&per_page=6`;
    const apiUrlTopAlbums = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums?filter[orderby]=likes&order=desc`;
    // const apiUrlTopAlbums = `${process.env.REACT_APP_URL}/wp-json/wp/v2/media/filter[orderby]=likes&order=desc`;

    const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: { 
            // 'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };

    useEffect(  () => {

        /*
        *** promise logic thanks to kobe deville <3333333
        */ 


        const p = new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition( function(position) {
                openGeocoder()
                    .reverse(position.coords.longitude, position.coords.latitude)
                    .end((err, res) => {
                        setCity(res.address.village);
                    })
                    recentAlbums && recentAlbums.forEach(album => {
                    album["distance"] = getDistance(position.coords.latitude, position.coords.longitude, album.acf.latitude, album.acf.longitude)
                });
                resolve();
            })
        });
        p.then(() => {
            recentAlbums && recentAlbums.sort( function (a, b) {
                return a.distance - b.distance;
            });
            if(recentAlbums.length > 0) {
                setRecentFinalAlbums(recentAlbums); 
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[recentAlbums]);






    useEffect(()=> {
        // console.log(recentAlbums);
    }, [recentAlbums]);


    const fetchRecentAlbums = () => {
        axios.get(
            apiUrlRecentAlbums,
            config,
        ).then( (res) => {

            setRecentAlbums(res.data);
            axios.get()
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
        // fetchTopAlbums();
        fetchRecentAlbums();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);


    return (
        <div>
            <HeaderContainer/>

            <div className="row o-homeSection">
                <div className="col-12 a-homeSectionTitle">All New Release</div>
                { finalAlbums && finalAlbums.map((data, index) => 
                    <Link to={`/album/${data.id}`} className="col-4 col-md-3 o-releaseCard" key={index}>
                        <div className="m-releaseCard">
                            <img src={data.acf.image.guid} alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">{data.acf.title}</span>
                            <span className="a-albumArtistHome">{data.acf.artist.data.display_name}</span>
                        </div>
                    </Link>
                )}
                



                <div className="col-12 a-homeSectionTitle">Top Releases</div>

                { topAlbums && topAlbums.map((data, index) => 
                    <Link to={`/album/${data.id}`} className="col-4 o-releaseCard" key={index}>
                        <div className="m-releaseCard">
                            <img src={data.acf.image.guid} alt="cover-art" title="cover-art" className="a-cardImg"></img>
                            <span className="a-albumTitleHome">{data.acf.title}</span>
                            <span className="a-albumArtistHome">{data.acf.artist.data.display_name}</span>
                        </div>
                    </Link>
                )}
                
            </div>


            <Navigation/>
            {/* <Player/> */}
        </div>
    )
}

export default Home;

