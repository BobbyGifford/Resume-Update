import React from 'react'

import htmlImage from '../../images/html_logo_1.png'
import cssImage from '../../images/css_logo_1.png'
import javascriptImage from '../../images/javascript_logo_1.png'
import reactImage from "../../images/react_logo_1.png"
import nodeImage from "../../images/node_logo_1.png"

import "./TechList.css"

const TechList = () => {
    let languagesHolder = [htmlImage, cssImage, javascriptImage];
    let frameworkHolder = [reactImage, nodeImage]
    return (
        <div>
            <div className="container">
                <h3 className="my-5 offset-3">These are the languages I know</h3>
                <div className="row">

                    {
                        languagesHolder.map(image => {
                            return (
                                <div className="col-md-3 mx-auto">
                                    <img className="language-logo" src={image} alt="htmllogo"/>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="row">

                {
                        frameworkHolder.map(image => {
                            return (
                                <div className="col-md-6 mx-auto">
                                    <img className='language-logo' src={image} alt="frameworks" />
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
