import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Inpute from '../components/input';
import { IUser } from '../constant/Type/entity';
import { checkIsEmpty, checkIsNotEmpty } from '../helper/utilHelper';
import useForm from '../hook/useForm';
import { register } from '../service/authService';
import Oeil from '../svg/oeil.svg';
import OeilFermer from '../svg/oeilFermer.svg';

const Register: FC = ({}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isActivate, setIsActivate] = useState(false);
    const [isActivateConf, setIsActivateConf] = useState(false);
    const { data, errors, hangleChange } = useForm<IUser>({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        password: '',
    });
    const [veryfPassword, setVeryfPassword] = useState<string>('');

    const handleChangePWD = (e: ChangeEvent<HTMLInputElement>) => {
        setVeryfPassword(e.target.value);
    };

    const changeVisble = () => {
        setIsActivate((current) => !current);
    };

    const changeVisbleConf = () => {
        setIsActivateConf((current) => !current);
    };

    const submit = () => {
        if (checkIsEmpty(data) && !checkIsNotEmpty(errors)) {
            return;
        }

        if (veryfPassword === data.password) {
            register(data).then((data) => {
                if (data) {
                    navigate('/login');
                }
            });
        }
    };

    return (
        <div>
            <section className="container_register">
                <aside className="container_register_title">
                    <h1>{t('register.title')}</h1>
                </aside>
                <aside className="container_register_form">
                    <div className="container_register_form_row">
                        <Inpute
                            option={{
                                type: 'text',
                                name: 'firstName',
                                title: 'register.firstName',
                                error: errors.firstName,
                                validate: '',
                            }}
                            handleChange={hangleChange}
                            value={data.firstName}
                        />

                        <Inpute
                            option={{
                                type: 'text',
                                name: 'lastName',
                                title: `register.lastName`,
                                error: errors.lastName,
                                validate: '',
                            }}
                            handleChange={hangleChange}
                            value={data.lastName}
                        />
                    </div>
                    <div className="container_register_form_row">
                        <Inpute
                            option={{
                                type: 'email',
                                name: 'email',
                                title: `register.email`,
                                error: errors.email,
                                validate: '',
                            }}
                            handleChange={hangleChange}
                            value={data.email}
                        />
                        <Inpute
                            option={{
                                type: 'date',
                                name: 'dateOfBirth',
                                title: `register.dateOfBirth`,
                                error: errors.dateOfBirth,
                                validate: '',
                            }}
                            handleChange={hangleChange}
                            value={data.dateOfBirth}
                        />
                    </div>
                    <div className="container_register_form_row">
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

                        <Inpute
                            svg={isActivateConf ? <Oeil /> : <OeilFermer />}
                            option={{
                                name: 'veryfPassword',
                                title: `login.veryfPassword`,
                                error: '',
                                validate: '',
                                type: isActivateConf ? 'text' : 'password',
                            }}
                            handleChange={handleChangePWD}
                            value={veryfPassword}
                            onClick={changeVisbleConf}
                        />
                    </div>

                    <div className="container_register_form_accept_conditions">
                        <input required type="checkbox" />
                        <label htmlFor="conditions_of_use">
                            <Link to="/">{t('register.terms')}</Link>
                        </label>
                    </div>
                    <div className="container_register_form_buttons">
                        <button className="btn btn-primary" onClick={submit}>
                            {t('register.btnregister')}
                        </button>
                        <Link className="btn btn-grey" to={'/login'}>
                            {t('register.btnlogin')}
                        </Link>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default Register;
