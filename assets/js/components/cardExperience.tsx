import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategory, ISource } from '../constant/Type/entity';
import imgDefault from '../img/img-de-base.png';
export interface iCardExperienceProps {
    id: string;
    title: string;
    abstract: string;
}

const cardExperience: FC<iCardExperienceProps> = ({ id, title, abstract }) => {
    return (
        <div key={id} className="item_listing">
            <div className="container_experience">
                <div className="container_experience_title">
                    <h2>{title}</h2>
                </div>
                <div className="container_experience_description">
                    <p>{abstract}</p>
                </div>
            </div>
        </div>
    );
};

export default cardExperience;
