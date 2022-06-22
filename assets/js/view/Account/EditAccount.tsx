import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Inpute from '../../components/input';
import { IUser } from '../../constant/Type/entity';
import { checkIsEmpty, checkIsNotEmpty, getTokken } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import profile from '../../img/test.png';
import { getMe, updateUser } from '../../service/accountService';

const user: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
};

const EditAccount: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { data, errors, hangleChange, setInitialData } = useForm<IUser>(user);
    const [userId, setUserId] = useState<string>();

    useEffect(() => {
        getMe(getTokken()).then((response) => {
            setUserId(response.user.id);
            setInitialData({
                firstName: response.user.firstName,
                lastName: response.user.lastName,
                email: response.user.email,
                dateOfBirth: response.user.dateOfBirth.substring(0, 10),
            });
        });
    }, []);

    const submit = async () => {
        if (checkIsNotEmpty(data) && checkIsEmpty(errors)) {
            updateUser(getTokken(), userId, data).then((result) => {
                if (result) navigate('/account');
            });
        }
    };

    return (
        <div className="edit-form">
            <h1>{t('account.edit')}</h1>
            <label htmlFor="profileImg">
                <img src={profile} width={150} height={150} alt="Profile" />
                <div id="transparent-black"></div>
                <span>Edit</span>
            </label>
            <input type="file" name="profileImg" id="profileImg" accept="image/*" />
            <div id="edit-inputs">
                <Inpute
                    option={{
                        type: 'text',
                        name: 'firstName',
                        title: `account.firstName`,
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
                        title: `account.lastName`,
                        error: errors.lastName,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.lastName}
                />
                <Inpute
                    option={{
                        type: 'email',
                        name: 'email',
                        title: `account.email`,
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
                        title: `account.dateOfBirth`,
                        error: errors.dateOfBirth,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.dateOfBirth}
                />
            </div>

            <div className="edit-buttons">
                <Link to={'/account'} className="btn btn-cancel">
                    {t('account.cancel')}
                </Link>
                <button className="btn btn-primary" onClick={submit}>
                    {t('account.save')}
                </button>
            </div>
        </div>
    );
};
export default EditAccount;
