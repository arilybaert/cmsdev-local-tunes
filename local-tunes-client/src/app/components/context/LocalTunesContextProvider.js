import React, {createContext, useState } from 'react';

const LocalTunesContext = createContext();

const LocalTunesContextProvider = ({children}) => {

    const [ collectionHeader, setCollectionHeader ] = useState("playlists");

    return (
        <LocalTunesContext.Provider value={{collectionHeader, setCollectionHeader}}>
            {children}
        </LocalTunesContext.Provider>
    )
};

export {
    LocalTunesContext,
    LocalTunesContextProvider
}