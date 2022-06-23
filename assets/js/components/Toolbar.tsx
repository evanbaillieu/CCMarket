import React, { FC, ChangeEvent, useState } from 'react';
import { sendMessage } from '../service/messengerService';
import Send from '../svg/send.svg';
import { useParams } from 'react-router-dom';

const ToolBar: FC = ({}) => {
    const [value, setValue] = useState('');
    const { id } = useParams();
    const send = () => {
        sendMessage({ content: value, dicustionId: id });
    };
    return (
        <div className="messenger_content_toolbar toolbar">
            <div className="toolbar_input">
                <input
                    type="text"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    value={value}
                    placeholder={'message.inputPlaceholder'}
                />
            </div>
            <div className="toolbar_btn_send">
                <button onClick={() => send()}>
                    <Send />
                </button>
            </div>
        </div>
    );
};

export default ToolBar;
