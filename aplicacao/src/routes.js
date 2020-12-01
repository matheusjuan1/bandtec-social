import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
// import PrivateRoute from './components/Helper/PrivateRoute';
import Comunidade from './pages/Comunidade';
import UserProfile from './pages/UserProfile'
import NotFound from './components/Helper/NotFound';



function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/perfil" component={Profile} />
                <Route exact path="/comunidade" component={Comunidade} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/perfil/:id" component={UserProfile} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter> 
    )
}

export default Routes;