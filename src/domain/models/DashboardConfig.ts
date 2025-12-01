import { Widget } from './Widget';

export interface DashboardConfig {
    widgets: Widget[];
    theme: 'light' | 'dark';
}
