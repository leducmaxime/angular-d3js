import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { PieChartData } from '../pie-chart-data';

@Component({
    selector: 'app-main-d3',
    templateUrl: './main-d3.component.pug',
    styleUrls: ['./main-d3.component.sass']
})

export class MainD3Component implements OnInit {
    public pieChartData: Array<PieChartData> = [
        { value: 10, caption: 'apples', color: 'green' },
        { value: 20, caption: 'oranges', color: 'orange' },
        { value: 30, caption: 'bananas', color: 'yellow' },
        { value: 40, caption: 'kiwis', color: 'grey' }
    ];

    constructor() {}
    ngOnInit() {
        const counter = interval(200);
        counter.subscribe(n => {
            const copy = this.pieChartData.map(x => Object.assign({}, x));
            copy[0].value += .2;
            this.pieChartData = copy;
        });
    }
}
