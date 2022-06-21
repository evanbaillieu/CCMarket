import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const settingsSelector = (state: RootState) => state.settings;

const tokenSelector = createSelector(settingsSelector, (state) => state.token);

const isMobileSelector = createSelector(settingsSelector, (state) => state.isMobile);
const isAuthSelector = createSelector(settingsSelector, (state) => state.isAuth);
const langSelector = createSelector(settingsSelector, (state) => state.lang);
