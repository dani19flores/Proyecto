import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Card } from '../common/Card';
import { FinancialMetric } from '../../../domain/models/FinancialMetric';

interface LineChartWidgetProps {
    title: string;
    data: FinancialMetric['history'];
    color?: string;
}

export const LineChartWidget: React.FC<LineChartWidgetProps> = ({
    title,
    data,
    color = '#6366f1',
}) => {
    return (
        <Card title={title}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
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
                        itemStyle={{ color: 'var(--color-text)' }}
                        labelStyle={{ color: 'var(--color-text-muted)' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke={color}
                        strokeWidth={3}
                        dot={{ r: 4, fill: color, strokeWidth: 0 }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};
