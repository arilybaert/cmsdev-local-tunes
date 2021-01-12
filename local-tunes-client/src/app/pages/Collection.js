import React, {useContext} from 'react';
import { HeaderContainer, PlaylistOverview, LocalTunesContext, ArtistOverview, SongOverview, Navigation} from '../components';

const Collection = () => {

    const { collectionHeader} = useContext(LocalTunesContext);

    return (
        <div>
            <HeaderContainer/>
            {collectionHeader && collectionHeader === "playlists"? <PlaylistOverview/> : ''}
            {collectionHeader && collectionHeader === "artists"? <ArtistOverview/> : ''}
            {collectionHeader && collectionHeader === "songs"? <SongOverview/> : ''}
            <Navigation/>
        </div>
    )
}

export default Collection;