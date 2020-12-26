import React from 'react';
import {Link} from 'react-router-dom';

import * as Routes from '../../routes';

const CollectionContent = () => {
    // let { type } = useParams();
    // console.log(type);

    return (
        <div className="row o-homeHeader">
                <div className="col-12 m-searchTitle">
                    <h2>Library</h2>
                </div>
                <div className="col-12 o-collectionNav">
                    <Link to={`${Routes.COLLECTION}/playlist`} className="a-collectionLink">Playlists</Link>
                    <Link to={Routes.ARTISTS} className="a-collectionLink">Artists</Link>
                    <Link to={Routes.SONGS} className="a-collectionLink">Songs</Link>
                </div>
            </div>
    )
};

export default CollectionContent;