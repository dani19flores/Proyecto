import { IFinancialRepository } from '../../domain/repositories/IFinancialRepository';
import { FinancialMetric } from '../../domain/models/FinancialMetric';
import { MOCK_METRICS } from '../mock/financialData';

export class MockFinancialRepository implements IFinancialRepository {
    async getMetrics(): Promise<FinancialMetric[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_METRICS), 500); // Simulate network delay
        });
    }

    async getMetricById(id: string): Promise<FinancialMetric | undefined> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_METRICS.find((m) => m.id === id));
            }, 300);
        });
    }
}
