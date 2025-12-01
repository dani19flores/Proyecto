import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../application/store';
import { fetchMetrics } from '../../application/slices/financeSlice';
import { loadDashboardConfig } from '../../application/slices/dashboardSlice';
import { DashboardGrid } from '../components/dashboard/DashboardGrid';
import { KPIWidget } from '../components/widgets/KPIWidget';

export const DashboardPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { metrics, loading: metricsLoading } = useSelector((state: RootState) => state.finance);
    const { config, loading: configLoading } = useSelector(
        (state: RootState) => state.dashboard
    );

    useEffect(() => {
        dispatch(fetchMetrics());
        dispatch(loadDashboardConfig());
    }, [dispatch]);

    if (metricsLoading || configLoading || !config) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div
                style={{
                    padding: '0 2rem',
                    marginBottom: '2rem',
                    marginTop: '2rem',
                }}
            >
                <h1>Financial Dashboard</h1>
            </div>

            {/* KPI Cards Section */}
            <div
                style={{
                    padding: '0 2rem',
                    marginBottom: '2rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1rem',
                }}
            >
                {['revenue', 'cash', 'coins', 'card-payments'].map((metricId) => {
                    const metric = metrics.find((m) => m.id === metricId);
                    if (!metric) return null;
                    return (
                        <KPIWidget
                            key={metric.id}
                            title={metric.label}
                            value={
                                metric.id === 'users'
                                    ? metric.value.toLocaleString()
                                    : `$${metric.value.toLocaleString()}`
                            }
                            change={metric.change}
                            trend={metric.trend}
                        />
                    );
                })}
            </div>

            <div style={{ padding: '0 2rem' }}>
                <DashboardGrid widgets={config.widgets} metrics={metrics} />
            </div>
        </div>
    );
};
