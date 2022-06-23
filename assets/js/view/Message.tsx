import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { findDiscution } from '../service/messengerService';

const Message: FC = ({}) => {
    const { id } = useParams();
    const [currentData, setCurrentData] = useState([]);
    const { isLoading, isError, data, refetch } = useQuery('list-message', () => findDiscution(id));

    return (
        <div className="messenger_content_message">
            {data && data.message.map((item: any) => <p key={item.id}>{item.content}</p>)}
        </div>
    );
};

export default Message;
