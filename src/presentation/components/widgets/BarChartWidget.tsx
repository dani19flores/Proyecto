import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Card } from '../common/Card';
import { FinancialMetric } from '../../../domain/models/FinancialMetric';

interface BarChartWidgetProps {
    title: string;
    data: FinancialMetric['history'];
    color?: string;
}

export const BarChartWidget: React.FC<BarChartWidgetProps> = ({
    title,
    data,
    color = '#10b981',
}) => {
    return (
        <Card title={title}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--color-border)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="date"
                        stroke="var(--color-text-muted)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="var(--color-text-muted)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'var(--color-surface)',
                            border: 'var(--glass-border)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--color-text)',
                            boxShadow: 'var(--shadow-lg)',
                        }}
                        cursor={{ fill: 'var(--color-surface-hover)' }}
                        itemStyle={{ color: 'var(--color-text)' }}
                        labelStyle={{ color: 'var(--color-text-muted)' }}
                    />
                    <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};
