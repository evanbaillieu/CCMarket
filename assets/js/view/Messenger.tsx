import React, { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getAll, findDiscution } from '../service/messengerService';
import { useNavigate, useOutlet } from 'react-router-dom';
import ListDiscution from '../components/ListDiscution';
import Message from './Message';
import { useTranslation } from 'react-i18next';

const Messenger: FC = () => {
    const { t } = useTranslation();
    const { isError, isLoading, data } = useQuery('List-message', getAll, {
        refetchInterval: 10000,
        refetchIntervalInBackground: true,
    });
    const navigate = useNavigate();
    const outlet = useOutlet();
    if (data?.code === 401) {
        navigate('/login');
    }
    return (
        <div className="messenger">
            <div className="messenger_content">
                <div className="messenger_content_titre">
                    <h2>{t('messenger.discution')}</h2>
                </div>
                <ListDiscution content={data?.messaging?.discution} />
                <div className="messenger_content_message">{outlet}</div>
                <div className="messenger_content_toolbar"></div>
            </div>
        </div>
    );
};

export default Messenger;
