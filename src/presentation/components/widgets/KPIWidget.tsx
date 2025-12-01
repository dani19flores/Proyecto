import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card } from '../common/Card';
import styles from './KPIWidget.module.css';

interface KPIWidgetProps {
    title: string;
    value: string | number;
    change: number;
    trend: 'up' | 'down' | 'neutral';
}

export const KPIWidget: React.FC<KPIWidgetProps> = ({ title, value, change, trend }) => {
    const getTrendIcon = () => {
        switch (trend) {
            case 'up':
                return <ArrowUp size={16} className={styles.iconUp} />;
            case 'down':
                return <ArrowDown size={16} className={styles.iconDown} />;
            default:
                return <Minus size={16} className={styles.iconNeutral} />;
        }
    };

    const trendColor =
        trend === 'up'
            ? styles.trendUp
            : trend === 'down'
                ? styles.trendDown
                : styles.trendNeutral;

    return (
        <Card className={styles.kpiCard}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.value}>{value}</div>
                <div className={`${styles.trend} ${trendColor}`}>
                    {getTrendIcon()}
                    <span>{Math.abs(change)}%</span>
                    <span className={styles.period}>vs last month</span>
                </div>
            </div>
        </Card>
    );
};
