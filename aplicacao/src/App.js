import React, { Component } from 'react';

import './styles.css';
import Main from './pages/main';

import Header from './components/Header';
import NavBar from './components/NavBar';

const App = () => (
    <div className="App">
        <Header />
        <Main />
        <NavBar />
    </div>
);


export default App;