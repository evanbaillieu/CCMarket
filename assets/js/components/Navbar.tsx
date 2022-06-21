//import React, { FC } from 'react';
import React, { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../components/lang';
import Logo from '../svg/logoHeader.svg';
import IconHamburg from '../svg/iconHamburg.svg';
import Message from '../svg/message.svg';
import Search from '../svg/search.svg';
import Profil from '../svg/profil.svg';
import LogoMobile from '../svg/logo.svg';
import MessageWhite from '../svg/messagewhite.svg';
import SearchWhite from '../svg/searchwhite.svg';
import ProfilWhite from '../svg/profilwhite.svg';
const Navbar: FC = () => {
    const { t } = useTranslation();

    const location = useLocation();
    console.log(location);

    let MessageIcon: any = <Message />;
    let ProfilIcon: any = <Profil />;
    let SearchIcon: any = <Search />;

    //Swicth color logo header
    if (location.pathname !== '/') {
    } else {
        MessageIcon = <MessageWhite />;
        ProfilIcon = <ProfilWhite />;
        SearchIcon = <SearchWhite />;
    }

    //Animation Menu Mobile
    const MenuOpen = () => {
        document.getElementById('menu_nav_mobile').classList.add('is_active');
        document.getElementById('menu_mobile_content').classList.add('is_active');
    };
    const MenuClose = () => {
        document.getElementById('menu_nav_mobile').classList.remove('is_active');
        document.getElementById('menu_mobile_content').classList.remove('is_active');
    };

    window.addEventListener('scroll', function (e) {
        if (window.scrollY == 0) {
            document.getElementById('container_nav_menu').classList.remove('is_scroll');
            MessageIcon = <Message />;
        } else {
            document.getElementById('container_nav_menu').classList.add('is_scroll');
        }
    });

    return (
        <div>
            <div className="container_nav">
                <header id="container_nav_menu" className="header">
                    <nav className="header_navbar">
                        <aside className="header_navbar_logo">
                            <div className="header_navbar_logo_desktop">
                                <Link to={'/'}>
                                    <Logo />
                                </Link>
                            </div>{' '}
                            <div className="header_navbar_logo_mobile">
                                <LogoMobile />
                            </div>
                        </aside>
                        <aside className="header_navbar_menu">
                            <ul>
                                <li>
                                    <NavLink to="/">{t('nav.home')}</NavLink>
                                </li>
                                <li>
                                    <Link to="/projects">{t('nav.projects')}</Link>
                                </li>
                                <li>
                                    <Link to="/jobs">{t('nav.jobs')}</Link>
                                </li>
                            </ul>
                            <div onClick={MenuOpen} className="header_navbar_menu_burgeur_button">
                                <div className="header_navbar_menu_burgeur_button_bar"></div>
                                <div className="header_navbar_menu_burgeur_button_bar"></div>
                                <div className="header_navbar_menu_burgeur_button_bar"></div>
                            </div>
                        </aside>
                        <aside className="header_navbar_pictos">
                            <ul>
                                <li>
                                    <Link to="/account">{ProfilIcon}</Link>
                                </li>
                                <li className="header_navbar_pictos_search_button">{SearchIcon}</li>
                                <li>
                                    <Link to="/account">{MessageIcon}</Link>
                                </li>
                            </ul>
                        </aside>
                    </nav>
                </header>
            </div>
            <div id="menu_nav_mobile" className="container_nav_mobile">
                <aside onClick={MenuClose} className="container_nav_mobile_background_black"></aside>
                <aside id="menu_mobile_content" className="container_nav_mobile_content">
                    <div className="container_nav_mobile_content_logo">
                        <Logo />
                    </div>
                    <div className="container_nav_mobile_content_pictos">
                        <Profil />
                        <Message />
                        <Search />
                    </div>
                    <div className="container_nav_mobile_content_menu">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/">{t('nav.home')}</NavLink>
                                </li>
                                <li>
                                    <Link to="/projects">{t('nav.projects')}</Link>
                                </li>
                                <li>
                                    <Link to="/jobs">{t('nav.jobs')}</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Navbar;
