import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoWhite from '../img/LogoWhite.png';
//import LogoWhite from '../svg/LogoWhite.svg';

const Footer: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <nav className="nav_Footer">
                <ul>
                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/posts'}>
                            {t('footer.home')}
                        </Link>
                    </li>

                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/users'}>
                            {t('footer.projects')}
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/jobs'}>
                            {t('footer.jobs')}
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/users'}>
                            {t('footer.myaccount')}
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/users'}>
                            {t('footer.messaging')}
                        </Link>
                    </li>
                </ul>
                <span>
                    <img src={LogoWhite} className="logoWhiteFooter" alt="logoWhiteFooter" />
                </span>
            </nav>
        </div>
    );
};

export default Footer;
