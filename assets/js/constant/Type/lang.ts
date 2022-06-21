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
    home: {
        title: string;
        description: string;
        getstarted: string;
        complete: string;
        secure: string;
        community: string;
        utilities: string;
        system: string;
        officeAutomation: string;
        multimedia: string;
        internet: string;
        design: string;
        game: string;
        education: string;
        developement: string;
        happiness: string;
        findYourOwn: string;
        thePlatFormThat: string;
        connectsContributors: string;
        and: string;
        openSourceProjectOwners: string;
    };
    footer: {
        home: string;
        projects: string;
        jobs: string;
        myaccount: string;
        messaging: string;
    };
    searchList: {
        catagory: string;
        utilities: string;
        system: string;
        officeAutomation: string;
        multimedia: string;
        internet: string;
        design: string;
        game: string;
        education: string;
        developement: string;
        profilleType: string;
        translator: string;
        language: string;
        english: string;
        spanish: string;
        franch: string;
        titlePrincipleProjets: string;
        buttonDevelopement: string;
        buttonEducation: string;
        titleProjets: string;
        projetsTitle: string;
        projetDescription: string;
        buttonSeeMore: string;
        titlePrincipleJobs: string;
        titleJabs: string;
        jabsTitle: string;
        jabsDescription: string;
        missions: string;
        listMissionsIl: string;
        listMissionsIls: string;
        listMissionsIlss: string;
        listMissionsIlsss: string;
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
