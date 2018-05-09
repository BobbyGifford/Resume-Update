import React from 'react'
import featureImage from '../mt-fuji.jpg'
import '../App.css';

const styles = {
    styleContainer: {
        backgroundImage: `url(${featureImage})`,
        backgroundPositionY: '-20vh',
        width: '100%',
        height: '50vh',
    },

    styleJumbotron: {
        backgroundColor: 'rgba(138, 167, 252, 0.4)',
        height: '50vh'
    }
}

const Header = () => {
    return (
        <div style={styles.styleContainer}>
            <div className="jumbotron" style={styles.styleJumbotron}>
                <div style={{color: 'black'}}>
                    <h1 className="display-4">Robert Gifford</h1>
                    <p className="lead">Welcome to my resume</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
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