import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Profile from './pages/Profile';




function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/perfil" component={Profile} />
                <Route exact path="/cadastro" component={Main} />
                <Route exact path="/login" component={Main} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;