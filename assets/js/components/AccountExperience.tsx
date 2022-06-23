import React, { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import { IExperiance } from '../constant/Type/entity';
import CardExperience from './cardExperience';

interface Me {
    experiences: IExperiance[];
}

const AccountExperience: FC = () => {
    const me: Me = useOutletContext();

    return (
        <div className="account-content">
            {me.experiences?.map((exp: IExperiance) => (
                <div key={exp.id}>
                    <CardExperience
                        key={exp.id}
                        id={exp.id}
                        title={exp.title}
                        abstract={exp.abstract}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                    />
                </div>
            ))}
        </div>
    );
};
export default AccountExperience;
