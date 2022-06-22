//import React, { FC } from 'react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import '../components/lang';
import Select from '../components/select';
import * as categoryService from '../service/categoryService';
import Close from '../svg/close.svg';
export type IModalSearch = {
    onClose: () => void;
};
const ModalSearch: FC<IModalSearch> = ({ onClose }) => {
    const { t } = useTranslation();

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
                            <Select name="category" custFetch={categoryService.getAll} isTrad />
                        </div>
                        <div className="form_item">
                            <label htmlFor="profilType">{t('modalSearch.profilType')}</label>
                            <select name="profilType">
                                <option value="Translator">{t('modalSearch.translator')}</option>
                                <option value="Translator">{t('smodalSearch.translator')}</option>
                            </select>
                        </div>
                        <div className="form_item">
                            <label htmlFor="language">{t('modalSearch.language')}</label>
                            <select name="language">
                                <option value="English">{t('modalSearch.english')}</option>
                                <option value="Franch">{t('modalSearch.franch')}</option>
                                <option value="Spanish">{t('modalSearch.spanish')}</option>
                            </select>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="form_item form_item_unique">
                            <input className="input" type="text" name="description" placeholder="Search" />
                        </div>
                    </div>
                    <div className="modal_search_container_form_buttons">
                        <button className="btn btn-primary">{t('modalSearch.buttonSearch')}</button>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default ModalSearch;
