import React, { ChangeEventHandler, FC, useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import ListProject from '../components/ListProject';
import ListJobs from '../components/ListJobs';
import { getJobCollection } from '../service/jobService';
import { getProjectCollectionCategories, getProjects } from '../service/projectService';
import Select from '../components/select';
import * as categoryService from '../service/categoryService';
import * as ProfilTypeService from '../service/profilTypeService';
import * as langueService from '../service/langueService';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

const Listing: FC = ({}) => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [option, setOption] = useState<any>({});
    console.log(location.state);
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setOption((state: any) => {
            return {
                ...state,
                [e.target?.name]: e.target?.value,
            };
        });
    };

    const send = () => {
        navigate('/listing', { state: { ...option } });
    };
    return (
        <div>
            <section>
                <aside>
                    <h2>{t('modalSearch.titlePrincipleSearch')}</h2>
                </aside>
                <aside>
                    <div>
                        <div>
                            <label htmlFor="category">{t('modalSearch.catagory')}</label>
                            <Select
                                name="category"
                                onChange={onChange}
                                value={option?.category}
                                custFetch={categoryService.getAll}
                                isTrad
                            />
                        </div>
                        <div className="form_item">
                            <label htmlFor="profilType">{t('modalSearch.profilType')}</label>
                            <Select
                                name="profilType"
                                onChange={onChange}
                                value={option?.profilType}
                                custFetch={ProfilTypeService.findAll}
                            />
                        </div>
                        {option.profilType === 'Dev' ? (
                            <div className="form_item">
                                <label htmlFor="language">{t('modalSearch.language')}</label>
                                <Select
                                    name="language"
                                    onChange={onChange}
                                    value={option?.language}
                                    custFetch={langueService.findAll}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div>
                        <div>
                            <input className="input" type="text" name="description" placeholder="Search" />
                        </div>
                    </div>
                    <div>
                        <button onClick={send} className="btn btn-primary">
                            {t('modalSearch.buttonSearch')}
                        </button>
                    </div>
                </aside>
            </section>
            {/*
            <ListProject getProject={getProjects} />
             <ListJobs getJobs={getJobCollection} />
            */}
        </div>
    );
};

export default Listing;
