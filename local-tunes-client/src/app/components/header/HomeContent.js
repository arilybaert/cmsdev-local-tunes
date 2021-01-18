import React, { useContext  } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import * as Routes from '../../routes';
import { LocalTunesContext } from '../context';

const HomeContent = () => {
    const { city, value, setValue } = useContext(LocalTunesContext);
    const handleDistance = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
            <div className="row o-homeHeader">
                <div className="col-4"></div>
                <div className="col-4 m-Location">
                    <span className="a-locationTitle">Location</span>
                    <span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="a-locationLogo"/>
                    </span>
                    <span className="a-locationCurrent">{city && city}</span>
                </div>
                <Link to={Routes.SETTINGS} className="col-4 m-settings">
                    <FontAwesomeIcon icon={faCog} className="a-settingsLogo"/>
                </Link>
                <form className="col-12 m-slider" onSubmit={handleSubmit}>
                    <input type="range" min="1" max="100" value={value} className="a-slider" id="myRange" onChange={handleDistance}></input>    
                <span id="demo"></span>
                </form>
            </div>
    )
}

export default HomeContent;