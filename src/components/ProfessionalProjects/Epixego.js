import React from 'react'

import featureImage from '../../images/epixego_1.png'

const Epixego = () => {
    return (
        <div className="card col-md-5 mr-3 offset-md-1" style={{width: "18rem"}}>
            <img className="card-img-top" src={featureImage} alt="Epixego"/>

            <div className="card-body">
                <h4 className="card-title">Epixego
                </h4>


                <div className="card-text">
                    A skills genome knowledge graph that is able to mimic the neurological connections of the human
                    brain. It uses information about context unavailable through typically resumes. Users can choose to
                    either be a role model or student depending of education/career level.
                    <br/>
                    <br/>

                    <div className="card-header">
                        <h5>Notable Tech Used:
                            <span className="badge badge-info ml-2">React</span>
                            <span className="badge badge-success ml-2">Node</span>
                            <span className="badge ml-2" style={{backgroundColor: "purple", color: 'white'}}>Bootstrap</span>
                        </h5>
                    </div>
                    <h6 className="text-center"><span className="badge badge-danger mt-3">Currently in Alpha</span></h6>
                </div>
            </div>
        </div>
    )
};

export default Epixego;