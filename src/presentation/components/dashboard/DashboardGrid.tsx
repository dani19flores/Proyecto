import React from 'react';
import { useTranslation } from 'react-i18next';
import GridLayout, { Layout } from 'react-grid-layout';
import { motion } from 'framer-motion';
import { Widget } from '../../../domain/models/Widget';
import { CryptoReport } from '../../../application/slices/reportsSlice';
import { LineChartWidget } from '../widgets/LineChartWidget';
import { BarChartWidget } from '../widgets/BarChartWidget';
import { PieChartWidget } from '../widgets/PieChartWidget';
import { TableWidget } from '../widgets/TableWidget';

import styles from './DashboardGrid.module.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

interface DashboardGridProps {
    widgets: Widget[];
    cryptocurrencies: CryptoReport[];
}

export const DashboardGrid: React.FC<DashboardGridProps> = ({ widgets, cryptocurrencies }) => {
    const { t } = useTranslation();

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

    // Transform crypto data for charts
    const getChartData = (count: number = 7) => {
        return cryptocurrencies.slice(0, count).map((crypto) => ({
            date: crypto.name,
            value: crypto.currentPrice,
        }));
    };

    // Transform crypto data for pie chart
    const getPieData = () => {
        return cryptocurrencies.slice(0, 5).map((crypto) => ({
            name: crypto.symbol,
            value: crypto.marketCap / 1e9, // Convert to billions
        }));
    };

    // Transform crypto data for table
    const getTableData = () => {
        return cryptocurrencies.slice(0, 10).map((crypto) => ({
            date: crypto.name,
            value: crypto.currentPrice,
        }));
    };

    const renderWidgetContent = (widget: Widget) => {
        if (cryptocurrencies.length === 0) {
            return <div>{t('common.loading')}</div>;
        }

        switch (widget.type) {
            case 'line-chart':
                return <LineChartWidget title={widget.title} data={getChartData()} />;
            case 'bar-chart':
                return <BarChartWidget title={widget.title} data={getChartData()} />;
            case 'pie-chart':
                return <PieChartWidget title={widget.title} data={getPieData()} />;
            case 'table':
                return (
                    <TableWidget
                        title={widget.title}
                        data={getTableData()}
                        columns={[
                            { key: 'date', label: t('cryptoTable.name') },
                            { key: 'value', label: t('cryptoTable.price') },
                        ]}
                    />
                );
            default:
                return <div>{t('common.unknownWidget')}</div>;
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
