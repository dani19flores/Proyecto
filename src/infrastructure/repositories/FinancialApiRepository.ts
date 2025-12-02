import { IFinancialRepository } from '../../domain/repositories/IFinancialRepository';
import { FinancialMetric } from '../../domain/models/FinancialMetric';
import { financialApiService, CryptoMarketData } from '../api/financialApiService';

export class FinancialApiRepository implements IFinancialRepository {
    /**
     * Transform cryptocurrency data to FinancialMetric format
     */
    private transformCryptoToMetric(crypto: CryptoMarketData): FinancialMetric {
        // Get historical data (mock for now, as CoinGecko historical requires different endpoint)
        const currentValue = crypto.current_price;
        const change = crypto.price_change_percentage_24h;

        // Generate mock historical data based on current price and change
        const history = this.generateMockHistory(currentValue, change);

        return {
            id: crypto.id,
            label: crypto.name,
            value: currentValue,
            change: change,
            trend: change > 0 ? 'up' : change < 0 ? 'down' : 'neutral',
            history: history,
        };
    }

    /**
     * Generate mock historical data for the last 5 periods
     */
    private generateMockHistory(currentValue: number, changePercent: number) {
        const today = new Date();
        const history = [];

        for (let i = 4; i >= 0; i--) {
            const date = new Date(today);
            date.setMonth(date.getMonth() - i);
            const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            // Calculate approximate historical values
            const multiplier = i === 0 ? 1 : (1 - (changePercent / 100) * (i / 5));
            const value = currentValue * multiplier;

            history.push({
                date: dateStr,
                value: Math.round(value * 100) / 100,
            });
        }

        return history;
    }

    async getMetrics(): Promise<FinancialMetric[]> {
        try {
            // Get top 7 cryptocurrencies
            const cryptoData = await financialApiService.getCryptoMarkets(7);

            // Transform to FinancialMetric format
            const metrics = cryptoData.map((crypto) => this.transformCryptoToMetric(crypto));

            return metrics;
        } catch (error) {
            console.error('Error fetching metrics from API:', error);
            throw new Error('Failed to fetch financial metrics from API');
        }
    }

    async getMetricById(id: string): Promise<FinancialMetric | undefined> {
        try {
            const crypto = await financialApiService.getCryptoById(id);
            return this.transformCryptoToMetric(crypto);
        } catch (error) {
            console.error(`Error fetching metric ${id} from API:`, error);
            return undefined;
        }
    }
}
