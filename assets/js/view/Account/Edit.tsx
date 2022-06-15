import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Users() {
    const { t } = useTranslation();
    return (
        <form>
            <h1>{t('account.edit')}</h1>
            <div>
                <label htmlFor="firstName">{t('account.firstName')}</label>
                <input type="text" name="firstName" id="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">{t('account.lastName')}</label>
                <input type="text" name="lastName" id="lastName" />
            </div>
            <div>
                <label htmlFor="email">{t('account.email')}</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="birth">{t('account.birth')}</label>
                <input type="date" name="birth" id="birth" />
            </div>
            <div>
                <label htmlFor="profileImg">{t('account.profileImg')}</label>
                <input type="file" name="profileImg" id="profileImg" />
            </div>
            <Link to={'/account'}>
                {t('account.cancel')}
            </Link>
            <button type="submit">{t('account.save')}</button>
        </form>
    );
}
