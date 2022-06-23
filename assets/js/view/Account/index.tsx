import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Circles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useNavigate, useOutlet } from 'react-router-dom';
import profile from '../../img/test.png';
import { getMe } from '../../service/accountService';
import { logout } from '../../store/reducer/settingReducer';
import { useAppDispatch } from '../../store/store';

const Account: FC = () => {
    const { t } = useTranslation();
    const { isError, isLoading, data } = useQuery('User-infos', getMe);
    const outlet = useOutlet(data?.user);
    const navigate = useNavigate();
    const AppDispatch = useAppDispatch();

    if (data?.code === 401) {
        navigate('/login');
    }

    if (isError) {
        navigate('/login');
    }

    if (isLoading) {
        return <Circles color="#F05454" />;
    }

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
                <h3>{data?.user?.firstName + ' ' + data?.user?.lastName}</h3>
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
                    </li>
                    <li>
                        <Link to={'/'} onClick={accountLogout}>
                            {t('account.logout')}
                        </Link>
                    </li>
                </ul>
            </div>
            {outlet}
        </div>
    );
};
export default Account;
