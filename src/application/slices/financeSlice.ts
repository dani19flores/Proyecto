import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FinancialMetric } from '../../domain/models/FinancialMetric';
import { MockFinancialRepository } from '../../infrastructure/repositories/MockFinancialRepository';

const repository = new MockFinancialRepository();

export const fetchMetrics = createAsyncThunk('finance/fetchMetrics', async () => {
    return await repository.getMetrics();
});

interface FinanceState {
    metrics: FinancialMetric[];
    loading: boolean;
}

const initialState: FinanceState = {
    metrics: [],
    loading: false,
};

const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMetrics.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMetrics.fulfilled, (state, action: PayloadAction<FinancialMetric[]>) => {
                state.loading = false;
                state.metrics = action.payload;
            });
    },
});

export default financeSlice.reducer;
