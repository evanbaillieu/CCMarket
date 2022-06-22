//import React, { FC } from 'react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import '../components/lang';
import Select from '../components/select';
import * as categoryService from '../service/categoryService';
import * as ProfilTypeService from '../service/profilTypeService';
import * as langueService from '../service/langueService';
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
                            <Select name="profilType" custFetch={ProfilTypeService.findAll} />
                        </div>
                        <div className="form_item">
                            <label htmlFor="language">{t('modalSearch.language')}</label>
                            <Select name="language" custFetch={langueService.findAll} />
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
