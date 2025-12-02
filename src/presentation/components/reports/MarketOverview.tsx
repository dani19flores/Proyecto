import React from 'react';
import { useTranslation } from 'react-i18next';
import { CryptoReport } from '../../../application/slices/reportsSlice';
import { Card } from '../common/Card';
import { TrendingUp, DollarSign, Activity, Coins } from 'lucide-react';

interface MarketOverviewProps {
    cryptocurrencies: CryptoReport[];
}

export const MarketOverview: React.FC<MarketOverviewProps> = ({ cryptocurrencies }) => {
    const { t } = useTranslation();

    const totalMarketCap = cryptocurrencies.reduce((sum, crypto) => sum + crypto.marketCap, 0);
    const totalVolume = cryptocurrencies.reduce((sum, crypto) => sum + crypto.volume, 0);
    const avgChange = cryptocurrencies.length > 0
        ? cryptocurrencies.reduce((sum, crypto) => sum + crypto.priceChange24h, 0) /
        cryptocurrencies.length
        : 0;
    const gainers = cryptocurrencies.filter((c) => c.trend === 'up').length;

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            compactDisplay: 'short',
            style: 'currency',
            currency: 'USD',
        }).format(value);
    };

    const stats = [
        {
            label: t('marketStats.totalMarketCap'),
            value: formatNumber(totalMarketCap),
            icon: DollarSign,
            color: '#3b82f6',
        },
        {
            label: t('marketStats.totalVolume'),
            value: formatNumber(totalVolume),
            icon: Activity,
            color: '#8b5cf6',
        },
        {
            label: t('marketStats.averageChange'),
            value: `${avgChange >= 0 ? '+' : ''}${avgChange.toFixed(2)}%`,
            icon: TrendingUp,
            color: avgChange >= 0 ? '#22c55e' : '#ef4444',
        },
        {
            label: t('marketStats.gainers'),
            value: `${gainers} ${t('marketStats.gainersOf')} ${cryptocurrencies.length}`,
            icon: Coins,
            color: '#f59e0b',
        },
    ];

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
            }}
        >
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <Card key={index}>
                        <div style={{ padding: '1rem' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: `${stat.color}20`,
                                        padding: '0.5rem',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Icon size={20} style={{ color: stat.color }} />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                    {stat.label}
                                </h3>
                            </div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text)' }}>
                                {stat.value}
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};
