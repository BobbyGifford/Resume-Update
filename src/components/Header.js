import React from 'react'
import featureImage from '../images/mt-fuji.jpg'
import '../App.css';

const styles = {
    styleContainer: {
        backgroundImage: `url(${featureImage})`,
        backgroundPositionY: '-30vh',
        width: '100%',
        height: '100vh',
    },

    styleJumbotron: {
        backgroundColor: 'rgba(138, 0, 252, 0.05)',
        width: '40vw',
        height: '100%'
    }
};

const Header = () => {
    return (
        <div className='App' style={styles.styleContainer}>
            <div className="jumbotron mx-auto" style={styles.styleJumbotron}>
                <div style={{color: 'black'}}>
                    <h1 className="display-4">Robert Gifford</h1>
                    <p className="lead">Welcome to my resume</p>
                    <hr className="my-4"/>
                    <div className="lead">
                        <button onClick={() => {
                            document.querySelector("#about").scrollIntoView({behavior: "smooth"})
                        }} className="btn btn-primary btn-lg">About Me</button>
                        <button onClick={() => {
                            document.querySelector("#projects").scrollIntoView({behavior: "smooth"})
                        }} className="btn btn-primary btn-lg mx-2">Projects</button>
                        <button onClick={() => {
                            document.querySelector("#skills").scrollIntoView({behavior: "smooth"})
                        }} className="btn btn-primary btn-lg">My Skills</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;