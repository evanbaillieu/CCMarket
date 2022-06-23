import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Circles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ISource } from '../../constant/Type/entity';
import profile from '../../img/test.png';
import { getProject } from '../../service/projectService';
import Github from '../../svg/github.svg';
import Star from '../../svg/star.svg';

const Project: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { idProject } = useParams();
    const { isError, isLoading, data } = useQuery(['User-infos', idProject], () => getProject(idProject));

    if (data?.code === 401) {
        navigate('/');
    }

    if (isError) {
        navigate('/');
    }

    if (isLoading) {
        return <Circles color="#F05454" />;
    }

    return (
        <div id="project-container">
            <div id="project-content">
                <h1>{data?.title}</h1>
                <p className="profilType-name">{data?.category?.name}</p>

                <p>{data?.description}</p>

                {data?.sources
                    ?.filter((item: { type: string }) => item.type === 'github')
                    .map((source: ISource, key: number) => (
                        <div key={key} className="source-box">
                            <Github />
                            <a href={source.link} target="_blank" rel="noreferrer">
                                {source.link}
                            </a>
                        </div>
                    ))}
            </div>

            <div id="project-sidebar">
                <button className="btn btn-primary">
                    <Star />
                    <p>{data?.nbStar}</p>
                </button>
                <div id="project-sidebar-leader">
                    <h3>{t('job.leader')}</h3>
                    <div id="leader-box">
                        <img src={profile} width={50} height={50} alt={t('profileImage')} />
                        <p>{data?.leader?.firstName + ' ' + data?.leader?.lastName}</p>
                    </div>
                    <Link to={'/messenger/'} className="btn btn-primary btn-with-arrow">
                        {t('contactLeader')}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Project;
