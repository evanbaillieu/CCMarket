import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Circles } from 'react-loader-spinner';
import CardItemJobs from './cardItemJobs';
import { useNavigate } from 'react-router-dom';

export type IListJobsProps = {
    getJobs: () => Promise<any>;
};
const ListJobs: FC<IListJobsProps> = ({ getJobs }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    const { isError, isLoading, data, refetch } = useQuery('List-jobs-For-You', getJobs, {});

    useEffect(() => {
        refetch();
    }, [getJobs]);

    if (isLoading) {
        return (
            <div className="container_listing">
                <Circles color="#F05454" />
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="container_listing_not_found">
                <h2> {t('listing.noJobs')}...</h2>
            </div>
        );
    }
    console.log(data);

    return (
        <section>
            <aside className="title_project_listing">
                <h2>{t('searchList.titlePrincipleJobs')}</h2>
            </aside>
            <div className="container_listing">
                {data &&
                    data.map((item: any) => {
                        return (
                            <CardItemJobs
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                abstract={item.abstract}
                                isBanned={item.isBanned}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default ListJobs;
