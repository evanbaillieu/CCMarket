import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Inpute from '../../components/input';
import Textarea from '../../components/textarea';
import { ICategory, IProject } from '../../constant/Type/entity';
import { checkIsEmpty, checkIsNotEmpty } from '../../helper/utilHelper';
import useForm from '../../hook/useForm';
import { getMe } from '../../service/accountService';
import { getAll } from '../../service/categoryService';
import { addProject } from '../../service/projectService';
import { createGitHubSource } from '../../service/sourceService';
import GitHub from '../../svg/github.svg';

const project: IProject = {
    title: '',
    abstract: '',
    description: '',
};

const AddProject: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [source, setSource] = useState<string>('');
    const { data, errors, hangleChange } = useForm<IProject>(project);

    useEffect(() => {
        getAll().then((response) => {
            setCategories(response);
            setSelectedCategory(response[0]['id']);
        });

        getMe().then((response) => {
            if (response.user) setUser('/api/users/' + response.user.id);
            else navigate('/login');
        });
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const handleGitHubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSource(e.target.value);
    };

    const submit = async () => {
        if (checkIsNotEmpty(data) && checkIsEmpty(errors) && selectedCategory && user) {
            addProject(data, '/api/categories/' + selectedCategory, user).then((result) => {
                if (result.id) {
                    if (source) {
                        createGitHubSource({
                            type: 'github',
                            name: 'GitHub of ' + data.title,
                            link: 'https://github.com/' + source,
                            projects: [result['@id']],
                        });
                    }
                    navigate('/project/' + result.id);
                }
            });
        }
    };

    return (
        <div className="form">
            <h1>{t('project.add')}</h1>
            <div id="edit-inputs">
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
                <div>
                    <label htmlFor="category">{t('project.category')}</label>
                    <select name="category" id="category" onChange={handleSelectChange}>
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
                        title: `project.github`,
                        error: '',
                        validate: '',
                    }}
                    handleChange={handleGitHubChange}
                    value={source}
                />
            </div>

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
export default AddProject;
