import config from '../config/default';
import { IUser } from '../constant/Type/entity';
import { getTokken } from '../helper/utilHelper';

export const getMe = async () => {
    const token = getTokken();
    const data = await fetch(`${config.baseUrl}/auth/me`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'GET',
    });
    return data.json();
};

export const updateUser = async (idUser: string, data: IUser) => {
    const token = getTokken();
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

export const updatePassword = async (currentPassword: string, newPassword: string) => {
    const token = getTokken();
    const result = await fetch(`${config.baseUrl}/auth/changePass`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify({ currentPassword, newPassword }),
    });
    return result.json();
};
