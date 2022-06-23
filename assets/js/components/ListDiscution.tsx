import React, { FC, useState } from 'react';
import CardUser from './cardUser';
import { useNavigate } from 'react-router-dom';

export interface IListDiscutionProps {
    content: any[];
}
const ListDiscution: FC<IListDiscutionProps> = ({ content }) => {
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();

    const selectCard = (id: string) => {
        setSelected(id);
        navigate(`/messenger/${id}`);
    };

    return (
        <div className="messenger_content_listUser">
            {content &&
                content.map((item) => (
                    <CardUser
                        key={item.id}
                        onClick={() => selectCard(item.id)}
                        isSelected={selected === item.id ? true : false}
                        name={`${item.sender.firstName} ${item.sender.lastName}`}
                    />
                ))}
        </div>
    );
};

export default ListDiscution;
