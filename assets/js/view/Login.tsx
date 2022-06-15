import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useForm from '../hook/useForm';
import { IAuth } from '../constant/Type/auth';
import { checkIsEmpty, checkIsNotEmpty } from '../helper/utilHelper';
import { login } from '../service/authService';

const Login: FC = ({}) => {
    const { t } = useTranslation();
    const { data, errors, hangleChange } = useForm<IAuth>({ email: '', password: '' });

    const submit = () => {
        console.log(checkIsEmpty(data) && !checkIsNotEmpty(errors));
        if (checkIsEmpty(data) && !checkIsNotEmpty(errors)) {
            return;
        }
        login(data);
    };

    return (
        <div>
            <div>
                <h1>{t('login.title')}</h1>
            </div>
            <div>
                <label>{t('login.email')}</label>
                <input type="email" onChange={hangleChange} name="email" value={data.email} />
                {errors?.email && <h6>{t(errors.email)}</h6>}
            </div>
            <div>
                <label>{t('login.password')}</label>
                <input type="password" onChange={hangleChange} name="password" value={data.password} />
                {errors?.password && <h6>{t(errors.password)}</h6>}
            </div>
            <button onClick={submit}>se connecter</button>
            <button>{"s'inscrire"}</button>
        </div>
    );
};

export default Login;
