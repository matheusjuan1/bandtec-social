import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';



function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Main} />
                <PrivateRoute exact path="/perfil" component={Profile} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/login/" component={Login} />
            </Switch>
        </BrowserRouter> 
    )
}

export default Routes;