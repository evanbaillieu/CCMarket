import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ICategory, ISource } from '../constant/Type/entity';
import imgDefault from '../img/img-de-base.png';
export interface iCardProps {
    id: string;
    title: string;
    abstract: string;
    category: ICategory;
    isBanned: boolean;
    source?: ISource[];
}

const cardItem: FC<iCardProps> = ({ id, title, abstract, category, isBanned, source }) => {
    const { t } = useTranslation();

    if (isBanned == false) {
        const sourceImage = source?.filter((value) => value.type === 'Image');

        return (
            <div className="item_listing">
                <div className="item_listing_box">
                    <div className="item_listing_source">
                        <img
                            src={sourceImage[0]?.link ? sourceImage[0].link : imgDefault}
                            alt={sourceImage[0]?.name ? sourceImage[0].name : 'Img-de-base'}
                        />
                    </div>
                    <div className="item_listing_all_infos">
                        <div className="item_listing_all_infos_title">
                            <h3>
                                {t('project.project')} - <span className="color-primary">{title}</span>
                            </h3>
                        </div>
                        <div className="item_listing_all_infos_description">
                            <p>{abstract}</p>
                        </div>
                        <div className="item_listing_all_infos_see_more">
                            <Link className="btn btn-primary btn-with-arrow" to={'/project/' + id}>
                                {t('project.seeProject')}
                            </Link>
                        </div>
                    </div>
                    <div className="item_listing_category">
                        <p>{category?.name}</p>
                    </div>
                </div>
            </div>
        );
    } else {
    }
};

export default cardItem;
