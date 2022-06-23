import React, { FC, useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { useQuery } from 'react-query';
import { findDiscution } from '../service/messengerService';
import BullMessage from '../components/BullMessage';
import ToolBar from '../components/Toolbar';

const Message: FC = ({}) => {
    const { id } = useParams();
    const [currentData, setCurrentData] = useState([]);

    const { isLoading, isError, data, refetch } = useQuery('list-message', () => findDiscution(id), {
        refetchInterval: 2000,
        refetchIntervalInBackground: true,
    });

    useEffect(() => {
        const element = document.getElementById('list_message');
        console.log(element);
        if (element?.scrollTop === element?.scrollHeight) {
            return;
        }
        console.log(element);
        element.scrollTop = element.scrollHeight;
    }, [data]);
    return (
        <>
            <div className="messenger_content_message" id="list_message">
                {data &&
                    data?.message.map((item: any) => {
                        const date = new Date(item?.createAt);
                        return (
                            <BullMessage
                                key={item.id}
                                content={item.content}
                                isYou={item.isYou}
                                createAt={`${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`}
                            />
                        );
                    })}
            </div>
            <ToolBar refetch={refetch} />
        </>
    );
};

export default Message;
