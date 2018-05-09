import React from 'react'

import htmlImage from '../../images/html_logo_1.png'
import cssImage from '../../images/css_logo_1.png'
import javascriptImage from '../../images/javascript_logo_1.png'
import reactImage from "../../images/react_logo_1.png"

import "./TechList.css"

const TechList = () => {
    let imagesHolder = [htmlImage, cssImage, javascriptImage, reactImage];
    return (
        <div>
            <div className="container">
                <h3 className="my-5 offset-3">These are the languages I know</h3>
                <div className="row">
                    {
                        imagesHolder.map(image => {
                            return (
                                <div className="col-lg-3 col-md-4">
                                    <img className="language-logo" src={image} alt="htmllogo"/>
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
