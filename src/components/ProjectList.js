import React, {Component} from 'react'

class ProjectList extends Component {
    constructor(){
        super()

        this.state = {
            projectChoice: "professional"
        }
    }

    choiceCheck(){
        if(this.state.projectChoice === "professional"){
            return <div>Professional</div>
        }

        if(this.state.projectChoice === "personal"){
            return <div>Personal</div>
        }
    }

    changeList(choice){
        this.setState({projectChoice: choice})
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Projects</h2>
                <div style={{marginLeft: "40%"}}>
                    <button onClick={() => this.changeList("professional")} className="mx-2 btn btn-info">Professional</button>
                    <button onClick={() => this.changeList("personal")} className="mx-2 btn btn-info">Personal</button>
                </div>
                {this.choiceCheck()}
            </div>
        )
    }
}

export default ProjectList;