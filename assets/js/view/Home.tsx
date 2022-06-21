import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Lang from '../components/lang';

//Image on Home Page
import HomeSectionPresentationImage from '../img/homeImg.png';
import HomeSectionPresentationImageMobile from '../img/HomeResponsive.png';
import CompleteSvg from '../svg/complete.svg';
import SecureSvg from '../svg/secure.svg';
import CommunitySvg from '../svg/community.svg';
import { Link } from 'react-router-dom';
import Badge from '../components/badge';

const Home: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <section className="home_section_presentation">
                <aside className="home_section_presentation_text">
                    <h1>
                        {t('home.title_part_1')}
                        <span className="home_section_presentation_text_orange_important_text">
                            {' '}
                            {t('home.title_part_2')}{' '}
                        </span>
                        {t('home.title_part_3')}
                        <span className="home_section_presentation_text_red_important_text">
                            {t('home.title_part_4')}
                        </span>
                    </h1>
                    <p>{t('home.description')}</p>
                    <Link to={''} className="btn btn-primary btn-with-arrow">
                        {t('home.getstarted')}
                    </Link>
                    <div className="home_section_presentation_text_points_importants">
                        <Badge title={t('home.complete')} svg={<CompleteSvg />} />
                        <Badge title={t('home.secure')} svg={<SecureSvg />} />
                        <Badge title={t('home.community')} svg={<CommunitySvg />} />
                    </div>
                </aside>
                <aside className="home_section_presentation_image">
                    <div className="home_section_presentation_image_desktop">
                        <img src={HomeSectionPresentationImage} alt="homeSectionPresentationImage" />
                    </div>
                    <div className="home_section_presentation_image_mobile">
                        <img src={HomeSectionPresentationImageMobile} alt="homeSectionPresentationImage" />
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default Home;
