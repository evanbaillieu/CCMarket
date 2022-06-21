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
                    <h2>Search</h2>
                </aside>
                <aside className="modal_search_container_form">
                    <div className="form_row">
                        <div className="form_item">
                            <label htmlFor="category">Category</label>
                            <select name="catgory">
                                <option>Test</option>
                            </select>
                        </div>
                        <div className="form_item">
                            <label htmlFor="profilType">Profil Type</label>
                            <select name="profilType">
                                <option>Test</option>
                            </select>
                        </div>
                        <div className="form_item">
                            <label htmlFor="language">Language</label>
                            <select name="language">
                                <option>Test</option>
                            </select>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="form_item form_item_unique">
                            <input className="input" type="text" name="description" placeholder="Search" />
                        </div>
                    </div>
                    <div className="modal_search_container_form_buttons">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default ModalSearch;
