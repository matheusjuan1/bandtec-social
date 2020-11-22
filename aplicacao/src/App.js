import React from 'react';
import Routes from './routes';

import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global.js';

import history from './history';
import Header from './components/Header/Header';
import { UserStorage } from './UserContext';



const App = () => (
    <div className="App">
        <GlobalStyle />
        <UserStorage>
            <Router history={history}>
                <Header />
                <Routes />
            </Router>
        </UserStorage>
    </div>
);


export default App;