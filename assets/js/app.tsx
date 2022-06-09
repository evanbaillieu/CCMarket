import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./styles/style.scss";
import Posts from './view/Posts';
import Users from './view/Users';
import Home from './view/Home';

    
const App: FC = () => {
    
    const { t } = useTranslation();
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/posts"}> Posts </Link>
                           </li>
    
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Users </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path="/users" element={<Users/>} />
                   <Route path="/posts" element={<Posts/>} />
               </Routes>
           </div>
        )
}
    
export default App;