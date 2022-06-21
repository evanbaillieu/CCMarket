import React, { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getAll } from '../service/messengerService';
import { useOutlet } from 'react-router-dom';

const Messenger: FC = () => {
    const { isError, isLoading, data } = useQuery('List-message', getAll, {
        refetchInterval: 10000,
        refetchIntervalInBackground: true,
    });
    const outlet = useOutlet();
    console.log(data);

    return (
        <div className="messenger">
            <div className="messenger_content">
                <div className="messeger_content_left">{'test'}</div>
                <div className="messeger_content_right">{outlet}</div>
            </div>
        </div>
    );
};

export default Messenger;
