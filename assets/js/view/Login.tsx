import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useForm from '../hook/useForm';
import { IAuth } from '../constant/Type/auth';
import { checkIsEmpty, checkIsNotEmpty } from '../helper/utilHelper';
import { login } from '../service/authService';
import Inpute from '../components/input';
import Oeil from '../svg/oeil.svg';
import OeilFermer from '../svg/oeilFermer.svg';
import Arobase from '../svg/arobase.svg';

const auth: IAuth = { email: '', password: '' };

const Login: FC = ({}) => {
    const { t } = useTranslation();
    const { data, errors, hangleChange } = useForm<IAuth>(auth);
    const [isActivate, setIsActivate] = useState(false);

    const submit = async () => {
        console.log(checkIsEmpty(data) && !checkIsNotEmpty(errors));
        if (checkIsEmpty(data) && !checkIsNotEmpty(errors)) {
            return;
        }
        login(data);
    };

    const changeVisble = () => {
        setIsActivate((current) => !current);
    };

    return (
        <div className="container_login">
            <div className="container_login_box">
                <div className="container_login_box_title">
                    <h3>{t('login.title')}</h3>
                </div>
                <div className="container_login_box_form">
                    <Inpute
                        svg={<Arobase />}
                        option={{
                            type: 'email',
                            name: 'email',
                            title: `login.email`,
                            error: errors.email,
                            validate: '',
                        }}
                        handleChange={hangleChange}
                        value={data.email}
                    />
                    <Inpute
                        svg={isActivate ? <Oeil /> : <OeilFermer />}
                        option={{
                            name: 'password',
                            title: `login.password`,
                            error: errors.password,
                            validate: '',
                            type: isActivate ? 'text' : 'password',
                        }}
                        handleChange={hangleChange}
                        value={data.password}
                        onClick={changeVisble}
                    />
                </div>
                <div className="container_login_box_forgot_password">
                    <a>Forgot password ?</a>
                </div>
                <div className="container_login_box_buttons">
                    <button className="btn btn-primary" onClick={submit}>
                        {t('login.btnlogin')}
                    </button>
                    <button className="btn btn-grey">{t('login.btnregister')}</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
