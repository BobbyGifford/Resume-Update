import React from 'react'
import GuitarInfo from "./GuitarInfo"
import ClarifaiApi from "./ClarifaiApi"
import OAuthApp from "./OAuthApp"
import SportsPredictions from "./SportsPredictions"

const PersonalProjects = () => {
    return (
        <div>
            <h3 className={"text-center my-4"}>Personal Projects</h3>
            <div className="row" style={{color: "black"}}>

                <GuitarInfo/>
                <ClarifaiApi/>
                <OAuthApp/>
                <SportsPredictions/>

            </div>
        </div>
    )
};

export default PersonalProjects;