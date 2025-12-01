import { FinancialMetric } from '../models/FinancialMetric';

export interface IFinancialRepository {
    getMetrics(): Promise<FinancialMetric[]>;
    getMetricById(id: string): Promise<FinancialMetric | undefined>;
}
