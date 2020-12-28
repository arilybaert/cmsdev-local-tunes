import React from'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import * as Routes from './routes'
import { LocalTunesContextProvider } from './components';
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
    ChangePassword
} from './pages';
import './styles/App.scss';

function App () {

    return (
        <div className="container-fluid">
            <LocalTunesContextProvider>

                <Router>
                    <Switch>
                        <Route exact path={Routes.HOMESHORT}>
                            <Redirect to={Routes.HOME} />
                        </Route>
                        <Route exact path={Routes.LOGIN} component={Login}/>
                        <Route exact path={Routes.REGISTER} component={Register}/>
                        
                        <Route exact path={Routes.HOME} component={Home}/>
                        <Route exact path={Routes.DISCOVER} component={Discover}/>
                        <Route exact path={Routes.COLLECTION} component={Collection}/>

                        <Route exact path={Routes.PLAYLIST} component={Playlist}/>
                        <Route exact path={Routes.ARTIST} component={Artist}/>
                        <Route exact path={Routes.GENRE} component={Genre}/>

                        <Route exact path={Routes.SETTINGS} component={Settings}/>
                        <Route exact path={Routes.UPLOAD} component={Upload}/>
                        <Route exact path={Routes.CHANGEPASS} component={ChangePassword}/>
                    </Switch>
                </Router>

            </LocalTunesContextProvider>
        </div>
    )
}

export default App;