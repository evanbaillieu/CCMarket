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
    post: string;
    users: string;
};
