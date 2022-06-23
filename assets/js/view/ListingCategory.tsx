import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ListProject from '../components/ListProject';
import ListJobs from '../components/ListJobs';
import { useLocation, useParams } from 'react-router-dom';
import { IBadgeCategoryProps } from '../components/BadgeCategory';
import { getProjectCollectionCategories } from '../service/projectService';
import { getJobCollectionForYou } from '../service/jobService';

const ListingCategory: FC = ({}) => {
    const { t } = useTranslation();
    const { name } = useParams();
    return <div>{name ? <ListProject getProject={() => getProjectCollectionCategories(name)} /> : <></>}</div>;
};

export default ListingCategory;
