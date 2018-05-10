import React from 'react'

import featureImage from '../../images/kukuscorner_1.png'

const KukusCorner = () => {
    return (
        <div className="card col-md-6" style={{width: "18rem"}}>
            <img className="card-img-top" src={featureImage} alt="Kuku's"/>
            <div className="card-body">
                <h5 className="card-title">Kuku's Corner</h5>
                <div className="card-text">
                    A reusable e-commerce store with an admin section. It is meant to be easily customizable for
                    clients. Currently being updated from Angular 1 to React.
                    <br/>
                    <br/>

                    <div className="card-header">
                        Notable Tech Used
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Bootstrap</li>
                    </ul>

                    <div className={"text-center mt-2"} >
                        <a href={"https://kukuscorner.com/#/home"} className={"btn btn-info"} style={{color: "white"}}>View</a>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default KukusCorner;