import React, {Component} from 'react'
import ProfessionalProjects from "./ProfessionalProjects/ProfessionalProjects"
import PersonalProjects from "./PersonalProjects/PersonalProjects"

class ProjectList extends Component {
    constructor() {
        super();

        this.state = {
            projectOption: "professional"
        }
    }

    render() {
        return (
            <div style={{color: "white", maxWidth: "98vw"}}>
                <h1 className="text-center">Projects</h1>
                <hr style={{backgroundColor: 'white', width: '60vw'}} />

                <ProfessionalProjects />
                <PersonalProjects />
            </div>
        )
    }
}

export default ProjectList;