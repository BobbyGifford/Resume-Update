import React from 'react'

import featureImage from '../../images/kukuscorner_1.png'

const KukusCorner = () => {
    return (
        <div className="card col-md-5 mx-auto" style={{width: "18rem"}}>
            <a href={"https://kukuscorner.com/#/home"}><img className="card-img-top" src={featureImage} alt="Kuku's"/></a>
            <div className="card-body">
                <h5 className="card-title">Kuku's Corner</h5>
                <div className="card-text">
                    A reusable e-commerce store with an admin section. It is meant to be easily customizable for
                    clients. Currently being updated from Angular 1 to React.
                    <br/>
                    <br/>

                    <div className="card-header">
                        <h6>Notable Tech Used:
                            <span className="badge badge-info ml-2">React</span>
                            <span className="badge badge-info ml-2">Bootstrap</span>
                        </h6>
                    </div>

                    <div className={"text-center mt-2"} >
                        <a href={"https://kukuscorner.com/#/home"} className={"btn btn-info"} style={{color: "white"}}>View</a>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default KukusCorner;