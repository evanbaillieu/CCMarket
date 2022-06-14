import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Posts from './view/Posts';
import Users from './view/Users';
import Home from './view/Home';
import './scss/main.scss';
import Navbar from './view/Header/Navbar/Navbar';
import Footer from './view/Footer/Navbar/Footer';

const App: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <nav className="nav">
                <Navbar />
            </nav>
            <div className="home">
                <Home />
            </div>
            <div className="footer">
                <Footer />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </div>
    );
};

export default App;
