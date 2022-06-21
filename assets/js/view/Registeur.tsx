import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IUser } from '../constant/Type/entity';
import useForm from '../hook/useForm';
import { register } from '../service/authService';
import { checkIsEmpty, checkIsNotEmpty } from '../helper/utilHelper';
import Inpute from '../components/input';

const Registeur: FC = ({}) => {
    const { t } = useTranslation();

    const { data, errors, hangleChange } = useForm<IUser>({
        firstname: '',
        lastname: '',
        email: '',
        dateDeNaisance: '',
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

        register(data);
    };

    return (
        <div>
            <h1 className="">Register</h1>
            <div>
                <Inpute
                    option={{
                        type: 'text',
                        name: 'firstname',
                        title: 'register.firstname',
                        error: errors.firstname,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.firstname}
                />

                <Inpute
                    option={{
                        type: 'text',
                        name: 'lastname',
                        title: `register.lastname`,
                        error: errors.lastname,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.lastname}
                />

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
                        name: 'dateDeNaisance',
                        title: `register.dateDeNaisance`,
                        error: errors.dateDeNaisance,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.dateDeNaisance}
                />

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
                        title: `register.veryfPassword`,
                        error: '',
                        validate: '',
                    }}
                    handleChange={handleChangePWD}
                    value={veryfPassword}
                />
                <button onClick={submit}>sinscrire</button>
            </div>
        </div>
    );
};

export default Registeur;
