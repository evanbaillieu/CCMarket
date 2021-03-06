import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Circles } from 'react-loader-spinner';
import CardItem from './cardItem';

export type IProjectProps = {
    getProject?: () => Promise<any>;
};

const ListProjet: FC<IProjectProps> = ({ getProject }) => {
    const { t } = useTranslation();
    const [content, setContent] = useState('');

    const { isError, isLoading, data, refetch } = useQuery('List-project', getProject, {});

    useEffect(() => {
        refetch();
    }, [getProject]);

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
                <h1> {t('listing.noProjects')}...</h1>
            </div>
        );
    }

    return (
        <section>
            <aside className="title_project_listing">
                <h2>Project(s)</h2>
            </aside>
            <div className="container_listing">
                {data &&
                    data.map((item: any) => {
                        return (
                            <CardItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                abstract={item.abstract}
                                isBanned={item.isBanned}
                                source={item?.source}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default ListProjet;
