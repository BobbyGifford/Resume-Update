import React from 'react'
import featureImage from '../../images/marvelapi.png'

const MarvelHeroes = () => {
    return (
        <div className="card col-md-5 mb-3 mx-auto" style={{width: "18rem"}}>
            <a href="http://heroes-app.s3-website-us-west-1.amazonaws.com/">
            <img className="card-img-top" src={featureImage} alt="MarvelAPI"/>
            </a>

            <div className="card-body">
                <h4 className="card-title">Marvel Api
                </h4>


                <div className="card-text">
                    A site that takes advantage of the official Marvel API
                    <br/>
                    <br/>

                    <div className="card-header">
                        <h6>Notable Tech Used:
                            <span className="badge badge-info ml-2">React</span>
                            <span className="badge badge-info ml-2">Marvel API</span>

                            <span className="badge badge-info ml-2">Materialize CSS</span>
                            <span className="badge badge-info ml-2">AWS</span>
                        </h6>

                    </div>
                    <div className={"text-center mt-2"}>
                        <a href={"http://heroes-app.s3-website-us-west-1.amazonaws.com/"} className={"btn btn-info"}
                           style={{color: "white"}}>View</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MarvelHeroes;