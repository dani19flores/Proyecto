import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FinancialApiRepository } from '../../infrastructure/repositories/FinancialApiRepository';

const repository = new FinancialApiRepository();

export const fetchCryptoReports = createAsyncThunk(
    'reports/fetchCryptoReports',
    async (_, { rejectWithValue }) => {
        try {
            const metrics = await repository.getMetrics();
            return metrics;
        } catch (error) {
            return rejectWithValue('Failed to fetch cryptocurrency reports');
        }
    }
);

export interface CryptoReport {
    id: string;
    name: string;
    symbol: string;
    currentPrice: number;
    priceChange24h: number;
    marketCap: number;
    volume: number;
    trend: 'up' | 'down' | 'neutral';
}

interface ReportsState {
    cryptocurrencies: CryptoReport[];
    loading: boolean;
    error: string | null;
    lastUpdated: string | null;
}

const initialState: ReportsState = {
    cryptocurrencies: [],
    loading: false,
    error: null,
    lastUpdated: null,
};

const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        clearReports: (state) => {
            state.cryptocurrencies = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCryptoReports.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCryptoReports.fulfilled, (state, action) => {
                state.loading = false;
                state.cryptocurrencies = action.payload.map((metric) => ({
                    id: metric.id,
                    name: metric.label,
                    symbol: metric.id.toUpperCase(),
                    currentPrice: metric.value,
                    priceChange24h: metric.change,
                    marketCap: metric.value * 1000000, // Mock market cap
                    volume: metric.value * 100000, // Mock volume
                    trend: metric.trend,
                }));
                state.lastUpdated = new Date().toISOString();
            })
            .addCase(fetchCryptoReports.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearReports } = reportsSlice.actions;
export default reportsSlice.reducer;
