import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-6 mt-5 mx-auto">

                    <h3>
                        About me
                    </h3>

                    <hr style={{backgroundColor: 'black'}} />

                    <p> My name is Robert but I go by Bobby. I am a software developer currently living in Cupertino,
                        next to
                        Apple. I started using JavaScript in 2010, slightly before I went to college. I immediately fell
                        in love.
                        My specialty is in web development.
                    </p>

                    <p>
                        I am originally from Seattle. I moved to the Bay Area in early 2017. I am currently a software
                        developer for a
                        software company called Drishticon.
                    </p>

                    <p>
                        My interests involve playing guitar, football (college and NFL), and taking Udemy courses. I am
                        constantly taking Udemy courses, it is by far my favorite activity. My current obsession is Go.
                        I am currently working on a Go
                        backend.
                    </p>
                    <hr style={{backgroundColor: 'black'}} />
                </div>
            </div>

        </div>
    )
};

export default Home;