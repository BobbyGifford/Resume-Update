import React from 'react'
import featureImage from "../../images/mt-fuji.jpg"

const ClarifaiApi = () => {
    return (
        <div className="card col-md-5" style={{width: "18rem"}}>
            <img className="card-img-top" src={featureImage} alt="Clarifai"/>

            <div className="card-body">
                <h4 className="card-title">Clarifai NSFW Detection
                </h4>


                <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae sapien at ligula faucibus auctor.
                    Morbi molestie fermentum dapibus. Maecenas leo ligula, tristique sed pellentesque et, auctor nec
                    nulla. Etiam elementum orci et condimentum consequat. Praesent aliquet quam non nibh congue
                    vulputate.
                    <br/>
                    <br/>

                    <div className="card-header">
                        <h5>Notable Tech Used:
                            <span className="badge badge-info ml-2">React</span>
                            <span className="badge badge-warning ml-2">Clarifai API</span>

                            <span className="badge ml-2"
                                  style={{backgroundColor: "purple", color: 'white'}}>Bootstrap</span>
                            <span className="badge ml-2"
                                  style={{backgroundColor: "#4968AF", color: 'white'}}>AWS</span>
                        </h5>

                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Clarifai API</li>
                        <li className="list-group-item">Bootstrap</li>
                        <li className="list-group-item">AWS</li>
                    </ul>
                    <div className={"text-center mt-2"}>
                        <a href={"http://nsfw-detection.s3-website-us-west-1.amazonaws.com/"} className={"btn btn-info"}
                           style={{color: "white"}}>View</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ClarifaiApi;