import React from 'react';
import './App.css';
import Routes from '../main/routes';
import Menu from '../template/menu';

function App() {
    return (
        <div className="container">
            <Menu />
            <Routes />
        </div>
    );
}

export default App;
