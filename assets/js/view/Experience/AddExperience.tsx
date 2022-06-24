import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Inpute from '../../components/input';
import Textarea from '../../components/textarea';
import { IExperiance } from '../../constant/Type/entity';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { getMe } from '../../service/accountService';
import { addExperience } from '../../service/experienceService';

const experience: IExperiance = {
    title: '',
    abstract: '',
    startDate: '',
};

const AddExperience: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [user, setUser] = useState<string>('');
    const { data, errors, hangleChange } = useForm<IExperiance>(experience);

    useEffect(() => {
        getMe().then((response) => {
            if (response.user) setUser('/api/users/' + response.user.id);
            else navigate('/login');
        });
    }, []);

    const submit = async () => {
        if (checkIsNotEmpty(data) && checkIsEmpty(errors) && user) {
            addExperience(data, user).then((result) => {
                if (result.id) {
                    navigate('/account/experiences');
                }
            });
        }
    };

    return (
        <div className="form">
            <h1>{t('experience.add')}</h1>
            <div id="add-experience-inputs">
                <Inpute
                    option={{
                        type: 'text',
                        name: 'title',
                        title: `experience.title`,
                        error: errors.title,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.title}
                />
                <Textarea
                    option={{
                        name: 'abstract',
                        title: `experience.abstract`,
                        error: errors.abstract,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.abstract}
                />
                <Inpute
                    option={{
                        type: 'date',
                        name: 'startDate',
                        title: `experience.startDate`,
                        error: errors.startDate,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.startDate}
                />
                <Inpute
                    option={{
                        type: 'date',
                        name: 'endDate',
                        title: `experience.endDate`,
                        error: '',
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.endDate}
                />
            </div>

            <div className="form-buttons">
                <Link to={'/account/experiences'} className="btn btn-cancel">
                    {t('experience.cancel')}
                </Link>
                <button className="btn btn-primary" onClick={submit}>
                    {t('experience.save')}
                </button>
            </div>
        </div>
    );
};
export default AddExperience;
