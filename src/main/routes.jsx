import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom";

import Todo from '../todo/todo'
import About from '../about/about'

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default props => (
    <Router >
        <Switch>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </Switch>
        
    </Router>
)