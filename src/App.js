import React, {Component} from 'react';
import './App.css';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Home from './components/Home'
import Header from './components/Header'

export const history = createHistory();


class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <Header />
                    <Home />
                </div>
            </Router>
        );
    }
}

export default App;
