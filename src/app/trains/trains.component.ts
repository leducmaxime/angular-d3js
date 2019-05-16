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
    ];

    public width = 1000;
    public height = 1000;
    public spacing = 170;

    constructor() { }

    ngOnInit() {
        this.trainsData = this.trainsData.map(train => ({...train, width: this.width}));
    }

    addTrain() {
        this.trainsData.push({
            length: (Math.round(Math.random() * 6) + 1),
            speed: (Math.round(Math.random() * 14) + 1),
            width: this.width });
    }

}
