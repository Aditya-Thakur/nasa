import React from 'react';
import { withRouter } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Neo-Ws</div>
            <div className="nav-buttons">
                <ul className="navbar-nav">
                   
                </ul>
            </div>
        </nav>
    )
}



export default withRouter(NavBar);