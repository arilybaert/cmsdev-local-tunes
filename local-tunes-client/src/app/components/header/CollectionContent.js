import React, { useContext, useEffect } from 'react';


import { LocalTunesContext } from '../../components';

const CollectionContent = () => {
    
    const { collectionHeader, setCollectionHeader} = useContext(LocalTunesContext);
    // Give active navbar items a specific style
    const handleCollectionNav = (nav) => {

        setCollectionHeader(nav);
    }
    useEffect(() => {
        document.getElementById("playlists").classList.remove("a-activeCollectionLink");
        document.getElementById("artists").classList.remove("a-activeCollectionLink");
        document.getElementById("songs").classList.remove("a-activeCollectionLink");
        document.getElementById(collectionHeader).classList.add("a-activeCollectionLink");
    },[collectionHeader]);
    return (
        <div className="row o-homeHeader">
                <div className="col-12 m-searchTitle">
                    <h2>Library</h2>
                </div>
                <div className="col-12 o-collectionNav">
                    <span className="a-collectionLink" id="playlists" onClick={()=> handleCollectionNav("playlists")}>Playlists</span>
                    <span className="a-collectionLink" id="artists" onClick={()=> handleCollectionNav("artists")}>Artists</span>
                    <span className="a-collectionLink" id="songs" onClick={()=> handleCollectionNav("songs")}>Songs</span>
                </div>
            </div>
    )
};

export default CollectionContent;