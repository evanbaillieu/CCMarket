import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Circles } from 'react-loader-spinner';
import CardItem from './cardItem';
import { getCategoryCollection } from '../service/CategoryService';
import BadgeCategory from './BadgeCategory';

const ListCategories: FC = () => {
    const { t } = useTranslation();
    const [content, setContent] = useState('');

    const { isError, isLoading, data } = useQuery('List-category', getCategoryCollection, {});

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
        <section className="all_categories_container_box_element">
            {data &&
                data.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <BadgeCategory name={item.name} />
                        </div>
                    );
                })}
        </section>
    );
};

export default ListCategories;
