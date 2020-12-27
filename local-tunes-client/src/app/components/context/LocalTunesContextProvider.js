import React, {createContext, useState } from 'react';

const LocalTunesContext = createContext();

const LocalTunesContextProvider = ({children}) => {

    const [ collectionHeader, setCollectionHeader ] = useState("playlists");
    const [popupState, setPopupState] = useState(false);

    return (
        <LocalTunesContext.Provider value={{collectionHeader, setCollectionHeader, popupState, setPopupState}}>
            {children}
        </LocalTunesContext.Provider>
    )
};

export {
    LocalTunesContext,
    LocalTunesContextProvider
}