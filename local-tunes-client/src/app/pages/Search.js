import React from 'react';
import {Player, HeaderContainer} from '../components';
const Search = () => {

    return (
        <div>
            <HeaderContainer/>
            <Player/>
            <div className="o-masonry">
                <div className="o-mansonry-1 o-masonryCommon">
                    <div className="m-masonry">
                        <p className="a-masonry">Indie</p>
                    </div>
                </div>
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

        </div>
    )
}

export default Search;