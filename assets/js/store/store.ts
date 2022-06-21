import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import settingReducer from './reducer/settingReducer';

const store = configureStore({
    reducer: {
        settings: settingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
