import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            <i className='fa fa-calendar-check-o'></i> TodoApp
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link  className="nav-item nav-link active" to="/todos">Tarefas</Link>
                <Link  className="nav-item nav-link" to="/about">About</Link>
            </div>
        </div>
    </nav>
)