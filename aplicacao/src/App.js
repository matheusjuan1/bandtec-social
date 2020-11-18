import React from 'react';
import Routes from './routes';

import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global.js';

import history from './history';
import { Header } from './components/Header/style';


const App = () => (
    <div className="App">
        <GlobalStyle />
        <Header />
        <Router history={history}>
            <Routes />
        </Router>
    </div>
);


export default App;