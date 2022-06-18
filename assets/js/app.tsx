import Cookies from 'js-cookie';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './view/Home';
import Login from './view/Login';
import Posts from './view/Posts';
import Register from './view/Registeur';
import Account from './view/Account';
import AccountInfos from './components/AccountInfos';
import AccountSettings from './components/AccountSettings';
import EditAccount from './view/Account/EditAccount';
import ChangePassword from './view/Account/ChangePassword';
import './scss/main.scss';
import config from './config/default';
import ListDemo from './components/ListDemo';

const App: FC = () => {
    const { i18n } = useTranslation();
    useEffect(() => {
        const lang = Cookies.get(config.lang.key);
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, []);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Account />}>
                    <Route path="/account" element={<AccountInfos />} />
                    <Route path="/account/settings" element={<AccountSettings />} />
                </Route>
                <Route path="/list" element={<ListDemo />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account/edit" element={<EditAccount />} />
                <Route path="/account/password" element={<ChangePassword />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
