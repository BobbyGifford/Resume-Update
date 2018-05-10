import React from 'react'

import featureImage from '../../images/mt-fuji.jpg'

const KukusCorner = () => {
    return (
        <div className="card col-md-6" style={{width: "18rem"}}>
            <img className="card-img-top" src={featureImage} alt="Kuku's"/>
            <div className="card-body">
                <h5 className="card-title">Kuku's Corner</h5>
                <div className="card-text">
                    Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    <br/>
                    <br/>

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
    )
};

export default KukusCorner;