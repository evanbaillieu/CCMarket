import config from '../config/default';

export const getJob = async (idJob: string) => {
    const data = await fetch(`${config.baseUrl}/jobs/${idJob}`, {
        headers: {
            'Content-type': 'application/json',
        },
        method: 'GET',
    });
    return data.json();
};

export const getLeader = async (idLeader: string) => {
    const data = await fetch(`${config.customUrl}${idLeader}`, {
        headers: {
            'Content-type': 'application/json',
        },
        method: 'GET',
    });
    return data.json();
};
