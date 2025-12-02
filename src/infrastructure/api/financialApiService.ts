import { coinGeckoApi } from './axiosInstance';
import { ENDPOINTS } from '../../config/api';

export interface CryptoMarketData {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
    total_volume: number;
}

export interface GlobalCryptoData {
    data: {
        active_cryptocurrencies: number;
        markets: number;
        total_market_cap: {
            usd: number;
        };
        total_volume: {
            usd: number;
        };
        market_cap_percentage: {
            btc: number;
            eth: number;
        };
    };
}

class FinancialApiService {
    /**
     * Get top cryptocurrencies by market cap
     */
    async getCryptoMarkets(limit: number = 10): Promise<CryptoMarketData[]> {
        const response = await coinGeckoApi.get<CryptoMarketData[]>(ENDPOINTS.CRYPTO_MARKETS, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: limit,
                page: 1,
                sparkline: false,
            },
        });
        return response.data;
    }

    /**
     * Get global cryptocurrency market data
     */
    async getGlobalCryptoData(): Promise<GlobalCryptoData> {
        const response = await coinGeckoApi.get<GlobalCryptoData>(ENDPOINTS.CRYPTO_GLOBAL);
        return response.data;
    }

    /**
     * Get specific cryptocurrency data by ID
     */
    async getCryptoById(id: string): Promise<CryptoMarketData> {
        const response = await coinGeckoApi.get<CryptoMarketData[]>(ENDPOINTS.CRYPTO_MARKETS, {
            params: {
                vs_currency: 'usd',
                ids: id,
            },
        });
        return response.data[0];
    }
}

export const financialApiService = new FinancialApiService();
