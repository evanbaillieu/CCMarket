import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useOutlet } from 'react-router-dom';
import profile from '../../img/test.png';

export default function Account() {
    const { t } = useTranslation();
    const outlet = useOutlet();

    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
    });

    const getNavLinkClass = (path: string) => {
        return window.location.pathname === path ? 'active' : '';
    };

    return (
        <div id="account">
            <div className="sidebar">
                <img src={profile} width={150} height={150} alt="Profile" />
                <h3>{user.firstName + ' ' + user.lastName}</h3>
                <ul>
                    <li>
                        <Link to={'/account'} className={getNavLinkClass('/account')}>
                            {t('account.title')}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/account/settings'} className={getNavLinkClass('/account/settings')}>
                            {t('account.settings')}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/logout'}>{t('account.logout')}</Link>
                    </li>
                </ul>
            </div>
            {outlet}
        </div>
    );
}
