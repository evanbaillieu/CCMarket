import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Lang from '../components/lang';
import Logo from '../svg/logo.svg';
import test from '../img/test.png';

const Home: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Logo />
            <img src={test} height="50px" width={'50px'} />
            <Lang />
            <p>
                <span className="titre_1">{t('nav.titre1')}</span>
                <span className="titre_2">{t('nav.titre2')}</span>
            </p>
        </div>
    );
};

export default Home;
