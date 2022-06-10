export enum Language {
    FR = 'fr',
    EN = 'en',
}

export type TranslationFormat = {
    nav: {
        titre1: string;
        titre2: string;
    };
    post: string;
    users: string;
};
