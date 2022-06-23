import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ListProject from '../components/ListProject';
import ListJobs from '../components/ListJobs';
import { getJobCollection } from '../service/jobService';
import { getProjectCollectionCategories, getProjects } from '../service/projectService';

const Listing: FC = ({}) => {
    const { t } = useTranslation();

    return (
        <div>
            <ListProject getProject={getProjects} />
            <ListJobs getJobs={getJobCollection} />
        </div>
    );
};

export default Listing;
