import config from '../config/default';
import { IJob } from '../constant/Type/entity';
import { getTokken } from '../helper/utilHelper';

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

export const getJobCollection = async () => {
    const data = await fetch(`${config.baseUrl}/jobs?page=1`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};

export const getJobCollectionForYou = async (ProfilType: string) => {
    const data = await fetch(`${config.baseUrl}/jobs?page=1&profilType.name=${ProfilType}`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};

export const getJobCollectionOwner = async (id: string) => {
    const data = await fetch(`${config.baseUrl}/jobs?page=1&id=${id}`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};

export const addJob = async (data: IJob, profilType: string, project: string) => {
    const token = getTokken();
    data.profilType = profilType;
    data.Project = project;
    const response = await fetch(`${config.baseUrl}/jobs`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify(data),
    });

    const json = await response.json();
    return json;
};


export const updateJob = async (jobId: string, data: IJob, profilType: string, project: string) => {
    const token = getTokken();
    data.profilType = profilType;
    data.Project = project;
    const response = await fetch(`${config.baseUrl}/jobs/${jobId}`, {
        headers: {
            'Content-type': 'application/merge-patch+json',
            Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
        body: JSON.stringify(data),
    });

    const json = await response.json();


export const getJobCollectionSearch = async (ProfilType: string, description: string, language: string) => {
    const data = await fetch(
        `${config.baseUrl}/jobs?page=1&${description ? `description=${description}&` : ''}${
            ProfilType ? `profilType.name=${ProfilType}&` : ''
        }${language ? `language.name=${language}&` : ''}`,
        {
            headers: { Accept: 'application/json' },
            method: 'GET',
        },
    );
    console.log(data);
    const json = data.json();
    return json;
};
