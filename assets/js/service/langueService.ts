import config from '../config/default';

export const getLangueCollection = async () => {
    const data = await fetch(`${config.baseUrl}/langues/`, { headers: { Accept: 'application/json' } });
    return data.json();
};
