import { DashboardConfig } from '../models/DashboardConfig';

export interface IDashboardRepository {
    saveConfig(config: DashboardConfig): Promise<void>;
    loadConfig(): Promise<DashboardConfig | null>;
}
