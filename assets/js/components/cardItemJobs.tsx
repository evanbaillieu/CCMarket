import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export interface iCardProps {
    title: string;
    abstract: string;
    isBanned: boolean;
}

const cardItemJobs: FC<iCardProps> = ({ title, abstract, isBanned }) => {
    if (isBanned == false) {
        return (
            <div className="item_listing">
                <div className="item_listing_box">
                    <div className="item_listing_all_infos">
                        <div className="item_listing_all_infos_title">
                            <h3>Job- {title}</h3>
                        </div>
                        <div className="item_listing_all_infos_description">
                            <p>{abstract}</p>
                        </div>
                        <div className="item_listing_all_infos_see_more">
                            <Link className="btn btn-primary btn-with-arrow" to={''}>
                                See more
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
