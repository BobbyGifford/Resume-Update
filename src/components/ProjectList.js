import React from 'react'
import {Link} from "react-router-dom"

const ProjectList = () => {
    return (
        <div className="container">
            <h2 className="text-center">Projects</h2>
            <div style={{marginLeft: "40%"}}>
                <Link className="mx-2 btn btn-info" to="/professional">Professional</Link>
                <Link className="mx-2 btn btn-info" to="/personal">Personal</Link>
            </div>
        </div>
    )
};

export default ProjectList;