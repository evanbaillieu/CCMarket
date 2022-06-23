import config from '../config/default';
import { IProject } from '../constant/Type/entity';
import { getTokken } from '../helper/utilHelper';

export const getProjects = async () => {
    const data = await fetch(`${config.baseUrl}/projects?page=1`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};

export const getProjectCollectionCategories = async (name: string) => {
    const data = await fetch(`${config.baseUrl}/projects?page=1&category.name=${name}`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};

export const getProject = async (idProject: string) => {
    const data = await fetch(`${config.baseUrl}/projects/${idProject}`, {
        headers: { 'Content-type': 'application/json' },
        method: 'GET',
    });
    return data.json();
};
const getProjectCollection = async () => {
    const data = await fetch(`${config.baseUrl}/projects/?page=1`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};
export default getProjectCollection;

export const addProject = async (data: IProject, category: string, leader: string) => {
    const token = getTokken();
    data.category = category;
    data.leader = leader;
    const response = await fetch(`${config.baseUrl}/projects`, {
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

export const getProjectsSearch = async (category: string, description: string) => {
    const data = await fetch(`${config.baseUrl}/projects?description=${description}&category.name=${category}`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });

    console.log(data);
    const json = data.json();
    return json;
};

export const updateProject = async (projectId: string, data: IProject, category: string) => {
    const token = getTokken();
    data.category = category;
    const response = await fetch(`${config.baseUrl}/projects/${projectId}`, {
        headers: {
            'Content-type': 'application/merge-patch+json',
            Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
        body: JSON.stringify(data),
    });

    const json = await response.json();

    return json;
};
