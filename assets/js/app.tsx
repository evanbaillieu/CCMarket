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
import EditAccount from './view/Account/Edit';
import ChangePassword from './view/Account/ChangePassword';
import './scss/main.scss';
import config from './config/default';

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
                <Route path="/account" element={<Account />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account/edit" element={<EditAccount />} />
                <Route path="/account/password" element={<ChangePassword />} />
            </Routes>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default App;
