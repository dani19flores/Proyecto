import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from '../common/Card';

interface PieChartWidgetProps {
    title: string;
    data: { name: string; value: number }[];
}

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

export const PieChartWidget: React.FC<PieChartWidgetProps> = ({ title, data }) => {
    return (
        <Card title={title}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'var(--color-surface)',
                            border: 'var(--glass-border)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--color-text)',
                            boxShadow: 'var(--shadow-lg)',
                        }}
                        itemStyle={{ color: 'var(--color-text)' }}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </Card>
    );
};
