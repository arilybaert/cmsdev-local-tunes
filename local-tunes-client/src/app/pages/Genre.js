// import React, { useEffect, useContext } from 'react';
// import {useParams} from 'react-router-dom';
// import {Player, HeaderContainer,LocalTunesContext} from '../components';
// import axios from 'axios';
// import { Link } from "react-router-dom";



// const Genre = () => {
//     const {setGenreTitle, discoverState} = useContext(LocalTunesContext);
//     const {genre} = useParams();
//     const apiUrlTopAlbums = `${process.env.REACT_APP_URL}/wp-json/wp/v2/albums?filter[orderby]=likes&order=desc`;

//     const config = {
//         method: 'GET',
//         mode: 'no-cors',
//         headers: { 
//             // 'Authorization': `Bearer ${localStorage.getItem('login')}`,
//         },
//     };

//     useEffect(() => {
//         console.log(discoverState);
//     },[discoverState]);

//     useEffect(() => {
//         setGenreTitle(genre);
//     });


//     const fetchListens = () => {
//         axios.get(
//             apiUrlTopAlbums,
//             config,
//         ).then((res) => {
//             // console.log(res.data)
//             setTopAlbums(res.data);
//         }).catch((err) => {
//             console.log(err.response.data.message);
//         });
//     }
//     useEffect(() => {
//         fetchRecentAlbums();
//         fetchTopAlbums();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[]);
//     return (
//         <div>
//             <HeaderContainer/>

//             {discoverState === "mostListened" ?

//                 <div className="row o-homeSection">
                    
//                     <div className="col-4 o-releaseCard">
//                         <div className="m-releaseCard">
//                             <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
//                             <span className="a-albumTitleHome">Kid A</span>
//                             <span className="a-albumArtistHome">Radiohead</span>
//                         </div>
//                     </div>

//                     <div className="col-4 o-releaseCard">
//                         <div className="m-releaseCard">
//                             <img src="https://i.redd.it/aayfot0hjwn21.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
//                             <span className="a-albumTitleHome">Kid A</span>
//                             <span className="a-albumArtistHome">Radiohead</span>
//                         </div>
//                     </div> 
//                 </div>
//             : ""}
//             {discoverState === "mostRecent" ?
//                 <div className="row o-homeSection">

//                     <div className="col-4 o-releaseCard">
//                         <div className="m-releaseCard">
//                             <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
//                             <span className="a-albumTitleHome">Kid A</span>
//                             <span className="a-albumArtistHome">Radiohead</span>
//                         </div>
//                     </div>

//                     <div className="col-4 o-releaseCard">
//                         <div className="m-releaseCard">
//                             <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" alt="cover-art" title="cover-art" className="a-cardImg"></img>
//                             <span className="a-albumTitleHome">Kid A</span>
//                             <span className="a-albumArtistHome">Radiohead</span>
//                         </div>
//                     </div>
//                 </div>
//             : ""}
            
            

//             <Player/>
//         </div>
//     )
// }

// export default Genre;