import React from 'react'
import featureImage from '../images/mt-fuji.jpg'
import '../App.css';

const styles = {
    styleContainer: {
        backgroundImage: `url(${featureImage})`,
        backgroundPositionY: '-30vh',
        width: '100%',
        height: '50vh',
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
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" role="button">About Me</a>
                        <a className="btn btn-primary btn-lg mx-2" role="button">Tech I know</a>
                        <a className="btn btn-primary btn-lg" role="button">Projects</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;