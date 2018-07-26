import React from 'react'
import featureImage from '../../images/sport_prediction_1.png'


const SportPredictions = () => {
    return (
        <div className="card col-md-5 mt-3 mx-auto" style={{width: "18rem"}}>
            <a href={"http://vue2-sports-predictions.s3-website-us-west-1.amazonaws.com/"}><img className="card-img-top" src={featureImage} alt="Sports"/></a>

            <div className="card-body">
                <h4 className="card-title">Sports Predictions
                </h4>


                <div className="card-text">
                    A fun prediction site where users login and create a sports prediction. Predictions are categorized
                    based on league.
                    <br/>
                    <br/>

                    <div className="card-header">
                        <h6>Notable Tech Used:
                            <span className="badge badge-info ml-2">Vue 2</span>
                            <span className="badge badge-info ml-2">Node</span>
                            <span className="badge badge-info ml-2">Bootstrap</span>
                            <span className="badge badge-info ml-2">AWS</span>
                            <span className="badge badge-info ml-2">Heroku</span>

                        </h6>

                    </div>
                    <div className={"text-center mt-2"}>
                        <a href={"http://vue2-sports-predictions.s3-website-us-west-1.amazonaws.com/"} className={"btn btn-info"}
                           style={{color: "white"}}>View</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SportPredictions;