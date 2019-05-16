import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { arc, pie, DefaultArcObject, PieArcDatum } from 'd3-shape';

import { PieChartData } from '../pie-chart-data';
import { InternalPieChartData } from '../internal-pie-chart-data';

@Component({
  selector: 'app-pie-chart-demo',
  templateUrl: './pie-chart-demo.component.pug',
  styleUrls: ['./pie-chart-demo.component.sass']
})
export class PieChartDemoComponent implements OnInit, OnChanges {

    @Input() data: Array<PieChartData> = [];

    @Input() width = 500;

    @Input() height = 500;

    @Input() radius = Math.min(this.width, this.height) / 2;

    public chartdata!: (PieArcDatum<InternalPieChartData> & DefaultArcObject)[];

    public center: string;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: any): void {
        this.center = `translate(${this.width / 2}, ${this.height / 2})`;

        const label = arc()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);

        const pieChartDataGenerator = pie<PieChartData>()
            .sort(null)
            .value((d: PieChartData) => d.value);

        const svgPathGenerator = arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);

        const x: PieArcDatum<InternalPieChartData>[] = pieChartDataGenerator(this.data);

        this.chartdata = x.map(element => {
            return {
                ...element,
                innerRadius: this.radius - 40,
                outerRadius: this.radius
            };
        });

        this.chartdata.forEach(d => {
            d.data.path = svgPathGenerator(d);
            d.data.textPosition = label.centroid(d);
            console.dir(d);
        });
    }
}
