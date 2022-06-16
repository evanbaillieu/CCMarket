import React from 'react';
import { useTranslation } from 'react-i18next';
import Lang from '../../components/lang';

export default function AccountSettings() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('account.settings')}</h1>
            <div>
                <label htmlFor="theme">{t('account.theme')}</label>
                <select>
                    <option>{t('account.light')}</option>
                    <option>{t('account.dark')}</option>
                </select>
            </div>
            <div>
                <label htmlFor="language">{t('account.language')}</label>
                <Lang />
            </div>
        </div>
    );
}
