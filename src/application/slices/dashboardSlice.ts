import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DashboardConfig } from '../../domain/models/DashboardConfig';
import { LocalStorageDashboardRepository } from '../../infrastructure/repositories/LocalStorageDashboardRepository';

const repository = new LocalStorageDashboardRepository();

export const loadDashboardConfig = createAsyncThunk('dashboard/loadConfig', async () => {
    return await repository.loadConfig();
});

interface DashboardState {
    config: DashboardConfig | null;
    loading: boolean;
}

const initialState: DashboardState = {
    config: null,
    loading: false,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadDashboardConfig.fulfilled, (state, action) => {
            state.config = action.payload;
        });
    },
});

export default dashboardSlice.reducer;
