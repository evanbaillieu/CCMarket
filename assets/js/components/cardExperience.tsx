import { t } from 'i18next';
import moment from 'moment';
import React, { FC } from 'react';

export interface iCardExperienceProps {
    id: string;
    title: string;
    abstract: string;
    startDate: string;
    endDate?: string;
}

const cardExperience: FC<iCardExperienceProps> = ({ id, title, abstract, startDate, endDate }) => {
    const startDateFormated = moment(startDate).format('DD MMMM YYYY');
    const endDateFormated = endDate ? moment(endDate).format('DD MMMM YYYY') : t('account.today');

    return (
        <div key={id}>
            <div className="container_experience">
                <div className="container_experience_title">
                    <h2>{title}</h2>
                </div>
                <div className="container_experience_description">
                    <p>{abstract}</p>
                </div>
                <div className="container_experience_date">
                    <p>{startDateFormated + ' - ' + endDateFormated}</p>
                </div>
                <div className="container_experience_source"></div>
            </div>
        </div>
    );
};

export default cardExperience;
