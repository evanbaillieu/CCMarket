import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoWhite from '../svg/logoWhite.svg';
import Lang from './lang';
const Footer: FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <aside className="footer_menu">
                <ul>
                    <li>
                        <Link to="/">{t('footer.home')}</Link>
                    </li>
                    <li>
                        <Link to="/foryou">{t('nav.foryou')}</Link>
                    </li>
                    <li>
                        <Link to="/project/add">{t('project.add')}</Link>
                    </li>
                    <li>
                        <Link to="/account">{t('footer.myaccount')}</Link>
                    </li>
                    <li>
                        <Link to="/messenger">{t('footer.messaging')}</Link>
                    </li>
                </ul>
            </aside>
            <aside className="footer_logo">
                <Link to="/">
                    <LogoWhite />
                </Link>
            </aside>
            <Lang />
        </footer>
    );
};

export default Footer;
