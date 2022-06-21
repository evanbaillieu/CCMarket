import React, { FC } from 'react';
import CardUser from './cardUser';

export interface IListDiscutionProps {
    content: any[];
}
const ListDiscution: FC<IListDiscutionProps> = ({ content }) => {
    return (
        <div className="messenger_list_user">
            {content &&
                content.map((item) => (
                    <CardUser key={item.id} name={`${item.sender.firstName} ${item.sender.lastName}`} />
                ))}
        </div>
    );
};

export default ListDiscution;
