import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Users() {
    const { t } = useTranslation();
    return (
        <form>
            <h1>{t('account.changePassword')}</h1>
            <div>
                <label htmlFor="currentPassword">{t('account.currentPassword')}</label>
                <input type="password" name="currentPassword" id="currentPassword" />
            </div>
            <div>
                <label htmlFor="newPassword">{t('account.newPassword')}</label>
                <input type="password" name="newPassword" id="newPassword" />
            </div>
            <div>
                <label htmlFor="confirmNewPassword">{t('account.confirmNewPassword')}</label>
                <input type="password" name="confirmNewPassword" id="confirmNewPassword" />
            </div>
            <Link to={'/account'}>{t('account.cancel')}</Link>
            <button type="submit">{t('account.save')}</button>
        </form>
    );
}
