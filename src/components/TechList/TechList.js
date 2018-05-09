import React from 'react'

import htmlImage from '../../images/html_logo_1.png'
import cssImage from '../../images/css_logo_1.png'
import javascriptImage from '../../images/javascript_logo_1.png'
import reactImage from "../../images/react_logo_1.png"
import nodeImage from "../../images/node_logo_1.png"

import "./TechList.css"

const TechList = () => {

    let languagesHolder = [
        {src: htmlImage,
        label: "HTML"},

        {src: cssImage,
        label: "CSS"},

        {src: javascriptImage,
        label: "JavaScript"}
    ];

    let frameworkHolder = [
        {src: reactImage,
        label: "React"},

        {src: nodeImage,
        label: "Node"}
    ];

    return (
        <div>
            <div className="container">
                <h3 className="my-5 offset-3">These are the languages I know</h3>
                <div className="row">

                    {
                        languagesHolder.map(image => {
                            return (
                                <div className="col-md-3 mx-auto">
                                    {image.label === "JavaScript" ? <h4>javascript</h4> : null}
                                    <img className="language-logo" src={image.src} alt={image.label}/>
                                </div>
                            )
                        })
                    }
                </div>


                <h3 className="mt-3 offset-3">These are the frameworks I know</h3>
                <div className="row mt-5">

                    {
                        frameworkHolder.map(image => {
                            return (
                                <div className="col-md-6 mx-auto">
                                    <img className='language-logo' src={image.src} alt={image.label}/>
                                    {image.label === "React" ? <h4 className="offset-3">React</h4> : null}
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
