import React from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import { motion } from 'framer-motion';
import { Widget } from '../../../domain/models/Widget';
import { FinancialMetric } from '../../../domain/models/FinancialMetric';
import { LineChartWidget } from '../widgets/LineChartWidget';
import { BarChartWidget } from '../widgets/BarChartWidget';
import { PieChartWidget } from '../widgets/PieChartWidget';
import { TableWidget } from '../widgets/TableWidget';

import styles from './DashboardGrid.module.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

interface DashboardGridProps {
    widgets: Widget[];
    metrics: FinancialMetric[];
}

export const DashboardGrid: React.FC<DashboardGridProps> = ({ widgets, metrics }) => {
    const generateLayout = (): Layout[] => {
        return widgets.map((widget) => ({
            i: widget.id,
            x: widget.grid.x,
            y: widget.grid.y,
            w: widget.grid.w,
            h: widget.grid.h,
            minW: 2,
            minH: 2,
        }));
    };

    const renderWidgetContent = (widget: Widget) => {
        const metric = metrics.find((m) => m.id === widget.metricId);
        if (!metric) return <div>Metric not found</div>;

        switch (widget.type) {
            case 'line-chart':
                return <LineChartWidget title={widget.title} data={metric.history} />;
            case 'bar-chart':
                return <BarChartWidget title={widget.title} data={metric.history} />;
            case 'pie-chart':
                // For pie chart, we need to transform data
                const pieData = metric.history.slice(0, 4).map((h) => ({
                    name: h.date,
                    value: h.value,
                }));
                return <PieChartWidget title={widget.title} data={pieData} />;
            case 'table':
                return (
                    <TableWidget
                        title={widget.title}
                        data={metric.history}
                        columns={[
                            { key: 'date', label: 'Date' },
                            { key: 'value', label: 'Value' },
                        ]}
                    />
                );
            default:
                return <div>Unknown widget type</div>;
        }
    };

    return (
        <div className={styles.gridContainer}>
            <GridLayout
                className="layout"
                layout={generateLayout()}
                cols={12}
                rowHeight={60}
                width={1200}
                isDraggable={false}
                isResizable={false}
            >
                {widgets.map((widget) => (
                    <div key={widget.id} className={styles.gridItem}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            style={{ height: '100%' }}
                        >
                            {renderWidgetContent(widget)}
                        </motion.div>
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};
