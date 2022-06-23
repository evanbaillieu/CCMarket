import config from '../config/default';

export const getCategoryCollection = async () => {
    const data = await fetch(`${config.baseUrl}/categories`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};
export const getAll = async () => {
    const data = await fetch(`${config.baseUrl}/categories`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};
