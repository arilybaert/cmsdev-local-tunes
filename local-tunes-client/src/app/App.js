import React from'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Routes from './routes'

import {
    Login,
    Register
} from './pages';
import './styles/App.scss';

function App () {

    return (
        <div className="container-fluid">
            <Router>
                <Switch>
                    <Route exact path={Routes.LOGIN} component={Login}/>
                    <Route exact path={Routes.REGISTER} component={Register}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;