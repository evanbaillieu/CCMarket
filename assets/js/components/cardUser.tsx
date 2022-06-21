import React, { FC } from 'react';
import Profil from '../svg/profil.svg';

export interface ICardUserProps {
    name: string;
}
const CardUser: FC<ICardUserProps> = ({ name }) => {
    return (
        <div className="cardUser">
            <div className="cardUser_left">
                <div className="cardUser_left_icon">
                    <Profil />
                </div>
            </div>
            <div className="cardUser_right">
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default CardUser;
