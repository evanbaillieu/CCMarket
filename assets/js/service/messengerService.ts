import config from '../config/default';
import { getTokken } from '../helper/utilHelper';

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
