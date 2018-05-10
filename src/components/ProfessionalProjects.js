import React from 'react'

import featureImage from '../images/mt-fuji.jpg'


const ProfessionalProjects = () => {
    return (
        <div>
            <h3 className={"text-center mt-4"}>Professional Projects</h3>
            <div className="row mt-4">

                {/*Card 1 begins*/}

                <div className="card col-md-6" style={{width: "18rem"}}>
                    <img className="card-img-top" src={featureImage} alt="Card image cap"/>

                    <div className="card-body">
                        <h5 className="card-title">Epixego
                            <span className="badge badge-danger ml-3">Currently in Alpha</span></h5>


                        <div className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                            <br />
                            <br />

                            <div className="card-header">
                                Notable Tech Used
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">Node</li>
                                <li className="list-group-item">Bootstrap</li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/*Card 2 begins*/}

                <div className="card col-md-6" style={{width: "18rem"}}>
                    <img className="card-img-top" src={featureImage} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Kuku's Corner</h5>
                        <div className="card-text">
                            Some quick example text to build on
                            the card title and make up the bulk of the card's content.
                            <br />
                            <br />

                            <div className="card-header">
                                Notable Tech Used
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">Bootstrap</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ProfessionalProjects;