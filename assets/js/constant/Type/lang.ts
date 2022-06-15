export enum Language {
    FR = 'fr',
    EN = 'en',
}

export type TranslationFormat = {
    nav: {
        home: string;
        projects: string;
        jobs: string;
    };
    login: {
        title: string;
        email: string;
        password: string;
    };
    register: {
        firstname: string;
        lastname: string;
        email: string;
        dateDeNaisance: string;
        password: string;
        veryfPassword: string;
    };
    error: {
        firstname: string;
        lastname: string;
        email: string;
        dateDeNaisance: string;
        password: string;
        veryfPassword: string;
        tropcourt: string;
    };
    post: string;
    account: {
        title: string;
        settings: string;
        logout: string;
        firstName: string;
        lastName: string;
        email: string;
        birth: string;
        edit: string;
        changePassword: string;
        cancel: string;
        save: string;
        theme: string;
        light: string;
        dark: string;
        language: string;
        currentPassword: string;
        newPassword: string;
        confirmNewPassword: string;
        profileImg: string;
    };
};
