import React from 'react';
import "./Sidebar.css"
import logoSpotify from "../../assets/icons/logo-spotify.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faGlobe, faBook, faPlus} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="spotify_logo"/>
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

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="library__icon"><FontAwesomeIcon icon={faBook} /></span>
                        <span className="library__button__content">Sua biblioteca</span>
                    </button>
                    <span className="library__icon"><FontAwesomeIcon icon={faPlus}/></span>
                </div>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Que tal seguir um podcast novo?</span>
                        <span className="text subtitle">Avisaremos voce de novos episódios.</span>
                        <button className="section-playlist__button">
                            <span>Explore Podcasts</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <ul>
                        <li>
                            <a href="">Legal</a>
                            <a href="">Centro de privacidade</a>
                        </li>
                        <li>
                            <a href="">Política de Privacidade</a>
                            <a href="">Cookies</a>
                            <a href="">Sobre anúncios</a>
                        </li>
                        <li>
                            <a href="">Acessibilidade</a>
                            <a href="">Notice at Collection</a>
                        </li>
                        <li>
                            <a href="">Your Privacy Choices</a>
                        </li>
                    </ul>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;