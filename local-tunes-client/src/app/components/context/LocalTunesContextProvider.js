import React, {createContext, useState } from 'react';

const LocalTunesContext = createContext();

const LocalTunesContextProvider = ({children}) => {

    const [ collectionHeader, setCollectionHeader ] = useState("playlists");

    const [ playlistImage, setPlaylistImage ] = useState();
    const [ playlistTitle, setPlaylistTitle ] = useState();

    const [ artistImage, setArtistImage ] = useState();
    const [ artistTitle, setArtistTitle ] = useState();

    const [popupState, setPopupState] = useState(false);

    return (
        <LocalTunesContext.Provider value={{collectionHeader, setCollectionHeader, popupState, setPopupState, playlistImage, setPlaylistImage, playlistTitle, setPlaylistTitle, artistImage, setArtistImage, artistTitle, setArtistTitle}}>
            {children}
        </LocalTunesContext.Provider>
    )
};

export {
    LocalTunesContext,
    LocalTunesContextProvider
}