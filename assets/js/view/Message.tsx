import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { findDiscution } from '../service/messengerService';
import BullMessage from '../components/BullMessage';

const Message: FC = ({}) => {
    const { id } = useParams();
    const [currentData, setCurrentData] = useState([]);
    const { isLoading, isError, data, refetch } = useQuery('list-message', () => findDiscution(id));
    console.log(data);
    return (
        <div className="messenger_content_message">
            {data &&
                data.message.map((item: any) => (
                    <BullMessage key={item.id} content={item.content} isYou={item.isYou} />
                ))}
        </div>
    );
};

export default Message;
