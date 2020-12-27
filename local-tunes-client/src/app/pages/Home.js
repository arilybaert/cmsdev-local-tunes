import React from 'react';
import {Player, HeaderContainer} from '../components';



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
            <HeaderContainer/>

            <div className="row o-homeSection">
                <div className="col-12 a-homeSectionTitle">All New Release</div>
                
                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-12 a-homeSectionTitle">Top Releases</div>
                
                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
                        <span className="a-albumTitleHome">Kid A</span>
                        <span className="a-albumArtistHome">Radiohead</span>
                    </div>
                </div>

                <div className="col-4 o-releaseCard">
                    <div className="m-releaseCard">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
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

