import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Inpute from '../../components/input';
import { checkIsEmpty, checkIsNotEmpty, getTokken } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { getMe, updatePassword } from '../../service/accountService';
import Oeil from '../../svg/oeil.svg';
import OeilFermer from '../../svg/oeilFermer.svg';

const ChangePassword: FC = () => {
    const { t } = useTranslation();
    const [isVisibleCurrentPass, setIsVisibleCurrentPass] = useState(false);
    const [isVisibleNewPass, setIsVisibleNewPass] = useState(false);
    const [isVisibleConfirmNewPass, setIsVisibleConfirmNewPass] = useState(false);

    const { data, errors, hangleChange } = useForm({
        password: '',
    });

    const [userId, setUserId] = useState<string>();

    useEffect(() => {
        getMe(getTokken()).then((response) => {
            setUserId(response.user.id);
        });
    }, []);

    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
    const [currentPassword, setCurrentPassword] = useState<string>('');

    const handleChangePWD = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmNewPassword(e.target.value);
    };

    const handleChangeCurrentPWD = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(e.target.value);
    };

    const submit = () => {
        if (checkIsEmpty(data) && !checkIsNotEmpty(errors)) {
            return;
        }

        if (confirmNewPassword === data.password) {
            console.log('se son les meme');
        }

        updatePassword(getTokken(), userId, data.password);
    };

    const changeVisbleCurrentPass = () => {
        setIsVisibleCurrentPass((current) => !current);
    };

    const changeVisbleNewPass = () => {
        setIsVisibleNewPass((current) => !current);
    };

    const changeVisbleConfirmNewPass = () => {
        setIsVisibleConfirmNewPass((current) => !current);
    };

    return (
        <div className="edit-form">
            <h1>{t('account.changePassword')}</h1>
            <div id="change-password-inputs">
                <Inpute
                    svg={isVisibleCurrentPass ? <Oeil /> : <OeilFermer />}
                    option={{
                        type: isVisibleCurrentPass ? 'text' : 'password',
                        name: 'currentPassword',
                        title: `account.currentPassword`,
                        error: '',
                        validate: '',
                    }}
                    handleChange={handleChangeCurrentPWD}
                    value={currentPassword}
                    onClick={changeVisbleCurrentPass}
                />

                <Inpute
                    svg={isVisibleNewPass ? <Oeil /> : <OeilFermer />}
                    option={{
                        type: isVisibleNewPass ? 'text' : 'password',
                        name: 'password',
                        title: `account.newPassword`,
                        error: errors.password,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.password}
                    onClick={changeVisbleNewPass}
                />

                <Inpute
                    svg={isVisibleConfirmNewPass ? <Oeil /> : <OeilFermer />}
                    option={{
                        type: isVisibleConfirmNewPass ? 'text' : 'password',
                        name: 'confirmNewPassword',
                        title: `account.confirmNewPassword`,
                        error: '',
                        validate: '',
                    }}
                    handleChange={handleChangePWD}
                    value={confirmNewPassword}
                    onClick={changeVisbleConfirmNewPass}
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
export default ChangePassword;
