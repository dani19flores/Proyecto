import { configureStore } from '@reduxjs/toolkit';
import financeReducer from '../slices/financeSlice';
import dashboardReducer from '../slices/dashboardSlice';

export const store = configureStore({
    reducer: {
        finance: financeReducer,
        dashboard: dashboardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
