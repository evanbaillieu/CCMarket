import Cookies from 'js-cookie';
import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../constant/Type/lang';
import config from '../config/default';

const Lang = ({}) => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);

    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const language = event.target.value;

        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                Cookies.set(config.lang.key, Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                Cookies.set(config.lang.key, Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    };

    return (
        <select value={lang} name="language" id="language" onChange={changeLanguage}>
            <option value={Language.FR}>Français</option>
            <option value={Language.EN}>English</option>
        </select>
    );
};

export default Lang;
