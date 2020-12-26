import React, {useContext} from 'react';
import {Player, HeaderContainer, PlaylistOverview, LocalTunesContext, ArtistOverview} from '../components';

const Collection = () => {
    const { collectionHeader, setCollectionHeader} = useContext(LocalTunesContext);

    return (
        <div>
            <HeaderContainer/>
            {collectionHeader && collectionHeader === "playlists"? <PlaylistOverview/> : ''}
            {collectionHeader && collectionHeader === "artists"? <ArtistOverview/> : ''}
            <Player/>
        </div>
    )
}

export default Collection;