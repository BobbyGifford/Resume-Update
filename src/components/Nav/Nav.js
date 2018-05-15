import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{backgroundColor: '#212330'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <a className="nav-link" onClick={() => {
                                document.querySelector("#about").scrollIntoView({behavior: "smooth"})
                            }}>About<span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" onClick={() => {
                                document.querySelector("#projectlist").scrollIntoView({behavior: "smooth"})
                            }}>Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Nav;

