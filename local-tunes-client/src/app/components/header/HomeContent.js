import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const HomeContent = () => {

    return (
            <div className="row o-homeHeader">
                <div className="col-4"></div>
                <div className="col-4 m-Location">
                    <span className="a-locationTitle">Location</span>
                    <span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="a-locationLogo"/>
                    </span>
                    <span className="a-locationCurrent">Brussels</span>
                </div>
                <div className="col-4 m-settings">
                    <FontAwesomeIcon icon={faCog} className="a-settingsLogo"/>
                </div>
                <div className="col-12 m-slider">
                <input type="range" min="1" max="100" value="50" className="a-slider" id="myRange"></input>    
                <span id="demo"></span>
                </div>
            </div>
    )
}

export default HomeContent;