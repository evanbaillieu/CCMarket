import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISource } from '../constant/Type/entity';
import imgDefault from '../img/img-de-base.png';
export interface iCardProps {
    title: string;
    abstract: string;
    category: string;
    isBanned: boolean;
    source?: ISource[];
}

const cardItem: FC<iCardProps> = ({ title, abstract, category, isBanned, source }) => {
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
                            <h3>Project - {title}</h3>
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
                    <div className="item_listing_category">
                        <p>{category}</p>
                    </div>
                </div>
            </div>
        );
    } else {
    }
};

export default cardItem;
