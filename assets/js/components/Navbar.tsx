import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../components/lang';
import LogoMobile from '../svg/logo.svg';
import Logo from '../svg/logoHeader.svg';
import Message from '../svg/message.svg';
import Profil from '../svg/profil.svg';
import Search from '../svg/search.svg';

import ModalSearch from './ModalSearch';

export interface isHome {
    class: string;
}

const Navbar: FC = () => {
    const { t } = useTranslation();

    const [isHome, setIsHome] = useState<isHome>({ class: null });
    const [isOpen, setIsOpen] = useState(false);

    //If home user icon / message icon / search icon in white
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname == '/') {
            setIsHome({ class: 'header is_home' });
        } else {
            setIsHome({ class: 'header' });
        }
    }, [pathname]);

    const classHeader = isHome.class;

    //Animation Menu Mobile
    const MenuOpenClose = () => {
        document.getElementById('menu_nav_mobile').classList.toggle('is_active');
        document.getElementById('menu_mobile_content').classList.toggle('is_active');
    };

    //If Scroll add Background
    window.addEventListener('scroll', function (e) {
        if (window.scrollY == 0) {
            document.getElementById('container_nav_menu').classList.remove('is_scroll');
        } else {
            document.getElementById('container_nav_menu').classList.add('is_scroll');
        }
    });

    //Open Modal Search
    const OpenCloseSearchModal = () => {
        setIsOpen((state) => !state);
        document.getElementById('menu_nav_mobile').classList.remove('is_active');
        document.getElementById('menu_mobile_content').classList.remove('is_active');
    };

    return (
        <div>
            <div className="container_nav">
                <header id="container_nav_menu" className={classHeader}>
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
                                    <NavLink to="/foryou">{t('nav.foryou')}</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project/add">{t('nav.addProject')}</NavLink>
                                </li>
                            </ul>
                            <div onClick={MenuOpenClose} className="header_navbar_menu_burgeur_button">
                                <div className="header_navbar_menu_burgeur_button_bar"></div>
                                <div className="header_navbar_menu_burgeur_button_bar"></div>
                                <div className="header_navbar_menu_burgeur_button_bar"></div>
                            </div>
                        </aside>
                        <aside className="header_navbar_pictos">
                            <ul>
                                <li>
                                    <Link to="/account">
                                        <Profil />
                                    </Link>
                                </li>
                                <li onClick={OpenCloseSearchModal} className="header_navbar_pictos_search_button">
                                    <Search />
                                </li>
                                <li>
                                    <Link to="/messenger">
                                        <Message />
                                    </Link>
                                </li>
                            </ul>
                        </aside>
                    </nav>
                </header>
            </div>
            <div id="menu_nav_mobile" className="container_nav_mobile">
                <aside onClick={MenuOpenClose} className="container_nav_mobile_background_black"></aside>
                <aside id="menu_mobile_content" className="container_nav_mobile_content">
                    <div className="container_nav_mobile_content_logo">
                        <Logo />
                    </div>
                    <div className="container_nav_mobile_content_pictos">
                        <Link onClick={MenuOpenClose} to={'/account'}>
                            <Profil />
                        </Link>
                        <Link onClick={MenuOpenClose} to={'/messenger'}>
                            <Message />
                        </Link>
                        <p onClick={OpenCloseSearchModal}>
                            <Search />
                        </p>
                    </div>
                    <div className="container_nav_mobile_content_menu">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/">{t('nav.home')}</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects">{t('nav.foryou')}</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project/add">{t('nav.addProject')}</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
            {isOpen ? <ModalSearch onClose={OpenCloseSearchModal} /> : <></>}
        </div>
    );
};

export default Navbar;
