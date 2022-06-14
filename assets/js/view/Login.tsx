import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login: FC = ({}) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const hangleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const hangleChangePWD = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <form>
            <div>
                <h1>{t('login.title')}</h1>
            </div>
            <div>
                <label>{t('login.email')}</label>
                <input type="email" onChange={hangleChangeEmail} name="email" value={email} />
            </div>
            <div>
                <label>{t('login.password')}</label>
                <input type="password" onChange={hangleChangePWD} name="password" value={password} />
            </div>
            <button></button>
            <button></button>
        </form>
    );
};

export default Login;
