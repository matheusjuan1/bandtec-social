import React from 'react';
import Routes from './routes';

import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global.js';

import history from './history';


const App = () => (
    <div className="App">
        <GlobalStyle />
        <Router history={history}>
            <Routes />
        </Router>
    </div>
);


export default App;