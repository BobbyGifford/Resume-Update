import React from 'react'
import featureImage from '../../images/ancientarch2.png'

const GuitarInfo = () => {
    return (
        <div className="card col-md-5 mr-3 mb-3 mx-auto" style={{width: "18rem"}}>
            <a href={"https://evening-tundra-10038.herokuapp.com/"}>
                <img className="card-img-top" src={featureImage} alt="Ancient"/></a>

            <div className="card-body">
                <h4 className="card-title">Ancient Architecture
                </h4>


                <div className="card-text">
                <p className="text-danger">This app is hosted on Heroku and may take a few seconds to load. Please be patient.</p>
                    I made both the backend and frontend of this site from scratch. It is one fullstack application that I have been 
                    (and currently am) still working on. I used React, Redux, and Bootstrap for the frontend. The backend uses Node, Express, and Mongo.
                    <br />
                    <br />
                    This site is inspired by ancient structures of unknown construction and origin. I am a 
                    huge fan of Graham Hancock and I wanted to make a site for people who may be fans of him. The purpose 
                    this site is for people to share mysterious locations as well as their personal opinions on them. 
                    <br/>
                    <br/>

                    <div className="card-header">
                        <h6>Notable Tech Used:
                            <span className="badge badge-info ml-2">React</span>
                            <span className="badge badge-info ml-2">Redux</span>
                            <span className="badge badge-info ml-2">Express</span>
                            <span className="badge badge-info ml-2">Mongo</span>
                            <span className="badge badge-info ml-2">Google OAuth</span>
                            <span className="badge badge-info ml-2">Bootstrap</span>
                        </h6>

                    </div>
                    <div className={"text-center mt-2"}>
                        <a href={"https://evening-tundra-10038.herokuapp.com/"} className={"btn btn-info"}
                           style={{color: "white"}}>View</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GuitarInfo;