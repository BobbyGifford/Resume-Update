import React from 'react'
import GuitarInfo from "./GuitarInfo"
import ClarifaiApi from "./ClarifaiApi"
import OAuthApp from "./OAuthApp"
import SportsPredictions from "./SportsPredictions"
import MarvelHeroes from './Marvel-Heroes'

const PersonalProjects = () => {
    return (
        <div className="container">
            <h3 className={"text-center my-4"}>Personal Projects</h3>
            <div className="row" style={{color: "black"}}>

                <MarvelHeroes/>
                <GuitarInfo/>
                <ClarifaiApi/>
                <OAuthApp/>
                <SportsPredictions/>

            </div>
        </div>
    )
};

export default PersonalProjects;