import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route, Routes } from 'react-router-dom';
import '../components/lang';
import LogoHeader from '../svg/logoHeader.svg';
import Message from '../svg/message.svg';
import Search from '../svg/search.svg';
import Profil from '../svg/profil.svg';

const Navbar: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <nav className="nav">
                <div>
                    <Link className={'navbar-brand'} to={'/'}>
                        <LogoHeader />
                    </Link>
                </div>

                <ul>
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
                    <ul>
                        <li>
                            <Profil />
                        </li>
                        <li>
                            <Message />
                        </li>
                        <li>
                            <Search />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
