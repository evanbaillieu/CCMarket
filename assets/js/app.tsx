import Cookies from 'js-cookie';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './view/Home';
import SearchList from './view/SearchList';
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
import Messenger from './view/Messenger';
import Message from './view/Message';
import DefaultZoneMessage from './view/DefaultZoneMessage';
import Job from './view/Job';

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
                <Route path="/searchList" element={<SearchList />} />
                <Route path="/account" element={<Account />}>
                    <Route path="" element={<AccountInfos />} />
                    <Route path="settings" element={<AccountSettings />} />
                </Route>
                <Route path="/messenger" element={<Messenger />}>
                    <Route path="" element={<DefaultZoneMessage />} />
                    <Route path=":id" element={<Message />} />
                </Route>
                <Route path="/list" element={<ListDemo />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account/edit" element={<EditAccount />} />
                <Route path="/account/password" element={<ChangePassword />} />
                <Route path="/job">
                    <Route path=":idJob" element={<Job />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
