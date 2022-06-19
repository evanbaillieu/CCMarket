//import React, { FC } from 'react';
import React, { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../components/lang';
import LogoHeader from '../svg/logoHeader.svg';
import IconHamburg from '../svg/iconHamburg.svg';
import Message from '../svg/message.svg';
import Search from '../svg/search.svg';
import Profil from '../svg/profil.svg';
import Logo from '../svg/logo.svg';
import Messages from '../svg/messages.svg';
import Searchs from '../svg/searchs.svg';
import Profils from '../svg/profils.svg';

const Navbar: FC = () => {
    const { t } = useTranslation();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    };
    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 768) {
                setToggleMenu(false);
            }
        };
        window.addEventListener('resize', changeWidth);
        return () => window.removeEventListener('resize', changeWidth);
    }, []);

    return (
        <div className="primary_header">
            <div className="nav_logoHeaders">
                <Link className={'navbar-brand'} to={'/'}>
                    <LogoHeader />
                </Link>
            </div>
            <div className="nav_logoResponsive">
                <Link className={'navbar-brand'} to={'/'}>
                    <Logo />
                </Link>
            </div>
            <span onClick={toggleNavSmallScreen} className="mobileNavToggle">
                <IconHamburg />
            </span>
            {(toggleMenu || largeur > 768) && (
                <nav className="primary_navigition">
                    <div className="nav_logoHeader">
                        <Link className={'navbar-brand'} to={'/'}>
                            <LogoHeader />
                        </Link>
                    </div>
                    <ul className="liste">
                        <li className="nav_item">
                            <Link className={'nav_link'} to={'/posts'}>
                                {t('nav.home')}
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link className={'nav_link'} to={'/users'}>
                                {t('nav.projects')}
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link className={'nav_link'} to={'/jobs'}>
                                {t('nav.jobs')}
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <ul className="liste_iconsResponsive">
                            <li className="iconResponsive">
                                <Profil />
                            </li>
                            <li className="iconResponsive">
                                <Message />
                            </li>
                            <li className="iconResponsive">
                                <Search />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="liste_iconsHome">
                            <li className="iconsHome">
                                <Profils />
                            </li>
                            <li className="iconsHome">
                                <Messages />
                            </li>
                            <li className="iconsHome">
                                <Searchs />
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Navbar;
