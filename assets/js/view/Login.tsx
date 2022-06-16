import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useForm from '../hook/useForm';
import { IAuth } from '../constant/Type/auth';
import { checkIsEmpty, checkIsNotEmpty } from '../helper/utilHelper';
import { login } from '../service/authService';
import Inpute from '../components/input';

const auth: IAuth = { email: '', password: '' };

const Login: FC = ({}) => {
    const { t } = useTranslation();
    const { data, errors, hangleChange } = useForm<IAuth>(auth);

    const submit = async () => {
        console.log(checkIsEmpty(data) && !checkIsNotEmpty(errors));
        if (checkIsEmpty(data) && !checkIsNotEmpty(errors)) {
            return;
        }
        login(data);
    };

    return (
        <div className="login">
            <div>
                <h3>{t('login.title')}</h3>
            </div>
            <div>
                <Inpute
                    name={'email'}
                    handleChange={hangleChange}
                    title={`login.email`}
                    error={errors.email}
                    value={data.email}
                />
                <Inpute
                    name={'password'}
                    handleChange={hangleChange}
                    title={`login.password`}
                    error={errors.password}
                    value={data.password}
                />
            </div>
            <a>Forgot password ?</a>
            <button className="btn_primary" onClick={submit}>
                se connecter
            </button>
            <button className="btn_gey">{"s'inscrire"}</button>
        </div>
    );
};

export default Login;
