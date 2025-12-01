import React, { useState } from 'react';
import { Card } from '../common/Card';
import styles from './TableWidget.module.css';

interface TableWidgetProps {
    title: string;
    data: any[];
    columns: { key: string; label: string }[];
}

export const TableWidget: React.FC<TableWidgetProps> = ({ title, data, columns }) => {
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDirection('asc');
        }
    };

    const sortedData = React.useMemo(() => {
        if (!sortKey) return data;
        return [...data].sort((a, b) => {
            if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortKey, sortDirection]);

    return (
        <Card title={title}>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className={styles.th}
                                    onClick={() => handleSort(col.key)}
                                >
                                    {col.label}
                                    {sortKey === col.key && (
                                        <span className={styles.sortIcon}>
                                            {sortDirection === 'asc' ? ' ↑' : ' ↓'}
                                        </span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, i) => (
                            <tr key={i} className={styles.tr}>
                                {columns.map((col) => (
                                    <td key={col.key} className={styles.td}>
                                        {row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};
