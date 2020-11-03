import React, { Component } from 'react';
import Routes from './routes';

import './styles.css';

import Header from './components/Header';
import NavBar from './components/NavBar';

const App = () => (
    <div className="App">
        <Header />
            <Routes/>
        <NavBar />
    </div>
);


export default App;