import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function AccountInfos() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('account.title')}</h1>
            <div>
                <p>{t('account.firstName')}</p>
                <p>Axel</p>
            </div>
            <div>
                <p>{t('account.lastName')}</p>
                <p>Huon</p>
            </div>
            <div>
                <p>{t('account.email')}</p>
                <p>axelhuon.pro@gmail.com</p>
            </div>
            <div>
                <p>{t('account.birth')}</p>
                <p>08/09/22</p>
            </div>
            <Link to={'/account/edit'}>{t('account.edit')}</Link>
            <Link to={'/account/password'}>{t('account.changePassword')}</Link>
        </div>
    );
}
