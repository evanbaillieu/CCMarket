import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useOutlet } from 'react-router-dom';
import profile from '../../img/test.png';
import AccountInfos from './AccountInfos';

export default function Users() {
    const { t } = useTranslation();
    const outlet = useOutlet();

    return (
        <div>
            <div>
                <img src={profile} width={150} height={150} alt="Profile" />
                <h3>Axel Huon</h3>
                <ul>
                    <li>
                        <Link to={'/account'}>{t('account.title')}</Link>
                    </li>
                    <li>
                        <Link to={'/account/settings'}>{t('account.settings')}</Link>
                    </li>
                    <li>
                        <Link to={'/logout'}>{t('account.logout')}</Link>
                    </li>
                </ul>
            </div>
            {outlet ?? <AccountInfos />}
        </div>
    );
}
