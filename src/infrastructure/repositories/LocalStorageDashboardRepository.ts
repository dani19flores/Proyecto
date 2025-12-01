import { IDashboardRepository } from '../../domain/repositories/IDashboardRepository';
import { DashboardConfig } from '../../domain/models/DashboardConfig';

const STORAGE_KEY = 'financial_dashboard_config';

const DEFAULT_CONFIG: DashboardConfig = {
    theme: 'light',
    widgets: [
        {
            id: 'w1',
            type: 'line-chart',
            title: 'Revenue Trend',
            metricId: 'revenue',
            grid: { x: 0, y: 0, w: 6, h: 4 },
        },
        {
            id: 'w2',
            type: 'bar-chart',
            title: 'Expenses Overview',
            metricId: 'expenses',
            grid: { x: 6, y: 0, w: 6, h: 4 },
        },
        {
            id: 'w3',
            type: 'pie-chart',
            title: 'Profit Distribution',
            metricId: 'profit',
            grid: { x: 0, y: 4, w: 4, h: 4 },
        },
        {
            id: 'w4',
            type: 'table',
            title: 'Recent Transactions',
            metricId: 'revenue',
            grid: { x: 4, y: 4, w: 8, h: 4 },
        },
    ],
};

export class LocalStorageDashboardRepository implements IDashboardRepository {
    async saveConfig(config: DashboardConfig): Promise<void> {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    }

    async loadConfig(): Promise<DashboardConfig | null> {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data) as DashboardConfig;
        }
        return DEFAULT_CONFIG;
    }
}
