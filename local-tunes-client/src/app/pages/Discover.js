import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import { HeaderContainer, LocalTunesContext, Navigation} from '../components';
const Discover = () => {
    
    const { searchTerm } = useContext(LocalTunesContext);
    const [ searchState, setSearchState ] = useState(false);
    const [ genres, setGenres ] = useState();
    const [ searchAlbumResults, setSearchAlbumResults ] = useState();
    const [ searchSongResults, setSearchSongResults ] = useState();

    const apiUrlSearch = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums?search=`;
    const apiUrlSearchSong = `${process.env.REACT_APP_URL}/wp-json/wp/v2/media?media_type=audio&search=`;

    const searchSongs = (term) => {
        axios.get(
            apiUrlSearchSong + term,
            config
        ).then((res) => {
            console.log(res);
            setSearchSongResults(res.data);
        })
    }
    const searchAlbums = (term) => {
        axios.get(
            apiUrlSearch + term,
            config
        ).then((res) => {
            setSearchAlbumResults(res.data);
        })
    }
    useEffect(() => {
        if(searchTerm !== undefined  ) {
            if(searchTerm.length > 0){
                setSearchState(true);
                searchAlbums(searchTerm);
                searchSongs(searchTerm);
            } else {
                setSearchState(false);
            }
        } else {
            setSearchState(false);
        }
        // console.log(searchTerm.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Navigation/>
            {searchState ? 
                <div className="o-searchResults row">
                    <div className="col-12 m-resultsTitle">
                        Albums
                    </div>
                    <div className="col-12">

                    {
                        searchAlbumResults && searchAlbumResults.map((data, index) => 
                            <Link to={`/album/${data.id}`} className="row o-songResult" key={index}>
                                <div className="col-2">
                                    <img alt="cover-img" title="cover-imn" src={data.acf.image.guid} className="a-searchResultSongImg"></img>
                                </div>
                                <div className="col-7 m-resultSongInfo">
                                    <span className="a-resultSongTitle">{data.title.rendered}</span>
                                    <span className="a-resultSongArtist">{data.acf.artist.data.display_name}</span>
                                </div>
                                <div className="col-3 m-searchresultIcon">
                                    <FontAwesomeIcon icon={faHeart} className="a-DiscoverHeart" id="search"/>
                                </div>
                            </Link>
                        )}
                        


                    </div>

                    <div className="col-12 m-resultsTitle">
                        Songs
                    </div>
                    <div className="col-12">

                        {
                            searchSongResults && searchSongResults.map((data, index) => 
                                <div className="row o-songResult" key={index}>
                                    <div className="col-2">
                                        <img alt="cover-img" title="cover-imn" src="https://www.metalzone.fr/wp-content/uploads/2019/09/Red-Hot-Chili-Peppers-1200x727.jpg" className="a-searchResultArtist"></img>
                                    </div>
                                    <div className="col-7">
                                        <span>{data.title.rendered}</span>
                                    </div>
                                    <div className="col-3 m-searchresultIcon">
                                        <FontAwesomeIcon icon={faHeart} className="a-DiscoverHeart" id="search"/>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>

                :
            <div className="o-masonry">
                <Link to={`/discover/genre/${genres && genres[0].id}`} className="o-mansonry-1 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[0].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[1].id}`} className="o-mansonry-2 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[1].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[2].id}`} className="o-mansonry-3 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[2].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[3].id}`} className="o-mansonry-4 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[3].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[4].id}`} className="o-mansonry-5 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[4].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[5].id}`} className="o-mansonry-6 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[5].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[6].id}`} className="o-mansonry-7 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">{genres && genres[6].title.rendered}</p>
                    </div>
                </Link>
                <Link to={`/discover/genre/${genres && genres[7].id}`} className="o-mansonry-8 o-masonryCommon">
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