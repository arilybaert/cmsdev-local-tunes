import React, {useState, useEffect} from 'react';


import { HomeContent, SearchContent, CollectionContent, PlaylistContent, ArtistContent, GenreContent, SettingsContent} from '../header'
import * as Routes from '../../routes';


const HeaderContainer = () => {

    // eslint-disable-next-line
    const [header, setHeader] = useState(window.location.pathname);

    useEffect(() => {
        // console.log(header);
    }, [header]);
    return (
        <div>
            {header && header === Routes.HOME ? <HomeContent/> : ''}
            {header && header === Routes.DISCOVER ? <SearchContent/> : ''}
            {header && header === Routes.COLLECTION ? <CollectionContent/> : ''}
            {header && header.includes("playlist") ? <PlaylistContent/> : ''}
            {header && header.includes("artist") ? <ArtistContent/> : ''}
            {header && header.includes("genre") ? <GenreContent/> : ''}
            {header && header === Routes.SETTINGS ? <SettingsContent/> : ''}
        </div>
    )
}

export default HeaderContainer;