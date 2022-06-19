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
                <div className="div_text">
                    <img src={HomeResponsive} className="imgHomeResponsive" />
                    <h1 className="title">
                        {t('home.thePlatFormThat')}
                        <span className="colorJ">{t('home.connectsContributors')}</span>
                        {t('home.and')}
                        <span className="colorR">{t('home.openSourceProjectOwners')}</span>
                    </h1>
                    <p>{t('home.description')}</p>

                    <a href="/">
                        <button className="button">
                            {t('home.getstarted')}
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
                    <h2>{t('home.complete')}</h2>
                </div>
                <div className="items">
                    <a href="/" className="icon">
                        <Lock />
                    </a>
                    <h2>{t('home.secure')}</h2>
                </div>
                <div className="items">
                    <a href="/" className="icon">
                        <Internet />
                    </a>
                    <h2>{t('home.community')}</h2>
                </div>
            </div>

            <div className="div_container">
                <h2>
                    {t('home.findYourOwn')}
                    <span className="colorR">{t('home.happiness')}</span>
                </h2>
                <div className="container">
                    <div className="item">
                        <a href="/" className="icons">
                            <Developement />
                        </a>
                        <h3>{t('home.developement')}</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Education />
                        </a>
                        <h3>{t('home.education')}</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Game />
                        </a>
                        <h3>{t('home.game')}</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Design />
                        </a>
                        <h3>{t('home.design')}</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Internets />
                        </a>
                        <h3>{t('home.internet')}</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="item">
                        <a href="/" className="icons">
                            <Multimedia />
                        </a>
                        <h3>{t('home.multimedia')}</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <OfficeAutomation />
                        </a>
                        <h3>{t('home.officeAutomation')}</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <System />
                        </a>
                        <h3>{t('home.system')}</h3>
                    </div>
                    <div className="item">
                        <a href="/" className="icons">
                            <Utilities />
                        </a>
                        <h3>{t('home.utilities')}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
