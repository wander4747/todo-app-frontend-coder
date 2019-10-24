import React from 'react';
import './App.css';
import Routes from '../main/routes';
import Menu from '../template/menu';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Menu />
                <Routes />
            </BrowserRouter>

        </div>
    );
}

export default App;
