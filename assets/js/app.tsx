import Cookies from 'js-cookie';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import AccountExperience from './components/AccountExperience';
import AccountInfos from './components/AccountInfos';
import AccountProjectsJobs from './components/AccountProjectsJobs';
import AccountSettings from './components/AccountSettings';
import Footer from './components/Footer';
import ListProject from './components/ListProject';
import Navbar from './components/Navbar';
import config from './config/default';
import './scss/main.scss';
import Account from './view/Account';
import ChangePassword from './view/Account/ChangePassword';
import EditAccount from './view/Account/EditAccount';
import DefaultZoneMessage from './view/DefaultZoneMessage';
import ForYou from './view/ForYou';
import Home from './view/Home';
import Job from './view/Job';
import AddJob from './view/Job/AddJob';
import EditJob from './view/Job/EditJob';
import Listing from './view/Listing';
import Login from './view/Login';
import Message from './view/Message';
import Messenger from './view/Messenger';
import Project from './view/Project';
import AddProject from './view/Project/AddProject';
import EditProject from './view/Project/EditProject';
import Register from './view/Register';
import ListingCategory from './view/ListingCategory';
import AddExperience from './view/Experience/AddExperience';
import EditExperience from './view/Experience/EditExperience';

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
                <Route path="/listing" element={<Listing />} />
                <Route path="/listingCategory/:name" element={<ListingCategory />} />
                <Route path="/foryou" element={<ForYou />} />
                <Route path="/account" element={<Account />}>
                    <Route path="" element={<AccountInfos />} />
                    <Route path="settings" element={<AccountSettings />} />
                    <Route path="experiences" element={<AccountExperience />} />
                    <Route path="projectsjobs" element={<AccountProjectsJobs />} />
                </Route>
                <Route path="/messenger/" element={<Messenger />}>
                    <Route path="" element={<DefaultZoneMessage />} />
                    <Route path=":id" element={<Message />} />
                </Route>
                <Route path="/list" element={<ListProject />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account/edit" element={<EditAccount />} />
                <Route path="/account/password" element={<ChangePassword />} />
                <Route path="/job">
                    <Route path=":idJob" element={<Job />} />
                    <Route path="add" element={<AddJob />} />
                    <Route path="edit/:idJob" element={<EditJob />} />
                </Route>
                <Route path="/project">
                    <Route path=":idProject" element={<Project />} />
                    <Route path="add" element={<AddProject />} />
                    <Route path="edit/:idProject" element={<EditProject />} />
                </Route>
                <Route path="/experience">
                    <Route path="add" element={<AddExperience />} />
                    <Route path="edit/:idExperience" element={<EditExperience />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
