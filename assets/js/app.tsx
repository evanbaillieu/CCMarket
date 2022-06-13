import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Posts from './view/Posts';
import Users from './view/Users';
import Home from './view/Home';
import LogoHeader from './svg/logoHeader.svg';
import Message from './svg/message.svg';
import Search from './svg/search.svg';
import Profil from './svg/profil.svg';

const App: FC = () => {
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </div>
    );
};

export default App;
