import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IJob, IUser, IProject, IProfilType } from '../../constant/Type/entity';
import profile from '../../img/test.png';
import { getJob, getLeader } from '../../service/jobService';
import Github from '../../svg/github.svg';

const Job: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { idJob } = useParams();
    const [job, setJob] = useState<IJob>();
    const [leader, setLeader] = useState<IUser>();

    useEffect(() => {
        getJob(idJob).then((response) => {
            setJob(response as IJob);
            if (response.Project) {
                getLeader(response.Project.leader).then((result) => {
                    setLeader(result);
                });
            } else {
                navigate('/');
            }
        });
    }, []);

    return (
        <div id="job-container">
            <div id="job-content">
                <h1>{job?.title}</h1>
                <p className="profilType-name">{(job?.profilType as IProfilType)?.name}</p>

                <p>{job?.description}</p>

                {job?.sources
                    ?.filter((item) => item.type === 'github')
                    .map((source, key) => (
                        <div key={key} className="source-box">
                            <Github />
                            <a href={source.link} target="_blank" rel="noreferrer">
                                {source.link}
                            </a>
                        </div>
                    ))}
            </div>

            <div id="job-sidebar">
                <div id="job-sidebar-project">
                    <h2>{(job?.Project as IProject)?.title}</h2>
                    <p id="project-description">{(job?.Project as IProject)?.abstract}</p>
                    <Link to={'/project/' + (job?.Project as IProject)?.id} className="btn btn-primary btn-with-arrow">
                        {t('job.seeProject')}
                    </Link>
                </div>

                <div id="job-sidebar-leader">
                    <h3>{t('job.leader')}</h3>
                    <div id="leader-box">
                        <img src={profile} width={50} height={50} alt={t('profileImage')} />
                        <p>{leader?.firstName + ' ' + leader?.lastName}</p>
                    </div>
                    <Link to={'/messenger/'} className="btn btn-primary btn-with-arrow">
                        {t('contactLeader')}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Job;
