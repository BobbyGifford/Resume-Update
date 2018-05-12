import React from 'react'
import featureImage from '../../images/oauth_1.png'

const OAuthApp = () => {
    return (
        <div className="card col-md-5 mr-3 offset-md-1 mt-3" style={{width: "18rem"}}>
            <a href={"https://arcane-sea-28401.herokuapp.com/"}><img className="card-img-top" src={featureImage} alt="Epixego"/></a>

            <div className="card-body">
                <h4 className="card-title">OAuth Skeleton
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
                            <span className="badge badge-success ml-2">Node</span>
                            <span className="badge ml-2"
                                  style={{backgroundColor: "purple", color: 'white'}}>Bootstrap</span>
                            <span className="badge ml-2"
                                  style={{backgroundColor: "#ed6023", color: 'white'}}>OAuth 2.0</span>
                            <span className="badge ml-2"
                                  style={{backgroundColor: "#4968AF", color: 'white'}}>AWS</span>
                            <span className="badge badge-primary ml-2">Heroku</span>

                        </h5>

                    </div>
                    <div className={"text-center mt-2"}>
                        <a href={"https://arcane-sea-28401.herokuapp.com/"} className={"btn btn-info"}
                           style={{color: "white"}}>View</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OAuthApp;