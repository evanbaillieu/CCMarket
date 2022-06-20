import config from '../config/default';
import { getTokken } from '../helper/utilHelper';

export const getAll = async () => {
    const token = getTokken();
    const data = await fetch(`${config.baseUrl}/messenger/`, {
        headers: { Accept: 'application/json', Authorization: `bearer ${token}` },
        method: 'GET',
    });
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
