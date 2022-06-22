import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Arrow from '../svg/Arrow.svg';
import imgProjet from '../img/imgProjet.png';
import Select from '../components/select';
import * as categoryService from '../service/categoryService';

const SearchList: FC = ({}) => {
    const { t } = useTranslation();

    return (
        <div className="templateContainer">
            <div className="containerZonFiltre">
                <div className="div-custom-select">
                    <div className="custom-select">
                        <label htmlFor="category">{t('searchList.catagory')}</label>
                        <Select name="category" custFetch={categoryService.getAll} isTrad />
                    </div>
                    <div className="custom-select">
                        <label htmlFor="profilType">{t('searchList.profilType')}</label>
                        <select name="profilType">
                            <option value="Translator">{t('searchList.translator')}</option>
                            <option value="Translator">{t('searchList.translator')}</option>
                        </select>
                    </div>
                    <div className="custom-select">
                        <label htmlFor="language">{t('searchList.language')}</label>
                        <select name="language">
                            <option value="English">{t('searchList.english')}</option>
                            <option value="Franch">{t('searchList.franch')}</option>
                            <option value="Spanish">{t('searchList.spanish')}</option>
                        </select>
                    </div>
                </div>
                <div className="searchInput">
                    <input id="searchInput" type="text" placeholder="Search" />
                </div>
            </div>

            <div className="containerResults">
                <h1>{t('searchList.titlePrincipleProjets')}</h1>
                <div className="search_results">
                    <div className="template">
                        <a href="/">
                            <button className="buttonsSurImgs">{t('searchList.buttonDevelopement')}</button>
                        </a>
                        <img src={imgProjet} className="imgProjet" alt="img_projet" />
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.projetsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.projetDescription')}</p>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <a href="/">
                            <button className="buttonsSurImgs">{t('searchList.buttonEducation')}</button>
                        </a>
                        <img src={imgProjet} className="imgProjet" alt="img_projet" />
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.projetsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.projetDescription')}</p>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <a href="/">
                            <button className="buttonsSurImgs">{t('searchList.buttonDevelopement')}</button>
                        </a>
                        <img src={imgProjet} className="imgProjet" alt="img_projet" />
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.projetsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.projetDescription')}</p>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <a href="/">
                            <button className="buttonsSurImgs">{t('searchList.buttonDevelopement')}</button>
                        </a>
                        <img src={imgProjet} className="imgProjet" alt="img_projet" />
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.projetsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.projetDescription')}</p>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <a href="/">
                            <button className="buttonsSurImgs">{t('searchList.buttonEducation')}</button>
                        </a>
                        <img src={imgProjet} className="imgProjet" alt="img_projet" />
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.projetsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.projetDescription')}</p>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <a href="/">
                            <button className="buttonsSurImgs">{t('searchList.buttonDevelopement')}</button>
                        </a>
                        <img src={imgProjet} className="imgProjet" alt="img_projet" />
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.projetsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.projetDescription')}</p>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerResults">
                <h1>{t('searchList.titlePrincipleJobs')}</h1>
                <div className="search_results">
                    <div className="template">
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.jabsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.jabsDescription')}</p>
                            <h3>{t('searchList.missions')}</h3>
                            <ul>
                                <li>{t('searchList.listMissionsIl')}</li>
                                <li>{t('searchList.listMissionsIls')}</li>
                                <li>{t('searchList.listMissionsIlss')}</li>
                                <li>{t('searchList.listMissionsIlsss')}</li>
                            </ul>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.jabsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.jabsDescription')}</p>
                            <h3>{t('searchList.missions')}</h3>
                            <ul>
                                <li>{t('searchList.listMissionsIl')}</li>
                                <li>{t('searchList.listMissionsIls')}</li>
                                <li>{t('searchList.listMissionsIlss')}</li>
                                <li>{t('searchList.listMissionsIlsss')}</li>
                            </ul>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.jabsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.jabsDescription')}</p>
                            <h3>{t('searchList.missions')}</h3>
                            <ul>
                                <li>{t('searchList.listMissionsIl')}</li>
                                <li>{t('searchList.listMissionsIls')}</li>
                                <li>{t('searchList.listMissionsIlss')}</li>
                                <li>{t('searchList.listMissionsIlsss')}</li>
                            </ul>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.jabsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.jabsDescription')}</p>
                            <h3>{t('searchList.missions')}</h3>
                            <ul>
                                <li>{t('searchList.listMissionsIl')}</li>
                                <li>{t('searchList.listMissionsIls')}</li>
                                <li>{t('searchList.listMissionsIlss')}</li>
                                <li>{t('searchList.listMissionsIlsss')}</li>
                            </ul>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.jabsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.jabsDescription')}</p>
                            <h3>{t('searchList.missions')}</h3>
                            <ul>
                                <li>{t('searchList.listMissionsIl')}</li>
                                <li>{t('searchList.listMissionsIls')}</li>
                                <li>{t('searchList.listMissionsIlss')}</li>
                                <li>{t('searchList.listMissionsIlsss')}</li>
                            </ul>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="template">
                        <div className="container_text">
                            <h2>
                                {t('searchList.titleProjets')}
                                <span className="titleRed">{t('searchList.jabsTitle')}</span>
                            </h2>
                            <p className="paragraphe">{t('searchList.jabsDescription')}</p>
                            <h3>{t('searchList.missions')}</h3>
                            <ul>
                                <li>{t('searchList.listMissionsIl')}</li>
                                <li>{t('searchList.listMissionsIls')}</li>
                                <li>{t('searchList.listMissionsIlss')}</li>
                                <li>{t('searchList.listMissionsIlsss')}</li>
                            </ul>
                            <a href="/">
                                <button className="button_projet">
                                    {t('searchList.buttonSeeMore')}
                                    <span className="arrow_button">
                                        <Arrow />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchList;
