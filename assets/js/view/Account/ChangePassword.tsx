import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ChangePassword() {
    const { t } = useTranslation();
    return (
        <form className="edit-form">
            <h1>{t('account.changePassword')}</h1>
            <div id="change-password-inputs">
                <div className="grid-content">
                    <label htmlFor="currentPassword" className="h6 required">
                        {t('account.currentPassword')}
                    </label>
                    <input type="password" name="currentPassword" id="currentPassword" />
                </div>
                <div className="grid-content">
                    <label htmlFor="newPassword" className="h6 required">
                        {t('account.newPassword')}
                    </label>
                    <input type="password" name="newPassword" id="newPassword" />
                </div>
                <div className="grid-content">
                    <label htmlFor="confirmNewPassword" className="h6 required">
                        {t('account.confirmNewPassword')}
                    </label>
                    <input type="password" name="confirmNewPassword" id="confirmNewPassword" />
                </div>
            </div>
            <div className="edit-buttons">
                <Link to={'/account'} className="btn btn-cancel">
                    {t('account.cancel')}
                </Link>
                <button type="submit" className="btn btn-primary">
                    {t('account.save')}
                </button>
            </div>
        </form>
    );
}
