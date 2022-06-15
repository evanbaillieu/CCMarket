import config from '../config/default';

export const checkIsEmpty = (data: any): boolean => {
    let isEmpty = false;

    Object.values(data).map((value) => {
        if (!value) {
            isEmpty = true;
        }
        return value;
    });

    return isEmpty;
};

export const checkIsNotEmpty = (data: any): boolean => {
    let isEmpty = false;

    Object.values(data).map((value) => {
        if (value) {
            isEmpty = true;
        }
        return value;
    });

    return isEmpty;
};

export const setTokken = (tokken: string) => {
    localStorage.setItem(config.tokken.key, tokken);
};

export const getTokken = (): string => {
    return localStorage.getItem(config.tokken.key);
};
