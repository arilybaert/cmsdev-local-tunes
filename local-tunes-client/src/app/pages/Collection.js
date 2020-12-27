import React, {useContext} from 'react';
import {Player, HeaderContainer, PlaylistOverview, LocalTunesContext, ArtistOverview, SongOverview} from '../components';

const Collection = () => {

    const { collectionHeader} = useContext(LocalTunesContext);

    return (
        <div>
            <HeaderContainer/>
            {collectionHeader && collectionHeader === "playlists"? <PlaylistOverview/> : ''}
            {collectionHeader && collectionHeader === "artists"? <ArtistOverview/> : ''}
            {collectionHeader && collectionHeader === "songs"? <SongOverview/> : ''}
            <Player/>
        </div>
    )
}

export default Collection;