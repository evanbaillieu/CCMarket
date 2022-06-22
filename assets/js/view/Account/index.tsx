import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useOutlet } from 'react-router-dom';
import { getMe } from '../../service/accountService';
import { getTokken } from '../../helper/utilHelper';
import profile from '../../img/test.png';
import { IUser } from '../../constant/Type/entity';
import { useAppDispatch } from '../../store/store';
import { logout } from '../../store/reducer/settingReducer';

const Account: FC = () => {
    const { t } = useTranslation();
    const [user, setUser] = useState<IUser>({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
    });
    const outlet = useOutlet(user);
    const AppDispatch = useAppDispatch();

    useEffect(() => {
        getMe(getTokken()).then((response) => {
            setUser({ ...response.user });
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
                <img src={profile} width={150} height={150} alt="Profile" />
                <h3>{user.firstName + ' ' + user.lastName}</h3>
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
