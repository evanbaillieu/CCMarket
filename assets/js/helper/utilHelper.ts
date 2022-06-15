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
