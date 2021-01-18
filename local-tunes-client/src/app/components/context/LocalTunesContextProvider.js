import React, {createContext, useState } from 'react';
import { useCookies } from "react-cookie";

import * as jwt  from "jsonwebtoken";
const LocalTunesContext = createContext();

const LocalTunesContextProvider = ({children}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "limit"]);
    const [ collectionHeader, setCollectionHeader ] = useState("playlists");

    const [ audioSrc, setAudioSrc ] = useState();
    const [ playlistImage, setPlaylistImage ] = useState();
    const [ playlistTitle, setPlaylistTitle ] = useState();

    const [ artistImage, setArtistImage ] = useState();
    const [ artistTitle, setArtistTitle ] = useState();
    const [ artistId, setArtistId ] = useState();
    const [ albumImage, setAlbumImage ] = useState();
    const [ albumTitle, setAlbumTitle ] = useState();

    const [ genreTitle, setGenreTitle ] = useState();

    const [popupState, setPopupState] = useState(false);

    const [discoverState, setDiscoverState] = useState("mostListened");
    const [searchTerm, setSearchTerm] = useState();

    const [ login, setLogin ] = useState();
    const [ uid, setUid ] = useState();

    const [ lat, setLat ] = useState();
    const [ long, setLong ] = useState();
    const [ city, setCity ] = useState();

    const [ playerSong, setPlayerSong ] = useState();
    const [ playerArtist, setPlayerArtist ] = useState();
    const [ playerCover, setPlayerCover ] = useState('');
    const [ playerStatus, setPlayerStatus ] = useState(false);

    const [ followedArtists, setFollowedArtists ] = useState([]);
    const [ artistLikeId, setArtistLikeId ] = useState();

    const [ likedArtistsId, setLikedArtistsId ] = useState();


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

      const [ value, setValue ] = useState(50);

      const verifyUser = () => {

        const token = cookies.login
        try {
          let value = '';
            const decoded = jwt.verify(token, 'Vd9qWVP<M1 -N+#0U]By3wor#>2mJae|JE)ofqL48p-@K.k3c5hQ#ld`jf$0D-ng');
            if(Date.now() <= decoded.exp * 1000) {
              setUid(decoded.data.user.id);
                value =  true;
            }
            return value;

        } catch {
            return false;
        }

   };
    return (
        <LocalTunesContext.Provider value={{collectionHeader, setCollectionHeader, popupState, setPopupState, playlistImage, setPlaylistImage, playlistTitle, setPlaylistTitle, artistImage, setArtistImage, artistTitle, setArtistTitle, genreTitle, setGenreTitle, discoverState, setDiscoverState, searchTerm, setSearchTerm, login, setLogin, albumImage, albumTitle, setAlbumTitle, setAlbumImage, audioSrc, setAudioSrc, lat, setLat, long, setLong, city, setCity, getDistance, playerSong, setPlayerSong, playerArtist, setPlayerArtist, playerCover, setPlayerCover, playerStatus, setPlayerStatus, value, setValue, verifyUser, cookies, setCookie, removeCookie, setUid, uid, artistId, setArtistId, followedArtists, setFollowedArtists, artistLikeId, setArtistLikeId,likedArtistsId, setLikedArtistsId }}>

            {children}

        </LocalTunesContext.Provider>
    )
};

export {
    LocalTunesContext,
    LocalTunesContextProvider
}