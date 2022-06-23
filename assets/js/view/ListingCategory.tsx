import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ListProject from '../components/ListProject';
import ListJobs from '../components/ListJobs';
import { useLocation } from 'react-router-dom';
import { getJobCollection } from '../service/jobService';

const Listing: FC = ({}) => {
    const { t } = useTranslation();

    return (
        <div>
            <ListProject />
            <ListJobs getJobs={getJobCollection} />
        </div>
    );
};

export default Listing;
