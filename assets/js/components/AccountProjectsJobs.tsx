import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useOutletContext } from 'react-router-dom';
import { ICategory, IJob, IProject } from '../constant/Type/entity';

interface Me {
    projects: IProject[];
}

const AccountProjectsJobs: FC = () => {
    const { t } = useTranslation();
    const me: Me = useOutletContext();

    return (
        <div className="account-content">
            <h1>{t('listing.titleProjectJob')}</h1>
            {me.projects?.map((project: IProject) => (
                <div id="account-projects-jobs" key={project.id}>
                    <div className="project-box">
                        <h3>
                            {t('project.project')} - <span className="color-primary">{project.title}</span>
                        </h3>
                        <h6>{(project?.category as ICategory).name}</h6>
                        <p>{project.abstract}</p>
                        <Link className="btn btn-primary btn-with-arrow" to={'/project/' + project.id}>
                            {t('project.seeProject')}
                        </Link>
                        <Link className="btn btn-primary btn-with-arrow" to={'/project/edit/' + project.id}>
                            {t('project.edit')}
                        </Link>

                        <hr />

                        {(project.jobs as IJob[]).map((job) => (
                            <div className="job-box" key={job.id}>
                                <h6>
                                    {t('job.job')} - <span className="color-primary">{job.title}</span>
                                </h6>
                                <p>{job.abstract}</p>
                                <div>
                                    <Link className="btn btn-primary btn-with-arrow" to={'/job/' + job.id}>
                                        {t('job.seeJob')}
                                    </Link>
                                    <Link className="btn btn-primary btn-with-arrow" to={'/job/edit/' + job.id}>
                                        {t('job.edit')}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default AccountProjectsJobs;
