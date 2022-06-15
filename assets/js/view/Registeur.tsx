import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IUser } from '../constant/Type/entity';
import useForm from '../hook/useForm';
import { register } from '../service/authService';
import { checkIsEmpty, checkIsNotEmpty } from '../helper/utilHelper';

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
                <div>
                    <label className={`${errors?.firstname ? 'error' : ''}`}>{t('register.firstname')}</label>
                    <input type="text" onChange={hangleChange} name="firstname" value={data.firstname} />
                    {errors?.firstname ? <h6>{t(errors.firstname)}</h6> : <></>}
                </div>

                <div>
                    <label>{t('register.lastname')}</label>
                    <input type="text" onChange={hangleChange} name="lastname" value={data.lastname} />
                    {errors?.lastname && <h6>{errors.lastname}</h6>}
                </div>

                <div>
                    <label>{t('register.email')}</label>
                    <input type="email" onChange={hangleChange} name="email" value={data.email} />
                    {errors?.email && <h3>{errors.email}</h3>}
                </div>

                <div>
                    <label>{t('register.dateDeNaisance')}</label>
                    <input type="date" onChange={hangleChange} name="dateDeNaisance" value={data.dateDeNaisance} />
                    {errors?.dateDeNaisance && <h3>{errors.dateDeNaisance}</h3>}
                </div>

                <div>
                    <label>{t('register.password')}</label>
                    <input type="password" onChange={hangleChange} name="password" value={data.password} />
                    {errors?.password && <h3>{errors.password}</h3>}
                </div>

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
