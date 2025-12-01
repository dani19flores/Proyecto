export interface FinancialMetric {
    id: string;
    label: string;
    value: number;
    change: number; // Percentage change
    trend: 'up' | 'down' | 'neutral';
    history: { date: string; value: number }[];
}

export type MetricType = 'revenue' | 'profit' | 'expenses' | 'users';
