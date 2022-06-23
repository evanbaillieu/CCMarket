import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { IJob, IProfilType, IProject, IUser } from '../constant/Type/entity';
import profile from '../img/test.png';
import ListJobs from './ListJobs';
import { getJobCollectionOwner } from '../service/jobService';
import { getMe } from '../service/accountService';
import CardItemJobs from './cardItemJobs';
import CardItem from './cardItem';

const AccountInfos: FC = () => {
    const { t } = useTranslation();
    const user: IUser = useOutletContext();
    const [projects, setProjects] = useState<IProject[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        getMe().then((response) => {
            if (response.user) {
                setProjects(response.projects);
            } else {
                navigate('/login');
            }
        });
    }, []);
    console.log(projects);
    console.log(user.id);
    return (
        <div>
            <div className="account-content">
                <h1>{t('account.title')}</h1>
                <img src={profile} width={150} height={150} alt={t('profileImage')} />
                <div id="account-infos">
                    <div className="grid-content">
                        <h6>{t('account.firstName')}</h6>
                        <p>{user?.firstName}</p>
                    </div>
                    <div className="grid-content">
                        <h6>{t('account.lastName')}</h6>
                        <p>{user?.lastName}</p>
                    </div>
                    <div className="grid-content">
                        <h6>{t('account.email')}</h6>
                        <p>{user?.email}</p>
                    </div>
                    <div className="grid-content">
                        <h6>{t('account.dateOfBirth')}</h6>
                        <p>{new Date(user?.dateOfBirth).toLocaleDateString()}</p>
                    </div>
                </div>

                <Link className="btn btn-primary" to={'/account/edit'}>
                    {t('account.edit')}
                </Link>
                <Link className="btn btn-primary" to={'/account/password'}>
                    {t('account.changePassword')}
                </Link>
            </div>
            <aside className="content_his_project">
                <div className="content_his_project_title">
                    <h3>{t('listing.titleProjectJob')}</h3>
                </div>
                {projects.map((project) => (
                    <div className="project_with_jobs_account">
                        <div className="container_listing account">
                            <CardItem
                                title={project.title}
                                abstract={project.abstract}
                                isBanned={false}
                                category={project.category}
                                source={project.sources}
                            />
                        </div>
                        <div className="container_listing account jobs">
                            {project.jobs.map((job) => (
                                <>
                                    <CardItemJobs title={job.title} abstract={job.abstract} isBanned={false} />
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </aside>
        </div>
    );
};
export default AccountInfos;
