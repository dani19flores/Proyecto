import React from 'react';
import { useTranslation } from 'react-i18next';
import { CryptoReport } from '../../../application/slices/reportsSlice';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card } from '../common/Card';

interface CryptoTableProps {
    cryptocurrencies: CryptoReport[];
    loading: boolean;
}

export const CryptoTable: React.FC<CryptoTableProps> = ({ cryptocurrencies, loading }) => {
    const { t } = useTranslation();

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            compactDisplay: 'short',
        }).format(value);
    };

    const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
        switch (trend) {
            case 'up':
                return <ArrowUp size={16} style={{ color: '#22c55e' }} />;
            case 'down':
                return <ArrowDown size={16} style={{ color: '#ef4444' }} />;
            default:
                return <Minus size={16} style={{ color: '#64748b' }} />;
        }
    };

    if (loading && cryptocurrencies.length === 0) {
        return <div style={{ textAlign: 'center', padding: '2rem' }}>{t('common.loading')}</div>;
    }

    if (cryptocurrencies.length === 0) {
        return <div style={{ textAlign: 'center', padding: '2rem' }}>{t('common.noData')}</div>;
    }

    return (
        <Card>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>{t('cryptoTable.rank')}</th>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>{t('cryptoTable.name')}</th>
                            <th style={{ padding: '1rem', textAlign: 'right' }}>{t('cryptoTable.price')}</th>
                            <th style={{ padding: '1rem', textAlign: 'right' }}>{t('cryptoTable.change24h')}</th>
                            <th style={{ padding: '1rem', textAlign: 'right' }}>{t('cryptoTable.marketCap')}</th>
                            <th style={{ padding: '1rem', textAlign: 'right' }}>{t('cryptoTable.volume24h')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptocurrencies.map((crypto, index) => (
                            <tr
                                key={crypto.id}
                                style={{
                                    borderBottom: '1px solid #f3f4f6',
                                    transition: 'background-color 0.2s',
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor = '#f9fafb')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = 'transparent')
                                }
                            >
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>
                                    {index + 1}
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{crypto.name}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                            {crypto.symbol}
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 'bold' }}>
                                    {formatCurrency(crypto.currentPrice)}
                                </td>
                                <td
                                    style={{
                                        padding: '1rem',
                                        textAlign: 'right',
                                        color:
                                            crypto.trend === 'up'
                                                ? '#22c55e'
                                                : crypto.trend === 'down'
                                                    ? '#ef4444'
                                                    : '#64748b',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                        }}
                                    >
                                        {getTrendIcon(crypto.trend)}
                                        {Math.abs(crypto.priceChange24h).toFixed(2)}%
                                    </div>
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    {formatNumber(crypto.marketCap)}
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    {formatNumber(crypto.volume)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};
