import React from 'react'
import featureImage from '../images/bg2.jpg'

const style = {
    styleContainer: {
        height: "90vh",
        width: "100%",
        maxWidth: "98vw"
    },
    styleBody: {
        marginTop: "10vh",
        padding: "15vh 0 15vh 0",
        width: "100%",
        backgroundImage: `url(${featureImage})`,
        backgroundPositionY: '-20vh',
    },
    styleContent: {
        backgroundColor: 'rgb(192, 206, 229, .8)',
        height: "100%",
        width: "100%",
        color: "black",
    }
};

const Home = () => {
    return (
        <div id="about" style={style.styleContainer}>
            <div className="row">
                <div style={style.styleBody}>
                    <div style={style.styleContent}>
                        <div className="col-6 mx-auto">

                            <h3>
                                About me
                            </h3>

                            <hr style={{backgroundColor: 'black'}}/>

                            <p> My name is Robert but I go by Bobby. I am a software developer currently living in
                                Cupertino,
                                next to
                                Apple. I started using JavaScript in 2010, slightly before I went to college. I
                                immediately
                                fell
                                in love.
                                My specialty is in web development.
                            </p>

                            <p>
                                I am originally from Seattle. I moved to the Bay Area in early 2017. I am currently a
                                software
                                developer for a
                                software company called Drishticon.
                            </p>

                            <p>
                                My interests involve playing guitar, football (college and NFL), and taking Udemy
                                courses. I
                                am
                                constantly taking Udemy courses, it is by far my favorite activity. My current obsession
                                is
                                Go.
                                I am currently working on a Go
                                backend.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Home;