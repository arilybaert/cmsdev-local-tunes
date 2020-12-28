import React , {useContext, useEffect} from 'react';

import {LocalTunesContext } from '../../components';

const GenreContent = () => {
    const { genreTitle, discoverState, setDiscoverState} = useContext(LocalTunesContext);

    const handleGenreClick = (state) => {
        setDiscoverState(state);
    };

    // useEffect(() => {
    //     console.log(discoverState);
    // },[discoverState]);


    return (
        <div className="o-header row">
        <div className="col-12 m-header m-headerTop">
            <span className="a-headerGenreAccent">{genreTitle && genreTitle.toUpperCase()}</span>
        </div>
        <span className="col-6 m-header" onClick={() => handleGenreClick("mostListened")}>
            <span className="a-subtitleGenre">Most Listened</span>
        </span>
        <span className="col-6 m-header" onClick={() => handleGenreClick("mostRecent")}>
            <span className="a-subtitleGenre">Most Recent</span>
        </span>
</div>
    );
};

export default GenreContent;