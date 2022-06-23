import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Inpute from '../../components/input';
import Textarea from '../../components/textarea';
import { ICategory, IProject, ISource } from '../../constant/Type/entity';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { getMe } from '../../service/accountService';
import { getCategoryCollection } from '../../service/categoryService';
import { getProject, updateProject } from '../../service/projectService';
import { createGitHubSource, deleteGitHubSource, updateGitHubSource } from '../../service/sourceService';
import GitHub from '../../svg/github.svg';

const project: IProject = {
    title: '',
    abstract: '',
    description: '',
};

const EditProject: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { idProject } = useParams();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [source, setSource] = useState<string>('');
    const [sourceId, setSourceId] = useState<string>('');
    const { data, errors, hangleChange, setInitialData } = useForm<IProject>(project);

    useEffect(() => {
        getMe().then((response) => {
            if (!response.user) navigate('/login');
        });

        getCategoryCollection().then((response) => {
            setCategories(response);
        });

        getProject(idProject).then((response) => {
            setInitialData({
                title: response.title,
                description: response.description,
                abstract: response.abstract,
            });
            setSelectedCategory(response.category.id);
            response.source.map((item: ISource) => {
                if (item.type === 'github') {
                    setSource(item.link.substring(19));
                    setSourceId(item.id);
                }
            });
        });
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const handleGitHubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSource(e.target.value);
    };

    const submit = async () => {
        if (checkIsNotEmpty(data) && checkIsEmpty(errors) && selectedCategory) {
            updateProject(idProject, data, '/api/categories/' + selectedCategory).then((result) => {
                if (result.id) {
                    if (source) {
                        if (sourceId) {
                            updateGitHubSource(sourceId, {
                                name: 'GitHub of ' + data.title,
                                link: 'https://github.com/' + source,
                                projects: [result['@id']],
                            });
                        } else {
                            createGitHubSource({
                                type: 'github',
                                name: 'GitHub of ' + data.title,
                                link: 'https://github.com/' + source,
                                projects: [result['@id']],
                            });
                        }
                    } else {
                        if (sourceId) {
                            deleteGitHubSource(sourceId);
                        }
                    }
                    navigate('/project/' + result.id);
                }
            });
        }
    };

    return (
        <div className="form">
            <h1>{t('project.edit')}</h1>
            <div id="edit-project-inputs">
                <Inpute
                    option={{
                        type: 'text',
                        name: 'title',
                        title: `project.title`,
                        error: errors.title,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.title}
                />
                <Textarea
                    option={{
                        name: 'abstract',
                        title: `project.abstract`,
                        error: errors.abstract,
                        validate: '',
                    }}
                    handleChange={hangleChange}
                    value={data.abstract}
                />
                <div className="input">
                    <label htmlFor="category">{t('project.category')}</label>
                    <select name="category" id="category" value={selectedCategory} onChange={handleSelectChange}>
                        {categories.map((option: ICategory, key: number) => (
                            <option value={option.id} key={key}>
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
            </div>

            <Textarea
                option={{
                    name: 'description',
                    title: `project.description`,
                    error: errors.description,
                    validate: '',
                }}
                handleChange={hangleChange}
                value={data.description}
            />

            <div className="form-buttons">
                <Link to={'/account/projects'} className="btn btn-cancel">
                    {t('account.cancel')}
                </Link>
                <button className="btn btn-primary" onClick={submit}>
                    {t('account.save')}
                </button>
            </div>
        </div>
    );
};
export default EditProject;
