import React from 'react'
import './index.css'

function Navbar() {
    return (
        <nav className="white">
            <div className="nav-wrapper container black-text">
            <a className="brand-logo black-text">Social</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href=""><i className="material-icons left">search</i></a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
