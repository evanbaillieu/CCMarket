import React, { FC, ChangeEvent, useState } from 'react';
import Send from '../svg/send.svg';

const ToolBar: FC = ({}) => {
    const [value, setValue] = useState('');
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
                <button onClick={() => console.log('send')}>
                    <Send />
                </button>
            </div>
        </div>
    );
};

export default ToolBar;
