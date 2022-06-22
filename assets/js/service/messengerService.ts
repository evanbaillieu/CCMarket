import config from '../config/default';
import { getTokken } from '../helper/utilHelper';
import { IDiscution } from '../constant/Type/entity';
import { ISendMessage } from '../constant/Type/messenger';

export const getAll = async () => {
    const token = getTokken();
    console.log(token);
    const data = await fetch(`${config.baseUrl}/messenger/me`, {
        headers: { Accept: 'application/json', Authorization: `bearer ${token}` },
        method: 'GET',
    });
    console.log(data);
    const json = data.json();
    return json;
};

export const findDiscution = async (id: string) => {
    const token = getTokken();
    const data = await fetch(`${config.baseUrl}/messenger/${id}`, {
        headers: { Accept: 'application/json', Authorization: `bearer ${token}` },
        method: 'GET',
    });
    return data.json();
};

export const sendMessage = async ({ content, dicustionId }: ISendMessage) => {
    const token = getTokken();

    const data = await fetch(`${config.baseUrl}/messenger/message/`, {
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify({ dicustionId, content }),
    });
    const json = data.json();
    console.log(json);
    return json;
};
