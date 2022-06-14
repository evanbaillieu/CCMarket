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
            <section className="image">
                <div className="home_bady">
                    <div className="container">
                        <h1 className="title">
                            The platform that connects contributors and open source project owners
                        </h1>
                        <div>
                            <p>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en
                                page avant impression. Le Lorem Ipsum est le faux texte standard de l`imprimerie depuis
                                les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                                réaliser un livre spécimen de polices de texte. Il n`a pas fait que survivre cinq
                                siècles,
                            </p>
                        </div>
                        <a href="/" className="button">
                            Get started<span></span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
