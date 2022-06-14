import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Posts from './view/Posts';
import Users from './view/Users';
import Home from './view/Home';
import './scss/main.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default App;
