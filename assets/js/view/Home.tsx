import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Lang from '../components/lang';
import Layer from '../svg/Layer.svg';
import Lock from '../svg/lock.svg';
import Arrow from '../svg/Arrow.svg';
import Internet from '../svg/internet.svg';
import Developement from '../svg/Developement.svg';
import Education from '../svg/Education.svg';
import Game from '../svg/Game.svg';
import Design from '../svg/Design.svg';
import Internets from '../svg/Internets.svg';
import Multimedia from '../svg/Multimedia.svg';
import OfficeAutomation from '../svg/OfficeAutomation.svg';
import System from '../svg/System.svg';
import Utilities from '../svg/Utilities.svg';
import SectionRightHome from '../img/SectionRightHome.png';
import HomeResponsive from '../img/HomeResponsive.png';

const Home: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="div_body">
            <div className="div_principal">
                <div>
                    <img src={SectionRightHome} className="imgSectionRightHome" />
                </div>
                <div>
                    <img src={HomeResponsive} className="imgHomeResponsive" />
                </div>
                <div className="div_text">
                    <h1 className="title">
                        The platform that <span className="colorJ">connects contributors</span> and{' '}
                        <span className="colorR">open source project owners</span>
                    </h1>
                    <p>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                        impression. Le Lorem Ipsum est le faux texte standard de l`imprimerie depuis les années 1500,
                        quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre
                        spécimen de polices de texte. Il n`a pas fait que survivre cinq siècles,
                    </p>

                    <a href="/">
                        <button className="button">
                            Get started
                            <span className="arrow_button">
                                <Arrow />
                            </span>
                        </button>
                    </a>
                </div>
            </div>

            <div className="div_buttons">
                <div className="items">
                    <a href="/" className="icon">
                        <Layer />
                    </a>
                    <h2>Complete</h2>
                </div>
                <div className="items">
                    <a href="/" className="icon">
                        <Lock />
                    </a>
                    <h2>Secure</h2>
                </div>
                <div className="items">
                    <a href="/" className="icon">
                        <Internet />
                    </a>
                    <h2>Community</h2>
                </div>
            </div>

            <div className="div_container">
                <h2>
                    Find your own <span className="colorR">happiness</span>
                </h2>
                <div className="container">
                    <div className="item">
                        <a href="/" className="icons">
                            <Developement />
                        </a>
                        <h3>Developement</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Education />
                        </a>
                        <h3>Education</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Game />
                        </a>
                        <h3>Game</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Design />
                        </a>
                        <h3>Design</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Internets />
                        </a>
                        <h3>Internet</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="item">
                        <a href="/" className="icons">
                            <Multimedia />
                        </a>
                        <h3>Multimedia</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <OfficeAutomation />
                        </a>
                        <h3>Office automation</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <System />
                        </a>
                        <h3>System</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Utilities />
                        </a>
                        <h3>Utilities</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
