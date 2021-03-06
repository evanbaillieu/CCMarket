import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useOutletContext } from 'react-router-dom';
import { IUser } from '../constant/Type/entity';
import profile from '../img/test.png';

interface Me {
    user: IUser;
}

const AccountInfos: FC = () => {
    const { t } = useTranslation();
    const me: Me = useOutletContext();

    return (
        <div className="account-content">
            <h1>{t('account.title')}</h1>
            <img src={profile} width={150} height={150} alt={t('profileImage')} />
            <div id="account-infos">
                <div className="grid-content">
                    <h6>{t('account.firstName')}</h6>
                    <p>{me.user.firstName}</p>
                </div>
                <div className="grid-content">
                    <h6>{t('account.lastName')}</h6>
                    <p>{me.user.lastName}</p>
                </div>
                <div className="grid-content">
                    <h6>{t('account.email')}</h6>
                    <p>{me.user.email}</p>
                </div>
                <div className="grid-content">
                    <h6>{t('account.dateOfBirth')}</h6>
                    <p>{new Date(me.user.dateOfBirth).toLocaleDateString()}</p>
                </div>
            </div>

            <Link className="btn btn-primary" to={'/account/edit'}>
                {t('account.edit')}
            </Link>
            <Link className="btn btn-primary" to={'/account/password'}>
                {t('account.changePassword')}
            </Link>
        </div>
    );
};
export default AccountInfos;
