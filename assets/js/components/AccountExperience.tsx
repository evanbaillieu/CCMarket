import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useOutletContext } from 'react-router-dom';
import { IExperiance } from '../constant/Type/entity';
import CardExperience from './cardExperience';

interface Me {
    experiences: IExperiance[];
}

const AccountExperience: FC = () => {
    const { t } = useTranslation();
    const me: Me = useOutletContext();

    return (
        <div className="account-content">
            <Link className="btn btn-primary" to={'/experience/add'}>
                {t('experience.add')}
            </Link>
            {me.experiences?.map((exp: IExperiance) => (
                <div key={exp.id}>
                    <CardExperience
                        id={exp.id}
                        title={exp.title}
                        abstract={exp.abstract}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                    />
                    <Link className="btn btn-primary btn-with-arrow" to={'/experience/edit/' + exp.id}>
                        {t('experience.edit')}
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default AccountExperience;
