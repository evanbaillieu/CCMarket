import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useOutletContext } from 'react-router-dom';
import { IJob, IProject, ICategory, ISource, IUser } from '../constant/Type/entity';
import profile from '../img/test.png';
import CardItemJobs from './cardItemJobs';
import CardItem from './cardItem';

interface Me {
    user: IUser;
    projects: IProject[];
}

const AccountInfos: FC = () => {
    const { t } = useTranslation();
    const me: Me = useOutletContext();

    return (
        <div>
            <div className="account-content">
                <h1>{t('account.title')}</h1>
                <img src={profile} width={150} height={150} alt={t('profileImage')} />
                <div id="account-infos">
                    <div className="grid-content">
                        <h6>{t('account.firstName')}</h6>
                        <p>{me.user.firstName}</p>
                    </div>
                    <div className="grid-content">
                        <h6>{t('account.lastName')}</h6>
                        <p>{me.user.lastName}</p>
                    </div>
                    <div className="grid-content">
                        <h6>{t('account.email')}</h6>
                        <p>{me.user.email}</p>
                    </div>
                    <div className="grid-content">
                        <h6>{t('account.dateOfBirth')}</h6>
                        <p>{new Date(me.user.dateOfBirth).toLocaleDateString()}</p>
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
                {me.projects?.map((project: IProject) => (
                    <div className="project_with_jobs_account" key={project.id}>
                        <div className="container_listing account">
                            <CardItem
                                id={project.id}
                                title={project.title}
                                abstract={project.abstract}
                                isBanned={false}
                                category={project.category as ICategory}
                                source={project.sources as ISource[]}
                            />
                        </div>
                        <div className="container_listing account jobs">
                            {(project.jobs as IJob[]).map((job) => (
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
