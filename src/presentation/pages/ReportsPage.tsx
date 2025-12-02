import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState, AppDispatch } from '../../application/store';
import { fetchCryptoReports } from '../../application/slices/reportsSlice';
import { CryptoTable } from '../components/reports/CryptoTable';
import { MarketOverview } from '../components/reports/MarketOverview';
import { RefreshCw } from 'lucide-react';
import { Button } from '../components/common/Button';

export const ReportsPage: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { cryptocurrencies, loading, error, lastUpdated } = useSelector(
        (state: RootState) => state.reports
    );

    useEffect(() => {
        dispatch(fetchCryptoReports());
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchCryptoReports());
    };

    if (loading && cryptocurrencies.length === 0) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>{t('reports.loadingReports')}</h2>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            {/* Header */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem',
                }}
            >
                <div>
                    <h1 style={{ margin: 0, marginBottom: '0.5rem' }}>{t('reports.title')}</h1>
                    <p style={{ margin: 0, color: '#666' }}>
                        {t('reports.subtitle')}
                        {lastUpdated && (
                            <span style={{ marginLeft: '1rem', fontSize: '0.9em' }}>
                                {t('reports.lastUpdated')}: {new Date(lastUpdated).toLocaleTimeString()}
                            </span>
                        )}
                    </p>
                </div>
                <Button onClick={handleRefresh} disabled={loading} size="md" variant="secondary">
                    <RefreshCw size={16} style={{ marginRight: '0.5rem' }} />
                    {loading ? t('common.refreshing') : t('reports.refreshData')}
                </Button>
            </div>

            {/* Error State */}
            {error && (
                <div
                    style={{
                        padding: '1rem',
                        marginBottom: '2rem',
                        backgroundColor: '#fee',
                        border: '1px solid #fcc',
                        borderRadius: '8px',
                        color: '#c33',
                    }}
                >
                    <strong>{t('common.error')}:</strong> {error}
                </div>
            )}

            {/* Market Overview */}
            <MarketOverview cryptocurrencies={cryptocurrencies} />

            {/* Crypto Table */}
            <div style={{ marginTop: '2rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>{t('reports.topCryptocurrencies')}</h2>
                <CryptoTable cryptocurrencies={cryptocurrencies} loading={loading} />
            </div>
        </div>
    );
};
