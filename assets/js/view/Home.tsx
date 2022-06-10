import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/style.scss';
import Lang from '../components/lang';

const Home: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Lang />
            <p>
                {t('nav.titre1')} {t('nav.titre2')}
            </p>
        </div>
    );
};

export default Home;
