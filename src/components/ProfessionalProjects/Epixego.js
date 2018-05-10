import React from 'react'

import featureImage from '../../images/epixego_1.png'

const Epixego = () => {
    return (
        <div className="card col-md-6" style={{width: "18rem"}}>
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
                        Notable Tech Used
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Node</li>
                        <li className="list-group-item">Bootstrap</li>
                    </ul>
                    <h6 className="text-center"><span className="badge badge-danger">Currently in Alpha</span></h6>
                </div>
            </div>
        </div>
    )
};

export default Epixego;