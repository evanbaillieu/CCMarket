//import React, { FC } from 'react';
import React, { FC, useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import '../components/lang';
import Select from '../components/select';
import * as categoryService from '../service/categoryService';
import * as ProfilTypeService from '../service/profilTypeService';
import * as langueService from '../service/langueService';
import Close from '../svg/close.svg';
import { useNavigate } from 'react-router-dom';
export type IModalSearch = {
    onClose: () => void;
};
const ModalSearch: FC<IModalSearch> = ({ onClose }) => {
    const { t } = useTranslation();
    const [option, setOption] = useState<any>({});
    const navigate = useNavigate();
    const onChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setOption((state: any) => {
            return {
                ...state,
                [e.target?.name]: e.target?.value,
            };
        });
    };

    const send = () => {
        onClose();
        navigate('/listing', { state: { ...option } });
    };

    return (
        <div>
            <section id="modal_search" className="modal_search_container">
                <aside onClick={onClose} className="modal_search_container_close">
                    <Close />
                </aside>
                <aside className="modal_search_container_title">
                    <h2>{t('modalSearch.titlePrincipleSearch')}</h2>
                </aside>
                <aside className="modal_search_container_form">
                    <div className="form_row">
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
                                custFetch={ProfilTypeService.findAll}
                            />
                        </div>
                        {option?.profilType === 'Dev' ? (
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
                    <div className="form_row">
                        <div className="form_item form_item_unique">
                            <input
                                className="input"
                                type="text"
                                onChange={onChange}
                                value={option?.description}
                                name="description"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="modal_search_container_form_buttons">
                        <button onClick={send} className="btn btn-primary">
                            {t('modalSearch.buttonSearch')}
                        </button>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default ModalSearch;
