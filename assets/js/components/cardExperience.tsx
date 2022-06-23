import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategory, ISource } from '../constant/Type/entity';
import imgDefault from '../img/img-de-base.png';
import moment from 'moment';
import { t } from 'i18next';
export interface iCardExperienceProps {
    id: string;
    title: string;
    abstract: string;
    startDate: string;
    endDate?: string;
}

const cardExperience: FC<iCardExperienceProps> = ({ id, title, abstract, startDate, endDate }) => {
    const moment = require('moment');
    console.log(moment().format());
    const dateDebut = startDate;

    return (
        <div key={id}>
            <div className="container_experience">
                <div className="container_experience_title">
                    <h2>{title}</h2>
                </div>
                <div className="container_experience_description">
                    <p>{abstract}</p>
                </div>{' '}
                <div className="container_experience_date">
                    <p>
                        {moment(dateDebut).format('DD MMMM YYYY')} -{' '}
                        {endDate ? moment(endDate).format('DD MMMM YYYY') : t('account.today')}
                    </p>
                </div>
                <div className="container_experience_source"></div>
            </div>
        </div>
    );
};

export default cardExperience;
