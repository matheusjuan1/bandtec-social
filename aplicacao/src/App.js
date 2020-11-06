import React, { Component } from 'react';
import Routes from './routes';

import { Router } from 'react-router-dom';

import './styles.css';

import history from './history';


const App = () => (
    <div className="App">
        <Router history={history}>
            <Routes />
        </Router>
    </div>
);


export default App;