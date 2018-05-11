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
                <h1 className="text-center">Projects</h1>
                <h4 className="text-center my-4">Please click one of the buttons below</h4>

                <div className={"text-center"}>

                    <button onClick={() => {
                        this.setState({projectOption: "professional"})
                    }} className={"btn btn-info btn-lg mx-3"}> View Professional
                    </button>

                    <button onClick={() => {
                        this.setState({projectOption: "personal"})
                    }} className={"btn btn-info btn-lg"}>View Personal</button>
                </div>

                {this.state.projectOption === "professional" ? <ProfessionalProjects /> : <PersonalProjects/>}
            </div>
        )
    }
}

export default ProjectList;