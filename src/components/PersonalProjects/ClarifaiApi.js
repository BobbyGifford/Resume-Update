import React from 'react'
import featureImage from "../../images/mt-fuji.jpg"

const ClarifaiApi = () => {
    return (
        <div className="card col-md-5 mx-auto" style={{width: "18rem"}}>
            <img className="card-img-top" src={featureImage} alt="Clarifai"/>

            <div className="card-body">
                <h4 className="card-title">Clarifai NSFW Detection
                </h4>


                <div className="card-text">
                    A site that utilizes an experimental machine learning API that can detect detect naughtiness level
                    of an image. Currently under construction.
                    <br/>
                    <br/>

                    <div className="card-header">
                        <h6>Notable Tech Used:
                            <span className="badge badge-info ml-2">React</span>
                            <span className="badge badge-info ml-2">Clarifai API</span>

                            <span className="badge badge-info ml-2">Bootstrap</span>
                            <span className="badge badge-info ml-2">AWS</span>
                        </h6>

                    </div>
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