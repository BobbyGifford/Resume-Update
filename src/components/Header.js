import React from 'react'
import featureImage from '../images/mt-fuji.jpg'
import '../App.css';

const styles = {
    styleContainer: {
        backgroundImage: `url(${featureImage})`,
        backgroundPositionY: '-30vh',
        width: '100vw',
        height: '100vh',
    },

    styleJumbotron: {
        backgroundColor: 'rgb(71, 160, 250, .1)',
        width: '40vw',
        height: '100vh',
        paddingTop: "30vh"
    }
};

const Header = () => {
    return (
        <div className='text-center' style={styles.styleContainer}>
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
                            document.querySelector("#projectlist").scrollIntoView({behavior: "smooth"})
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