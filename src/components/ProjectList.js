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
            <div className="container">
                <h2 className="text-center">Projects</h2>
                <div className="text-center">Please choose an option</div>
                <div className={"text-center"}>

                    <button onClick={() => {
                        this.setState({projectOption: "professional"})
                    }} className={"btn btn-info btn-lg mx-3"}>Professional
                    </button>

                    <button onClick={() => {
                        this.setState({projectOption: "personal"})
                    }} className={"btn btn-info btn-lg"}>Personal</button>
                </div>

                {this.state.projectOption === "professional" ? <ProfessionalProjects/> : <PersonalProjects/>}
            </div>
        )
    }
}

export default ProjectList;