export type WidgetType = 'line-chart' | 'bar-chart' | 'pie-chart' | 'table';

export interface Widget {
    id: string;
    type: WidgetType;
    title: string;
    metricId?: string;
    grid: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}
