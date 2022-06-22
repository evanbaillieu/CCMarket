//import React, { FC } from 'react';
import React, { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../components/lang';
import Close from '../svg/close.svg';

const ModalSearch: FC = () => {
    const { t } = useTranslation();

    const OpenCloseSearchModal = () => {
        document.getElementById('menu_nav_mobile').classList.remove('is_active');
        document.getElementById('menu_mobile_content').classList.remove('is_active');
        document.getElementById('modal_search').classList.toggle('is_active');
    };

    return (
        <div>
            <section id="modal_search" className="modal_search_container">
                <aside onClick={OpenCloseSearchModal} className="modal_search_container_close">
                    <Close />
                </aside>
                <aside className="modal_search_container_title">
                    <h2>{t('modalSearch.titlePrincipleSearch')}</h2>
                </aside>
                <aside className="modal_search_container_form">
                    <div className="form_row">
                        <div className="form_item">
                            <label htmlFor="category">{t('modalSearch.catagory')}</label>
                            <select name="catgory">
                                <option value="Developement">{t('modalSearch.developement')}</option>
                                <option value="Education">{t('modalSearch.education')}</option>
                                <option value="Game">{t('modalSearch.game')}</option>
                                <option value="Design">{t('modalSearch.design')}</option>
                                <option value="Internet">{t('modalSearch.internet')}</option>
                                <option value="Multimedia">{t('modalSearch.multimedia')}</option>
                                <option value="Office Automation">{t('modalSearch.officeAutomation')}</option>
                                <option value="System">{t('modalSearch.system')}</option>
                                <option value="Utilities">{t('modalSearch.utilities')}</option>
                            </select>
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
