import React from 'react';
import '../App.css';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Home from '../components/Home'
import Header from '../components/Header'
import TechList from '../components/TechList/TechList'
import ProjectList from '../components/ProjectList'
import ProfessionalProjects from "../components/ProfessionalProjects/ProfessionalProjects"
import PersonalProjects from "../components/PersonalProjects/PersonalProjects"


export const history = createHistory();


const MainRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Header/>
                <Home/>
                <TechList/>
                <ProjectList/>
                {/*<div className="container">*/}
                    {/*<Route exact path='/' component={ProfessionalProjects}/>*/}
                    {/*<Route path='/professional' component={ProfessionalProjects}/>*/}
                    {/*<Route path="/personal" component={PersonalProjects}/>*/}
                {/*</div>*/}
            </div>
        </Router>
    )
};

export default MainRouter;
