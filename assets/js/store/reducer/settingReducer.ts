import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    lang: 'en',
    isAuth: false,
    isMobile: false,
    token: '',
};

export const settingReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                token: action.payload,
                isAuth: true,
            };
        },
        logout: (state) => {
            return {
                ...state,
                token: '',
                isAuth: false,
            };
        },
        setLang: (state, action) => {
            return {
                ...state,
                lang: action.payload,
            };
        },
        setIsMobile: (state, action) => {
            return {
                ...state,
                isMobile: action.payload,
            };
        },
    },
});

export const { setLogin, logout, setLang, setIsMobile } = settingReducer.actions;

export default settingReducer.reducer;
