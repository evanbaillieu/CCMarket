import React, { ChangeEventHandler, FC, useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ListProject from '../components/ListProject';
import ListJobs from '../components/ListJobs';
import { getJobCollection, getJobCollectionSearch } from '../service/jobService';
import { getProjectsSearch } from '../service/projectService';
import Select from '../components/select';
import * as categoryService from '../service/categoryService';
import * as ProfilTypeService from '../service/profilTypeService';
import * as langueService from '../service/langueService';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

const Listing: FC = ({}) => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [option, setOption] = useState<any>(location.state);

    // const onChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    //     setOption((state: any) => {
    //         return {
    //             ...state,
    //             [e.target?.name]: e.target?.value,
    //         };
    //     });
    //     navigate('/listing', { state: { ...option } });
    // };

    const onChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setOption((state: any) => {
            if (e.target?.name == 'profilType' && e.target?.value != 'Developpeur Web') {
                return {
                    ...state,
                    [e.target?.name]: e.target?.value,
                    language: '',
                };
            }
            return {
                ...state,
                [e.target?.name]: e.target?.value,
            };
        });
        navigate('/listing', { state: { ...option } });
    };

    const send = () => {
        navigate('/listing', { state: { ...option } });
    };

    console.log(option);

    return (
        <div>
            <section className="container_filter">
                <aside className="container_filter_form">
                    <div className="container_filter_form_select">
                        <div className="form_item">
                            <label htmlFor="category">{t('modalSearch.catagory')}</label>
                            <Select
                                name="category"
                                onChange={onChange}
                                value={option?.category}
                                custFetch={categoryService.getCategoryCollection}
                                isTrad
                            />
                        </div>
                        <div className="form_item">
                            <label htmlFor="profilType">{t('modalSearch.profilType')}</label>
                            <Select
                                name="profilType"
                                onChange={onChange}
                                value={option?.profilType}
                                custFetch={ProfilTypeService.getProfilTypeCollection}
                            />
                        </div>
                        {option.profilType === 'Developpeur Web' ? (
                            <div className="form_item">
                                <label htmlFor="language">{t('modalSearch.language')}</label>
                                <Select
                                    name="language"
                                    onChange={onChange}
                                    value={option?.language}
                                    custFetch={langueService.getLangueCollection}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="container_filter_form_search">
                        <div>
                            <input
                                className="input"
                                type="text"
                                name="description"
                                value={option?.description}
                                placeholder="Search"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </aside>
            </section>

            <ListProject getProject={() => getProjectsSearch(option.category, option.description)} />
            <ListJobs getJobs={() => getJobCollectionSearch(option.profilType, option.description, option.language)} />
        </div>
    );
};

export default Listing;
