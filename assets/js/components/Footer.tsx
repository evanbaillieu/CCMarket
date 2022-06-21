import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoWhite from '../svg/logoWhite.svg';
const Footer: FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <aside className="footer_menu">
                <ul>
                    <li>
                        <Link to="">{t('footer.home')}</Link>
                    </li>
                    <li>
                        <Link to="">{t('footer.projects')}</Link>
                    </li>
                    <li>
                        <Link to="">{t('footer.jobs')}</Link>
                    </li>
                    <li>
                        <Link to="">{t('footer.myaccount')}</Link>
                    </li>
                    <li>
                        <Link to="">{t('footer.messaging')}</Link>
                    </li>
                </ul>
            </aside>
            <aside className="footer_logo">
                <LogoWhite />
            </aside>
        </footer>
    );
};

export default Footer;
