import React from 'react';
import '../App.css';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Home from '../components/Home'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import Nav from "../components/Nav/Nav"
import "./MainRouter.css"


export const history = createHistory();


const MainRouter = () => {
    return (
        <Router history={history}>
            <div>
                <div className="d-none d-md-block">
                    <Nav/>
                </div>

                <Header/>
                <div className="d-none d-md-block">
                    <Home/>
                </div>
                <div id="projectlist" className="projects" style={{padding: "5vh 0 5vh 0"}}>
                    <ProjectList/>
                </div>
            </div>
        </Router>
    )
};

export default MainRouter;
