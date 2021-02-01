import React from "react";
import {NavLink} from "react-router-dom";

function Menu(){
    return(
        <div className="menu-wrapper">
            <nav className="menu">
                <div className="menu-item"><NavLink to="/aboutMe">About me</NavLink></div>
                <div className="menu-item"><NavLink to="/experience">Experience/Skills</NavLink></div>
                <div className="menu-item"><NavLink to="/projects">Projects</NavLink></div>
                <div className="menu-item"><NavLink to="/contacts">Contacts</NavLink></div>
            </nav>
        </div>
    )
}

export default Menu;