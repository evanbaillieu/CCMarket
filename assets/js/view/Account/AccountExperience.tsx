import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Inpute from '../../components/input';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { updatePassword } from '../../service/accountService';
import Oeil from '../../svg/oeil.svg';
import OeilFermer from '../../svg/oeilFermer.svg';
import Lang from '../../components/lang';

const AccountExperience: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="account-content">
            <h1>{t('account.settings')}</h1>
            <div id="account-settings">
                <div className="grid-content">
                    <label htmlFor="theme">{t('account.theme')}</label>
                    <select>
                        <option>{t('account.light')}</option>
                        <option>{t('account.dark')}</option>
                    </select>
                </div>
                <div className="grid-content">
                    <label htmlFor="language">{t('account.language')}</label>
                    <Lang />
                </div>
            </div>
        </div>
    );
};
export default AccountExperience;
