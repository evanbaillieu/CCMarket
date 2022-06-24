import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Inpute from '../../components/input';
import Textarea from '../../components/textarea';
import { IExperiance } from '../../constant/Type/entity';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { getMe } from '../../service/accountService';
import { getExperience, updateExperience } from '../../service/experienceService';

const experience: IExperiance = {
    title: '',
    abstract: '',
    startDate: '',
};

const EditExperience: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { idExperience } = useParams();
    const { data, errors, hangleChange, setInitialData } = useForm<IExperiance>(experience);

    useEffect(() => {
        getMe().then((response) => {
            if (!response.user) navigate('/login');
        });

        getExperience(idExperience).then((response) => {
            setInitialData({
                title: response.title,
                abstract: response.abstract,
                startDate: response.startDate.substring(0, 10),
                endDate: response?.endDate?.substring(0, 10),
            });
        });
    }, []);

    const submit = async () => {
        if (checkIsNotEmpty(data) && checkIsEmpty(errors)) {
            updateExperience(idExperience, data).then((result) => {
                if (result.id) {
                    navigate('/account/experiences');
                }
            });
        }
    };

    return (
        <div className="form">
            <h1>{t('experience.edit')}</h1>
            <div id="edit-experience-inputs">
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
export default EditExperience;
