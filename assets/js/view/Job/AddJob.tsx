import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Inpute from '../../components/input';
import Textarea from '../../components/textarea';
import { IJob, IProfilType, IProject } from '../../constant/Type/entity';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { getMe } from '../../service/accountService';
import { addJob } from '../../service/jobService';
import { findAll } from '../../service/profilTypeService';
import { createGitHubSource } from '../../service/sourceService';
import GitHub from '../../svg/github.svg';

const job: IJob = {
    title: '',
    abstract: '',
    description: '',
};

const AddJob: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [profileTypes, setProfileTypes] = useState([]);
    const [selectedProject, setSelectedProject] = useState('');
    const [selectedProfileType, setSelectedProfileType] = useState<string>('');
    const [source, setSource] = useState<string>('');
    const { data, errors, hangleChange } = useForm<IJob>(job);

    useEffect(() => {
        getMe().then((response) => {
            if (response.user) {
                setProjects(response.projects);
                setSelectedProject(response.projects[0].id);
            } else navigate('/login');
        });
        findAll().then((response) => {
            setProfileTypes(response);
            setSelectedProfileType(response[0].id);
        });
    }, []);

    const handleSelectProfileTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProfileType(e.target.value);
    };

    const handleGitHubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSource(e.target.value);
    };

    const handleSelectProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProject(e.target.value);
    };

    const submit = async () => {
        if (checkIsNotEmpty(data) && checkIsEmpty(errors)) {
            addJob(data, '/api/profil_types/' + selectedProfileType, '/api/projects/' + selectedProject).then(
                (result) => {
                    if (result.id) {
                        if (source) {
                            createGitHubSource({
                                type: 'github',
                                name: 'GitHub of ' + data.title,
                                link: 'https://github.com/' + source,
                                job: result['@id'],
                            });
                            navigate('/job/' + result.id);
                        } else navigate('/job/' + result.id);
                    }
                },
            );
        }
    };

    return (
        <div className="form">
            <h1>{t('job.add')}</h1>
            <div id="add-job-inputs">
                <Inpute
                    option={{
                        type: 'text',
                        name: 'title',
                        title: `job.title`,
                        error: errors.title,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.title}
                />
                <Textarea
                    option={{
                        name: 'abstract',
                        title: `job.abstract`,
                        error: errors.abstract,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.abstract}
                />
                <Textarea
                    option={{
                        name: 'description',
                        title: `job.description`,
                        error: errors.description,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.description}
                />
                <div>
                    <label htmlFor="profileType">{t('job.profileType')}</label>
                    <select name="profileType" id="profileType" onChange={handleSelectProfileTypeChange}>
                        {profileTypes.map((option: IProfilType) => (
                            <option value={option.id} key={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <Inpute
                    svg={<GitHub />}
                    option={{
                        type: 'text',
                        name: 'github',
                        title: `github`,
                        error: '',
                        validate: '',
                    }}
                    handleChange={handleGitHubChange}
                    value={source}
                />
                <div>
                    <label htmlFor="project">{t('job.project')}</label>
                    <select name="project" id="project" onChange={handleSelectProjectChange}>
                        {projects.map((option: IProject) => (
                            <option value={option.id} key={option.id}>
                                {option.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-buttons">
                <Link to={'/account/jobs'} className="btn btn-cancel">
                    {t('account.cancel')}
                </Link>
                <button className="btn btn-primary" onClick={submit}>
                    {t('account.save')}
                </button>
            </div>
        </div>
    );
};
export default AddJob;
