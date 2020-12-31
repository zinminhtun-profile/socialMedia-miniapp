import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Navbar() {
    return (
        <nav className="white">
            <div className="nav-wrapper container black-text">
         
            <Link to={`${process.env.PUBLIC_URL}/home`}  className="brand-logo black-text">MiniSocial</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><i className="material-icons left">search</i></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
