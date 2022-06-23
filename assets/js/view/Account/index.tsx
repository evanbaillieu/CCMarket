import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useOutlet } from 'react-router-dom';
import profile from '../../img/test.png';
import { getMe } from '../../service/accountService';
import { logout } from '../../store/reducer/settingReducer';
import { useAppDispatch } from '../../store/store';

const Account: FC = () => {
    const { t } = useTranslation();
    const [me, setMe] = useState({
        user: {
            firstName: '',
            lastName: '',
        },
    });
    const outlet = useOutlet(me);
    const navigate = useNavigate();
    const AppDispatch = useAppDispatch();

    useEffect(() => {
        getMe().then((response) => {
            if (response.user) setMe(response);
            else navigate('/login');
        });
    }, []);

    const getNavLinkClass = (path: string) => {
        return window.location.pathname === path ? 'active' : '';
    };

    const accountLogout = () => {
        AppDispatch(logout());
        window.localStorage.removeItem('auth-cmarket');
    };

    return (
        <div id="account-container">
            <div id="account-sidebar">
                <img src={profile} width={150} height={150} alt={t('profileImage')} />
                <h3>{me.user.firstName + ' ' + me.user.lastName}</h3>
                <ul>
                    <li>
                        <Link to={'/account'} className={getNavLinkClass('/account')}>
                            {t('account.title')}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/account/settings'} className={getNavLinkClass('/account/settings')}>
                            {t('account.settings')}
                        </Link>
                    </li>{' '}
                    <li>
                        <Link to={'/account/experiences'} className={getNavLinkClass('/account/experiences')}>
                            {t('account.experiences')}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} onClick={accountLogout}>
                            {t('account.logout')}
                        </Link>
<<<<<<< HEAD
                    </li>
                    <li>
                        <Link to={'/experiences'}>{t('account.logout')}</Link>
                    </li>
=======
                    </li>{' '}
>>>>>>> b07aae6 (core(front):Experience)
                </ul>
            </div>
            {outlet}
        </div>
    );
};
export default Account;
