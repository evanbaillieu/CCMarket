import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import profile from '../../img/test.png';
import Settings from './Settings';
import Account from './Account';

export default function Users() {
    const { t } = useTranslation();
    const [openSettings, setOpenSettings] = useState(false);

    const displayAccount = () => setOpenSettings(false);
    const displaySettings = () => setOpenSettings(true);

    return (
        <div>
            <div>
                <img src={profile} width={150} height={150} alt="Profile" />
                <h3>Axel Huon</h3>
                <ul>
                    <li onClick={displayAccount}>
                        {t('account.title')}
                    </li>
                    <li onClick={displaySettings}>
                        {t('account.settings')}
                    </li>
                    <li>
                        <Link to={'/logout'}>
                            {t('account.logout')}
                        </Link>
                    </li>
                </ul>
            </div>
            {openSettings ? <Settings /> : <Account />}
        </div>
    );
}
