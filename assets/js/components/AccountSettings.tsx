import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Lang from './lang';

const AccountSettings: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="account-content">
            <h1>{t('account.settings')}</h1>
            <div id="account-settings">
                <div className="grid-content">
                    <label htmlFor="theme">{t('account.theme')}</label>
                    <select>
                        <option>{t('account.light')}</option>
                        <option>{t('account.dark')}</option>
                    </select>
                </div>
                <div className="grid-content">
                    <label htmlFor="language">{t('account.language')}</label>
                    <Lang />
                </div>
            </div>
        </div>
    );
};
export default AccountSettings;
