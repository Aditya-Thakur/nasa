import React from 'react';
import { withRouter } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <div className="logo">NeoWs</div>
            <div className="nav-buttons">
                <ul className="navbar-nav">{props.children}</ul>
            </div>
        </nav>
    )
}



export default withRouter(NavBar);