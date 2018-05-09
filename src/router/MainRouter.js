import React from 'react';
import '../App.css';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Home from '../components/Home'
import Header from '../components/Header'
import TechList from '../components/TechList/TechList'

export const history = createHistory();


const MainRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Header />
                <Home />
                <TechList/>
                {/*<Route exact path='/' component={Home} />*/}
            </div>
        </Router>
    )
}

export default MainRouter;
