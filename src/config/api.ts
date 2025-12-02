// API Configuration
export const API_CONFIG = {
    // CoinGecko API - Free, no API key required
    COINGECKO_BASE_URL: 'https://api.coingecko.com/api/v3',

    // Alpha Vantage - Requires API key (free tier: 500 requests/day)
    // Get your free key at: https://www.alphavantage.co/support/#api-key
    ALPHA_VANTAGE_BASE_URL: 'https://www.alphavantage.co/query',
    ALPHA_VANTAGE_API_KEY: 'demo', // Replace with your API key

    // Financial Modeling Prep - Requires API key (free tier: 250 requests/day)
    // Get your free key at: https://site.financialmodelingprep.com/developer/docs
    FMP_BASE_URL: 'https://financialmodelingprep.com/api/v3',
    FMP_API_KEY: '', // Add your API key here

    // Request timeout
    TIMEOUT: 10000,
};

export const ENDPOINTS = {
    // CoinGecko endpoints
    CRYPTO_MARKETS: '/coins/markets',
    CRYPTO_GLOBAL: '/global',

    // You can add more endpoints as needed
};
