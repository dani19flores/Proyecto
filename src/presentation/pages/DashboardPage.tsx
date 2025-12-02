import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState, AppDispatch } from '../../application/store';
import { fetchCryptoReports } from '../../application/slices/reportsSlice';
import { loadDashboardConfig } from '../../application/slices/dashboardSlice';
import { DashboardGrid } from '../components/dashboard/DashboardGrid';
import { KPIWidget } from '../components/widgets/KPIWidget';
import { RefreshCw } from 'lucide-react';
import { Button } from '../components/common/Button';

export const DashboardPage: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { cryptocurrencies, loading, lastUpdated } = useSelector(
        (state: RootState) => state.reports
    );
    const { config } = useSelector(
        (state: RootState) => state.dashboard
    );

    useEffect(() => {
        dispatch(fetchCryptoReports());
        dispatch(loadDashboardConfig());
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchCryptoReports());
    };

    // Calculate metrics from crypto data
    const totalMarketCap = cryptocurrencies.reduce((sum, crypto) => sum + crypto.marketCap, 0);
    const totalVolume = cryptocurrencies.reduce((sum, crypto) => sum + crypto.volume, 0);
    const btcData = cryptocurrencies.find((c) => c.symbol === 'BTC');
    const btcDominance = btcData ? ((btcData.marketCap / totalMarketCap) * 100) : 0;
    const activeCoins = cryptocurrencies.length;

    if (loading && cryptocurrencies.length === 0) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>{t('common.loading')}</h2>
            </div>
        );
    }

    return (
        <div>
            <div
                style={{
                    padding: '0 2rem',
                    marginBottom: '2rem',
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div>
                    <h1 style={{ margin: 0, marginBottom: '0.5rem' }}>{t('dashboard.title')}</h1>
                    <p style={{ margin: 0, color: '#666' }}>
                        {t('dashboard.subtitle')}
                        {lastUpdated && (
                            <span style={{ marginLeft: '1rem', fontSize: '0.9em' }}>
                                {t('reports.lastUpdated')}: {new Date(lastUpdated).toLocaleTimeString()}
                            </span>
                        )}
                    </p>
                </div>
                <Button onClick={handleRefresh} disabled={loading} size="md" variant="secondary">
                    <RefreshCw size={16} style={{ marginRight: '0.5rem' }} />
                    {loading ? t('common.refreshing') : t('common.refresh')}
                </Button>
            </div>

            {/* KPI Cards Section */}
            <div
                style={{
                    padding: '0 2rem',
                    marginBottom: '2rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1rem',
                }}
            >
                <KPIWidget
                    title={t('metrics.marketCap')}
                    value={`$${(totalMarketCap / 1e12).toFixed(2)}T`}
                    change={cryptocurrencies[0]?.priceChange24h || 0}
                    trend={cryptocurrencies[0]?.trend || 'neutral'}
                />
                <KPIWidget
                    title={t('metrics.volume24h')}
                    value={`$${(totalVolume / 1e9).toFixed(2)}B`}
                    change={cryptocurrencies[1]?.priceChange24h || 0}
                    trend={cryptocurrencies[1]?.trend || 'neutral'}
                />
                <KPIWidget
                    title={t('metrics.dominance')}
                    value={`${btcDominance.toFixed(2)}%`}
                    change={btcData?.priceChange24h || 0}
                    trend={btcData?.trend || 'neutral'}
                />
                <KPIWidget
                    title={t('metrics.activeCoins')}
                    value={activeCoins.toString()}
                    change={0}
                    trend="neutral"
                />
            </div>

            {/* Dashboard Grid with Charts */}
            {config && (
                <div style={{ padding: '0 2rem' }}>
                    <DashboardGrid
                        widgets={config.widgets}
                        cryptocurrencies={cryptocurrencies}
                    />
                </div>
            )}
        </div>
    );
};
