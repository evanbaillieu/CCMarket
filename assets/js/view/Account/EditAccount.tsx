import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import profile from '../../img/test.png';

export default function EditAccount() {
    const { t } = useTranslation();
    return (
        <form className="edit-form">
            <h1>{t('account.edit')}</h1>
            <label htmlFor="profileImg">
                <img src={profile} width={150} height={150} alt="Profile" />
                <div id="transparent-black"></div>
                <span className="h6">Edit</span>
            </label>
            <input type="file" name="profileImg" id="profileImg" accept="image/*" />
            <div id="edit-inputs">
                <div className="grid-content">
                    <label htmlFor="firstName" className="h6 required">
                        {t('account.firstName')}
                    </label>
                    <input type="text" name="firstName" id="firstName" placeholder="John" required />
                </div>
                <div className="grid-content">
                    <label htmlFor="lastName" className="h6 required">
                        {t('account.lastName')}
                    </label>
                    <input type="text" name="lastName" id="lastName" placeholder="Doe" required />
                </div>
                <div className="grid-content">
                    <label htmlFor="email" className="h6 required">
                        {t('account.email')}
                    </label>
                    <input type="email" name="email" id="email" placeholder="john@doe.com" required />
                </div>
                <div className="grid-content">
                    <label htmlFor="birth" className="h6 required">
                        {t('account.birth')}
                    </label>
                    <input type="date" name="birth" id="birth" required />
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
