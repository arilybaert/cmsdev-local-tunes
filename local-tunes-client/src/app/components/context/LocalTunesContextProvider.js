import React, {createContext, useState } from 'react';

const LocalTunesContext = createContext();

const LocalTunesContextProvider = ({children}) => {

    const [ collectionHeader, setCollectionHeader ] = useState("playlists");

    const [ audioSrc, setAudioSrc ] = useState();
    const [ playlistImage, setPlaylistImage ] = useState();
    const [ playlistTitle, setPlaylistTitle ] = useState();

    const [ artistImage, setArtistImage ] = useState();
    const [ artistTitle, setArtistTitle ] = useState();

    const [ albumImage, setAlbumImage ] = useState();
    const [ albumTitle, setAlbumTitle ] = useState();

    const [ genreTitle, setGenreTitle ] = useState();

    const [popupState, setPopupState] = useState(false);

    const [discoverState, setDiscoverState] = useState("mostListened");
    const [searchTerm, setSearchTerm] = useState();

    const [ login, setLogin ] = useState();

    const [ lat, setLat ] = useState();
    const [ long, setLong ] = useState();
    const [ city, setCity ] = useState();

    const deg2rad = (deg)  => {
        return deg * (Math.PI/180)
      }
    const getDistance = (lat1,lon1,lat2,lon2) => {
        let R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2-lat1);  // deg2rad below
        let dLon = deg2rad(lon2-lon1); 
        let a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        let d = R * c; // Distance in km
        return d;
      };

      
    return (
        <LocalTunesContext.Provider value={{collectionHeader, setCollectionHeader, popupState, setPopupState, playlistImage, setPlaylistImage, playlistTitle, setPlaylistTitle, artistImage, setArtistImage, artistTitle, setArtistTitle, genreTitle, setGenreTitle, discoverState, setDiscoverState, searchTerm, setSearchTerm, login, setLogin, albumImage, albumTitle, setAlbumTitle, setAlbumImage, audioSrc, setAudioSrc, lat, setLat, long, setLong, city, setCity, getDistance }}>

            {children}

        </LocalTunesContext.Provider>
    )
};

export {
    LocalTunesContext,
    LocalTunesContextProvider
}