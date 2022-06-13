import React, { FC } from 'react';

export interface IBadgeProps {
    icon: any;
    title: string;
}

const Badge: FC<IBadgeProps> = ({ icon, title }) => {
    return (
        <div>
            {icon}
            <h6>{title}</h6>
        </div>
    );
};

export default Badge;
