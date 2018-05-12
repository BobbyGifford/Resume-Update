import React from 'react';
import '../App.css';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Home from '../components/Home'
import Header from '../components/Header'
import TechList from '../components/TechList/TechList'
import ProjectList from '../components/ProjectList'
import Nav from "../components/Nav/Nav"
import "./MainRouter.css"


export const history = createHistory();


const MainRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Nav/>
                <Header/>
                <Home/>
                <div id="projectlist"></div>
                <div className="projects" style={{padding: "5vh 0 5vh 0"}}>
                    <ProjectList/>
                </div>
                <TechList/>

            </div>
        </Router>
    )
};

export default MainRouter;
