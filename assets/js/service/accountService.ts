import config from '../config/default';
import { IUser } from '../constant/Type/entity';

export const getMe = async (token: string) => {
    const data = await fetch(`${config.baseUrl}/auth/me`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'GET',
    });
    return data.json();
};

export const updateUser = async (token: string, idUser: string, data: IUser) => {
    const result = await fetch(`${config.baseUrl}/users/${idUser}`, {
        headers: {
            'Content-type': 'application/merge-patch+json',
            Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
        body: JSON.stringify(data),
    });
    return result.json();
};

export const updatePassword = async (token: string, idUser: string, password: string) => {
    const result = await fetch(`${config.baseUrl}/users/${idUser}`, {
        headers: {
            'Content-type': 'application/merge-patch+json',
            Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
        body: JSON.stringify(password),
    });
    return result.json();
};
