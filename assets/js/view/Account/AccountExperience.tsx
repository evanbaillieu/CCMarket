import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import Inpute from '../../components/input';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { getMe, updatePassword } from '../../service/accountService';
import Oeil from '../../svg/oeil.svg';
import OeilFermer from '../../svg/oeilFermer.svg';
import Lang from '../../components/lang';
import { IExperiance, IProject, IUser } from '../../constant/Type/entity';
import CardExperience from '../../components/cardExperience';

const AccountExperience: FC = () => {
    const { t } = useTranslation();
    const user: IUser = useOutletContext();
    const [experiences, setExperiences] = useState<IExperiance[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        getMe().then((response) => {
            if (response.user) {
                setExperiences(response.experiences);
            } else {
                navigate('/login');
            }
        });
    }, []);

    console.log(experiences);

    return (
        <div className="account-content">
            {experiences.map((exp) => (
                <div>
                    <CardExperience
                        key={exp.id}
                        id={exp.id}
                        title={exp.title}
                        abstract={exp.abstract}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                    />
                </div>
            ))}
        </div>
    );
};
export default AccountExperience;
