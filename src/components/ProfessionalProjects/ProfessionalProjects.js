import React from 'react'

import Epixego from './Epixego'
import KukusCorner from './KukusCorner'


const ProfessionalProjects = () => {
    return (
        <div className={"container"}>
            <h3 className={"text-center my-4"}>Professional Projects</h3>
            <div className="row" style={{color: "black"}}>

                {/*Card 1 begins*/}

                <Epixego/>

                {/*Card 2 begins*/}

                <KukusCorner/>

            </div>
        </div>
    )
};

export default ProfessionalProjects;