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
                {/*     <Inpute
                    option={{ name: 'fisrtname', title: 'register.lastname', error: errors.firstname }}
                    handleChange={hangleChange}
                    value={data.firstname}
                />

                <Inpute
                    option={{
                        name: 'lastname',
                        title: `register.lastname`,
                        error: errors.lastname,
                    }}
                    handleChange={hangleChange}
                    value={data.lastname}
                />

                <Inpute
                    option={{
                        name: 'email',
                        title: `register.email`,
                        error: errors.email,
                    }}
                    handleChange={hangleChange}
                    value={data.email}
                />
                <Inpute
                    option={{
                        name: 'dateDeNaisance',
                        title: `register.dateDeNaisance`,
                        error: errors.dateDeNaisance,
                    }}
                    handleChange={hangleChange}
                    value={data.dateDeNaisance}
                />

                <Inpute
                    option={{
                        name: 'password',
                        title: `register.password`,
                        error: errors.password,
                    }}
                    handleChange={hangleChange}
                    value={data.password}
                />
                */}
                <div>
                    <label>{t('register.veryfPassword')}</label>
                    <input type="password" onChange={handleChangePWD} name="veryfPassword" value={veryfPassword} />
                </div>
                <button onClick={submit}>sinscrire</button>
            </div>
        </div>
    );
};

export default Registeur;
