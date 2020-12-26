import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as Routes from '../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faCompactDisc } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
    // eslint-disable-next-line
    const [header, setHeader] = useState(window.location.pathname.substring(1));


    // Give active navbar items a specific style
    useEffect(() => {
        // document.getElementById("home").classList.remove = "a-activeNav"; 
        // document.getElementById("search").classList.remove = "a-activeNav"; 
        // document.getElementById("collection").classList.remove = "a-activeNav"; 
        console.log(header);
        document.getElementById(header).classList.add("a-activeNav");
    },[header]);



    return (
        <div className="o-navigationBottom">
            <div className="row m-navigationBottom">
                <Link to={Routes.HOME} className="col-4 a-navigationBottom" >
                    <FontAwesomeIcon icon={faHome} className="a-navLogo" id="home"/>
                </Link>
                <Link to={Routes.DISCOVER} className="col-4 a-navigationBottom" >
                    <FontAwesomeIcon icon={faSearch} className="a-navLogo" id="discover"/>
                </Link>
                <Link to={Routes.COLLECTION} className="col-4 a-navigationBottom" >
                    <FontAwesomeIcon icon={faCompactDisc} className="a-navLogo" id="collection"/>
                </Link>
            </div>
        </div>
    )
};

export default Navigation;