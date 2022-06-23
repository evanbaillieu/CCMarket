import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Inpute from '../../components/input';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { updatePassword } from '../../service/accountService';
import Oeil from '../../svg/oeil.svg';
import OeilFermer from '../../svg/oeilFermer.svg';

const ChangePassword: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isVisibleCurrentPass, setIsVisibleCurrentPass] = useState(false);
    const [isVisibleNewPass, setIsVisibleNewPass] = useState(false);
    const [isVisibleConfirmNewPass, setIsVisibleConfirmNewPass] = useState(false);

    const { data, errors, hangleChange } = useForm({
        newPassword: '',
    });
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChangeConfirmNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmNewPassword(e.target.value);
    };

    const handleChangeCurrentPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(e.target.value);
    };

    const submit = () => {
        setErrorMessage('');

        if (checkIsNotEmpty(data) && checkIsEmpty(errors) && confirmNewPassword) {
            if (confirmNewPassword === data.newPassword) {
                updatePassword(currentPassword, data.newPassword).then((response) => {
                    if (response.message === 'change success') navigate(-1);
                    else setErrorMessage(t('account.incorrectPassword'));
                });
            } else {
                setErrorMessage(t('account.passwordNotIdentical'));
            }
        } else {
            setErrorMessage(t('account.inputEmpty'));
        }
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
        <div className="form">
            <h1>{t('account.changePassword')}</h1>
            {errorMessage ? <p className="error-message">{errorMessage}</p> : ''}
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
                    handleChange={handleChangeCurrentPassword}
                    value={currentPassword}
                    onClick={changeVisbleCurrentPass}
                />

                <Inpute
                    svg={isVisibleNewPass ? <Oeil /> : <OeilFermer />}
                    option={{
                        type: isVisibleNewPass ? 'text' : 'password',
                        name: 'newPassword',
                        title: `account.newPassword`,
                        error: errors.newPassword,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.newPassword}
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
                    handleChange={handleChangeConfirmNewPassword}
                    value={confirmNewPassword}
                    onClick={changeVisbleConfirmNewPass}
                />
            </div>
            <div className="form-buttons">
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
