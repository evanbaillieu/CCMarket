import React, { FC } from 'react';

export interface ICardProps {
    name: string;
    srcUrl: string;
}
const Card: FC<ICardProps> = ({ name, srcUrl }) => {
    return (
        <div>
            <img src={srcUrl ? srcUrl : ''} alt={name} />
            <div>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Card;
