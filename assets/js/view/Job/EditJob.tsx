import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Inpute from '../../components/input';
import Textarea from '../../components/textarea';
import { IJob, IProfilType, IProject, ISource } from '../../constant/Type/entity';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { getMe } from '../../service/accountService';
import { getJob, updateJob } from '../../service/jobService';
import { getProfilTypeCollection } from '../../service/profilTypeService';
import { createGitHubSource, deleteGitHubSource, updateGitHubSource } from '../../service/sourceService';
import GitHub from '../../svg/github.svg';

const job: IJob = {
    title: '',
    abstract: '',
    description: '',
};

const EditJob: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { idJob } = useParams();
    const [projects, setProjects] = useState([]);
    const [profileTypes, setProfileTypes] = useState([]);
    const [selectedProject, setSelectedProject] = useState('');
    const [selectedProfileType, setSelectedProfileType] = useState<string>('');
    const [source, setSource] = useState<string>('');
    const [sourceId, setSourceId] = useState<string>('');
    const { data, errors, hangleChange, setInitialData } = useForm<IJob>(job);

    useEffect(() => {
        getMe().then((response) => {
            if (response.user) {
                setProjects(response.projects);
            } else navigate('/login');
        });

        getProfilTypeCollection().then((response) => {
            setProfileTypes(response);
        });

        getJob(idJob).then((response) => {
            setInitialData({
                title: response.title,
                description: response.description,
                abstract: response.abstract,
            });
            setSelectedProfileType(response.profilType.id);
            setSelectedProject(response.Project.id);
            response.sources.map((item: ISource) => {
                if (item.type === 'github') {
                    setSource(item.link.substring(19));
                    setSourceId(item.id);
                }
            });
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
            updateJob(idJob, data, '/api/profil_types/' + selectedProfileType, '/api/projects/' + selectedProject).then(
                (result: any) => {
                    if (result?.id) {
                        if (source) {
                            if (sourceId) {
                                updateGitHubSource(sourceId, {
                                    name: 'GitHub of ' + data.title,
                                    link: 'https://github.com/' + source,
                                    job: result['@id'],
                                });
                            } else {
                                createGitHubSource({
                                    type: 'github',
                                    name: 'GitHub of ' + data.title,
                                    link: 'https://github.com/' + source,
                                    job: result['@id'],
                                });
                            }
                        } else {
                            if (sourceId) {
                                deleteGitHubSource(sourceId);
                            }
                        }
                        navigate('/job/' + result.id);
                    }
                },
            );
        }
    };

    return (
        <div className="form">
            <h1>{t('job.edit')}</h1>
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
                <div className="input">
                    <label htmlFor="profileType">{t('job.profileType')}</label>
                    <select
                        name="profileType"
                        id="profileType"
                        value={selectedProfileType}
                        onChange={handleSelectProfileTypeChange}
                    >
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
                <div className="input">
                    <label htmlFor="project">{t('job.project')}</label>
                    <select name="project" id="project" value={selectedProject} onChange={handleSelectProjectChange}>
                        {projects.map((option: IProject) => (
                            <option value={option.id} key={option.id}>
                                {option.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

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
export default EditJob;
