import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {Player, HeaderContainer, LocalTunesContext} from '../components';
const Discover = () => {
    
    const { searchTerm } = useContext(LocalTunesContext);
    const [ searchState, setSearchState ] = useState(false);

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
                <Link to={"/discover/genre/indie"} className="o-mansonry-1 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Indie</p>
                    </div>
                </Link>
                <div className="o-mansonry-2 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Indie</p>
                    </div>
                </div>
                <div className="o-mansonry-3 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">New Wave</p>
                    </div>
                </div>
                <div className="o-mansonry-4 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Alternative</p>
                    </div>
                </div>
                <div className="o-mansonry-5 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Metal</p>
                    </div>
                </div>
                <div className="o-mansonry-6 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Hip Hop</p>
                    </div>
                </div>
                <div className="o-mansonry-7 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Classic</p>
                    </div>
                </div>
                <div className="o-mansonry-8 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Rock</p>
                    </div>
                </div>
                <div className="o-mansonry-9 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Punk</p>
                    </div>
                </div>
            </div>
            }

        </div>
    )
}

export default Discover;