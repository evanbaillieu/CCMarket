import React, { FC } from 'react';

export interface IBullMessageProps {
    content: string;
    isYou?: boolean;
}
const BullMessage: FC<IBullMessageProps> = ({ content, isYou = false }) => {
    return (
        <div className={`message ${isYou ? 'you' : 'autre'}`}>
            <p>{content}</p>
        </div>
    );
};

export default BullMessage;
