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
import Users from './view/Users';
import config from './config/default';
const App: FC = () => {
    const { t, i18n } = useTranslation();
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
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default App;
