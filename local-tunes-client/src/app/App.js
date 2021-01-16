import React, { useEffect, useState } from'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import * as Routes from './routes'
import { LocalTunesContextProvider, Player } from './components';
import {
    Collection,
    Home,
    Login,
    Register,
    Discover,
    Playlist,
    Artist,
    Genre,
    Settings,
    Upload,
    ChangePassword,
    CreatePlaylist,
    Album,
} from './pages';
import './styles/App.scss';


function App () {
    // const [login, setLogin] = useState();

    // useEffect(() => {
    //     const localLogin = localStorage.getItem('login');
    //     if(localLogin) {
    //         setLogin(localLogin);
    //     };

    // },[login]);
    

    return (
        <div className="container-fluid o-app">
            <LocalTunesContextProvider>
                <CookiesProvider>

                    <Router>
                        
                        <Switch>
                            <Route exact path={Routes.LOGIN} component={Login}/>
                            <Route exact path={Routes.REGISTER} component={Register}/>

                            <Route exact path={Routes.HOMESHORT}>
                                <Redirect to={Routes.HOME} />
                            </Route>
                            <Route exact path={Routes.HOME} component={Home}/>
                            <Route exact path={Routes.DISCOVER} component={Discover}/>
                            <Route exact path={Routes.COLLECTION} component={Collection}/>

                            <Route exact path={Routes.PLAYLIST} component={Playlist}/>
                            <Route exact path={Routes.CREATEPLAYLIST} component={CreatePlaylist}/>

                            <Route exact path={Routes.ARTIST} component={Artist}/>
                            <Route exact path={Routes.GENRE} component={Genre}/>
                            <Route exact path={Routes.ALBUM} component={Album}/>

                            <Route exact path={Routes.SETTINGS} component={Settings}/>
                            <Route exact path={Routes.UPLOAD} component={Upload}/>
                            <Route exact path={Routes.CHANGEPASS} component={ChangePassword}/>
                        </Switch>

                    </Router>
                    <Player/>
                </CookiesProvider>,

            </LocalTunesContextProvider>
        </div>
    )
}

export default App;