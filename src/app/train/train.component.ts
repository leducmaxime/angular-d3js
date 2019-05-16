import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

import { interval } from 'rxjs';

import { TrainData } from '../train-data';

@Component({
  selector: '[app-train]',
  templateUrl: './train.component.pug',
  styleUrls: ['./train.component.sass']
})
export class TrainComponent implements OnInit, AfterViewInit {

    @Input() data: TrainData;
    @Input() i: number;
    length = 0;
    offset = 0;

    constructor() { }

    ngOnInit() {
        this.length = (100 * (this.data.length - 1));
    }

    ngAfterViewInit() {
        const counter = interval(100);
        counter.subscribe(n => {
            this.offset += this.data.speed;
            if (this.offset > this.data.width) {
                this.offset = 0;
            }
        });
    }

    changedLength() {
        this.length = (100 * (this.data.length - 1));
    }
}
