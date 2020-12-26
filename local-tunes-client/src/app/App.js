import React from'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import * as Routes from './routes'

import {
    Collection,
    Home,
    Login,
    Register,
    Search
} from './pages';
import './styles/App.scss';

function App () {

    return (
        <div className="container-fluid">
            <Router>
                <Switch>
                    <Route exact path={Routes.HOMESHORT}>
                        <Redirect to={Routes.HOME} />
                    </Route>
                    <Route exact path={Routes.LOGIN} component={Login}/>
                    <Route exact path={Routes.REGISTER} component={Register}/>
                    
                    <Route exact path={Routes.HOME} component={Home}/>
                    <Route exact path={Routes.SEARCH} component={Search}/>
                    <Route exact path={Routes.COLLECTION} component={Collection}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;