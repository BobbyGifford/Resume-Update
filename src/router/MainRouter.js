import React from 'react';
import '../App.css';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Home from '../components/Home'
import Header from '../components/Header'
import TechList from '../components/TechList/TechList'
import ProjectList from '../components/ProjectList'


export const history = createHistory();


const MainRouter = () => {
    return (
        <Router history={history}>
            <div>
                <div style={{minHeight: '100vh'}}>
                    <Header/>
                    <Home/>
                </div>
                <ProjectList/>
                <TechList/>
            </div>
        </Router>
    )
};

export default MainRouter;
