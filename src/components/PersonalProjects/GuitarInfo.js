import React from 'react'
import featureImage from '../../images/guitar_info_1.png'

const GuitarInfo = () => {
    return (
        <div className="card col-md-5 mr-3 offset-md-1" style={{width: "18rem"}}>
            <a href={"http://guitar-info.s3-website.us-east-2.amazonaws.com/"}>
                <img className="card-img-top" src={featureImage} alt="Epixego"/></a>

            <div className="card-body">
                <h4 className="card-title">Guitar Info
                </h4>


                <div className="card-text">
                    An education site that describes the main specifications of a guitar. The original purpose was to
                    make obscure technical specifications seem simple to novice guitarists. I am an avid guitarist and
                    love researching specs. Using a guitar that is uncomfortable can ruin guitar playing for a beginner.
                    <br/>
                    <br/>

                    <div className="card-header">
                        <h5>Notable Tech Used:
                            <span className="badge badge-info ml-2">React</span>
                            <span className="badge ml-2"
                                  style={{backgroundColor: "purple", color: 'white'}}>Bootstrap</span>
                            <span className="badge ml-2"
                                  style={{backgroundColor: "#4968AF", color: 'white'}}>AWS</span>
                        </h5>

                    </div>
                    <div className={"text-center mt-2"}>
                        <a href={"http://guitar-info.s3-website.us-east-2.amazonaws.com/"} className={"btn btn-info"}
                           style={{color: "white"}}>View</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GuitarInfo;