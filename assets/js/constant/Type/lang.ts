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
    post: string;
    users: string;
};
