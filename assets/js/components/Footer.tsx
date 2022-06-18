import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoWhite from '../svg/LogoWhite.svg';

const Footer: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <nav className="nav_Footer">
                <ul>
                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/posts'}>
                            {t('Home')}
                        </Link>
                    </li>

                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/users'}>
                            {t('Projects')}
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/jobs'}>
                            {t('Jobs')}
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link className={'nav_link'} to={'/users'}>
                            {t('My account')}
                        </Link>
                    </li>
                </ul>
            </nav>

            <span className="LogoWhite">
                <LogoWhite />
            </span>
        </div>
    );
};

export default Footer;
