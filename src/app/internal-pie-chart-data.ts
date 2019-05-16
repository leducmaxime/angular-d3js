import { PieChartData } from './pie-chart-data';

export interface InternalPieChartData extends PieChartData {
    path?: string;
    textPosition?: [number, number];
}
