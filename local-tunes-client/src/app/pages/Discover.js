import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import {Player, HeaderContainer, LocalTunesContext} from '../components';
const Discover = () => {
    
    const { searchTerm } = useContext(LocalTunesContext);
    const [ searchState, setSearchState ] = useState(false);
    const [ genres, setGenres ] = useState();

    useEffect(() => {
        if(searchTerm !== undefined  ) {
            console.log('length: ' + searchTerm.length);
            if(searchTerm.length > 0){
                setSearchState(true);
            } else {
                setSearchState(false);
            }
        } else {
            setSearchState(false);
        }
        // console.log(searchTerm.length);
    },[searchTerm]);


    const apiUrl = `${process.env.REACT_APP_URL}/wp-json/wp/v2/genres/`;

    const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: { 
            // 'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    };
    
    const fetchGenres = () => {
        axios.get(
            apiUrl,
            config,
        ).then((res) => {
            console.log(res.data);
            setGenres(res.data);
        }).catch((err) => {
            console.log(err.response.data.message);
        });
    };

    useEffect (() => {
        fetchGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return (
        <div>
            <HeaderContainer/>
            <Player/>
            {searchState ? 
                <div className="o-searchResults row">
                    <div className="col-12 m-resultsTitle">
                        Songs
                    </div>
                    <div className="col-12">
                        <div className="row o-songResult">
                            <div className="col-2">
                                <img alt="cover-img" title="cover-imn" src="https://img.discogs.com/PIulSZS_u-46lzW--booobYYKtY=/fit-in/598x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-667897-1434632375-4358.jpeg.jpg" className="a-searchResultSongImg"></img>
                            </div>
                            <div className="col-7 m-resultSongInfo">
                                <span className="a-resultSongTitle">Under the bridge</span>
                                <span className="a-resultSongArtist">Red Hot Chili Peppers</span>
                            </div>
                            <div className="col-3 m-searchresultIcon">
                                <FontAwesomeIcon icon={faHeart} className="a-DiscoverHeart" id="search"/>
                            </div>
                        </div>

                        <div className="row o-songResult">
                            <div className="col-2">
                                <img alt="cover-img" title="cover-imn" src="https://img.discogs.com/PIulSZS_u-46lzW--booobYYKtY=/fit-in/598x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-667897-1434632375-4358.jpeg.jpg" className="a-searchResultSongImg"></img>
                            </div>
                            <div className="col-7 m-resultSongInfo">
                                <span className="a-resultSongTitle">Under the bridge</span>
                                <span className="a-resultSongArtist">Red Hot Chili Peppers</span>
                            </div>
                            <div className="col-3 m-searchresultIcon">
                                <FontAwesomeIcon icon={faHeart} className="a-DiscoverHeart" id="search"/>
                            </div>
                        </div>


                    </div>

                    <div className="col-12 m-resultsTitle">
                        Artist
                    </div>
                    <div className="col-12">
                        <div className="row o-songResult">
                            <div className="col-2">
                                <img alt="cover-img" title="cover-imn" src="https://www.metalzone.fr/wp-content/uploads/2019/09/Red-Hot-Chili-Peppers-1200x727.jpg" className="a-searchResultArtist"></img>
                            </div>
                            <div className="col-7">
                                <span>Red Hot Chili Peppers</span>
                            </div>
                            <div className="col-3 m-searchresultIcon">
                                <FontAwesomeIcon icon={faHeart} className="a-DiscoverHeart" id="search"/>
                            </div>
                        </div>

                        <div className="row o-songResult">
                            <div className="col-2">
                                <img alt="cover-img" title="cover-imn" src="https://www.metalzone.fr/wp-content/uploads/2019/09/Red-Hot-Chili-Peppers-1200x727.jpg" className="a-searchResultArtist"></img>
                            </div>
                            <div className="col-7">
                                <span>Red Hot Chili Peppers</span>
                            </div>
                            <div className="col-3 m-searchresultIcon">
                                <FontAwesomeIcon icon={faHeart} className="a-DiscoverHeart" id="search"/>
                            </div>
                        </div>
                    </div>
                </div>

                :
            <div className="o-masonry">
                <Link to={`/discover/genre/${genres && genres[0].slug}`} className="o-mansonry-1 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[0].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[1].slug}`} className="o-mansonry-2 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[1].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[2].slug}`} className="o-mansonry-3 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[2].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[3].slug}`} className="o-mansonry-4 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[3].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[4].slug}`} className="o-mansonry-5 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[4].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[5].slug}`} className="o-mansonry-6 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[5].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[6].slug}`} className="o-mansonry-7 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[6].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[7].slug}`} className="o-mansonry-8 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[7].title.rendered}</p>
                    </div>
                </Link>
                {/* <div className="o-mansonry-9 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Punk</p>
                    </div>
                </div> */}
            </div>
            }

        </div>
    )
}

export default Discover;