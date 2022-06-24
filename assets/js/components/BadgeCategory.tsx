import React, { FC } from 'react';
import { Link, Navigate } from 'react-router-dom';

export interface IBadgeCategoryProps {
    name: string;
}

const Badge: FC<IBadgeCategoryProps> = ({ name }) => {
    return (
        <div>
            <Link to={`/listingCategory/${name}`} className="badge_categories_container">
                <div className="badge_categories_container_title">
                    <h4>{name}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Badge;
