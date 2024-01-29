import React from 'react';
import "./Sidebar.css"
import logoSpotify from "../../assets/icons/logo-spotify.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faGlobe} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="logoSpotify"/>
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faHome}/></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faSearch}/></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Sidebar;