import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IUser } from '../constant/Type/entity';
import useForm from '../hook/useForm';
import { register } from '../service/authService';
import { checkIsEmpty, checkIsNotEmpty } from '../helper/utilHelper';
import Inpute from '../components/input';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Registeur: FC = ({}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

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

    const submit = () => {
        if (checkIsEmpty(data) && !checkIsNotEmpty(errors)) {
            return;
        }

        if (veryfPassword === data.password) {
            console.log('se son les meme');
        }

        register(data).then((data) => {
            if (data) {
                navigate('/login');
            }
        });
    };

    return (
        <div>
            <section className="container_register">
                <aside className="container_register_title">
                    <h1 className="">Register</h1>
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
                            option={{
                                type: 'password',
                                name: 'password',
                                title: `register.password`,
                                error: errors.password,
                                validate: '',
                            }}
                            handleChange={hangleChange}
                            value={data.password}
                        />

                        <Inpute
                            option={{
                                type: 'password',
                                name: 'veryfPassword',
                                title: 'register.veryfPassword',
                                error: '',
                                validate: '',
                            }}
                            handleChange={handleChangePWD}
                            value={veryfPassword}
                        />
                    </div>

                    <div className="container_register_form_accept_conditions">
                        <input required type="checkbox" />
                        <label htmlFor="conditions_of_use">
                            <Link to="/">Accept condition of use</Link>
                        </label>
                    </div>
                    <div className="container_register_form_buttons">
                        <button className="btn btn-primary" onClick={submit}>
                            Register
                        </button>
                        <Link className="btn btn-grey" to={'/login'}>
                            Back To Login
                        </Link>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default Registeur;
