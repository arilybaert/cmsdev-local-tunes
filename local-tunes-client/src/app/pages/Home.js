import React from 'react';
import {Player} from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    // var slider = document.getElementById("myRange");
    // var output = document.getElementById("demo");
    // output.innerHTML = slider.value; // Display the default slider value
    
    // // Update the current slider value (each time you drag the slider handle)
    // slider.oninput = function() {
    //   output.innerHTML = this.value;
    // }
    return (
        <div>
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

            <div className="row o-homeSection">
                <div className="col-12 a-homeSectionTitle">All New Release</div>
                
                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-12 a-homeSectionTitle">Top Releases</div>
                
                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" class="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>
            </div>



            <Player/>
        </div>
    )
}

export default Home;

