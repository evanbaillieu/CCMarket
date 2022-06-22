import React, { FC } from 'react';
import Profil from '../svg/profil.svg';

export interface ICardUserProps {
    name: string;
    onClick: () => void;
    isSelected: boolean;
}
const CardUser: FC<ICardUserProps> = ({ name, isSelected, onClick }) => {
    return (
        <div onClick={onClick} className={`cardUser ${isSelected ? 'select' : ''}`}>
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
