import React, { FC, useState } from 'react';

export interface IBullMessageProps {
    content: string;
    isYou?: boolean;
    createAt?: string;
}

const BullMessage: FC<IBullMessageProps> = ({ content, createAt, isYou = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className={`message ${isYou ? 'you' : 'autre'}`} onClick={() => setIsVisible(!isVisible)}>
            <p className={`message_content`}>{content}</p>
            {isVisible ? <span>{createAt}</span> : <></>}
        </div>
    );
};

export default BullMessage;
