import React from 'react'

import htmlImage from '../../images/html_logo_1.png'
import cssImage from '../../images/css_logo_1.png'
import javascriptImage from '../../images/javascript_logo_1.png'
import reactImage from "../../images/react_logo_1.png"
import nodeImage from "../../images/node_logo_1.png"

import "./TechList.css"

const TechList = () => {

    let languagesHolder = [
        {
            src: htmlImage,
            label: "HTML"
        },

        {
            src: javascriptImage,
            label: "JavaScript"
        },

        {
            src: cssImage,
            label: "CSS"
        },

    ];

    let frameworkHolder = [
        {
            src: reactImage,
            label: "React"
        },

        {
            src: nodeImage,
            label: "Node"
        }
    ];

    return (
        <div>
            <div className="container">
                <h3 className="my-5 text-center">This is the tech stack I use most often</h3>

                <div className="row">
                    {
                        languagesHolder.map(image => {
                            return (
                                <div className="card col-md-4 mx-auto" style={{maxWidth: "18rem"}}>
                                    {image.label === "JavaScript" ? <h4 className="card-title">JavaScript</h4> : null}
                                    <img className="card-img-top" src={image.src} alt={image.label}
                                         style={{maxHeight: "18rem"}}/>
                                </div>
                            )
                        })
                    }
                </div>


                <div className="row mt-5">
                    {
                        frameworkHolder.map(image => {
                            return (
                                <div className="card col-md-3 mx-auto" style={{maxWidth: "25rem"}}>
                                    {image.label === "React" ? <h4 className="card-title text-center">React</h4> : null}
                                    <img className="card-img-top" src={image.src} alt={image.label} />
                                </div>

                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
};

export default TechList
