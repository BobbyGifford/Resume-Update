import React from 'react'
import featureImage from '../images/mt-fuji.jpg'
import profileImage from '../images/profile_pic.jpg'
import '../App.css';

const styles = {
    styleContainer: {
        backgroundImage: `url(${featureImage})`,
        backgroundPositionY: '-30vh',
        width: '100%',
        height: '100vh',
        marginBottom: "10vh"
    },

    styleJumbotron: {
        backgroundColor: 'rgb(71, 160, 250, .1)',
        width: '60vw',
        height: '100vh',
        paddingTop: "25vh"
    },

    styleImage: {
        maxWidth: '50vw',
        maxHeight: '40vh'
    }
};

const Header = () => {
    return (
        <div className='text-center' style={styles.styleContainer}>
            <div className="jumbotron mx-auto" style={styles.styleJumbotron}>
                <div style={{color: 'black'}}>
                    <h1 className="display-4">Robert Gifford</h1>
                    <p className="lead">Welcome to my resume</p>
                    <img src={profileImage} style={styles.styleImage} />
                    <hr className="my-4"/>
                    <div className="lead d-none d-md-block">
                        <button onClick={() => {
                            document.querySelector("#about").scrollIntoView({behavior: "smooth"})
                        }} className="btn btn-primary btn-lg">About Me
                        </button>
                        <button onClick={() => {
                            document.querySelector("#projectlist").scrollIntoView({behavior: "smooth"})
                        }} className="btn btn-primary btn-lg mx-2">Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;