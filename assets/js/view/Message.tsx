import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Message: FC = ({}) => {
    const { id } = useParams();
    return <div>{id}</div>;
};

export default Message;
