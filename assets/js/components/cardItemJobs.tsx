import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export interface iCardProps {
    id: string;
    title: string;
    abstract: string;
    isBanned: boolean;
}

const cardItemJobs: FC<iCardProps> = ({ id, title, abstract, isBanned }) => {
    const { t } = useTranslation();

    if (isBanned == false) {
        return (
            <div className="item_listing">
                <div className="item_listing_box">
                    <div className="item_listing_all_infos">
                        <div className="item_listing_all_infos_title">
                            <h3>
                                {t('job.job')} - <span className="color-primary">{title}</span>
                            </h3>
                        </div>
                        <div className="item_listing_all_infos_description">
                            <p>{abstract}</p>
                        </div>
                        <div className="item_listing_all_infos_see_more">
                            <Link className="btn btn-primary btn-with-arrow" to={'/job/' + id}>
                                {t('job.seeJob')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
    }
};

export default cardItemJobs;
