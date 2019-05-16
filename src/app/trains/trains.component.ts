import { Component, OnInit } from '@angular/core';

import { TrainData } from '../train-data';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.pug',
  styleUrls: ['./trains.component.sass']
})
export class TrainsComponent implements OnInit {

    public trainsData: Array<TrainData> = [
        { length: 5, speed: 10 },
        { length: 7, speed: 4 },
        { length: 3, speed: 18 },
    ];

    public width = 1000;
    public height = 500;
    public spacing = 150;

    constructor() { }

    ngOnInit() {
        this.trainsData = this.trainsData.map(train => ({...train, width: this.width}));
    }

}
