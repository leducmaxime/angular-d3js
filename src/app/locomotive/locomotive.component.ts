import { Component, OnInit, AfterViewInit } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: '[app-locomotive]',
  templateUrl: './locomotive.component.pug',
  styleUrls: ['./locomotive.component.sass']
})
export class LocomotiveComponent implements OnInit, AfterViewInit {

    i = 0;
    modulo = 40;
    smokecount = 8;
    smokes = [];

    constructor() { }

    ngOnInit() {
        for (const i of [...Array(this.smokecount).keys()]) {
            this.smokes[i] = {i, x: 0, y: 0, r: 0, o: 0};
        }
    }

    ngAfterViewInit() {
        const counter = interval(100);
        counter.subscribe(n => {
            this.i = (this.i + 1) % this.modulo;

            this.smokes = this.smokes.map(smoke => {
                const i = (this.i + (this.modulo / this.smokecount) * smoke.i) % this.modulo;
                smoke.x = Math.pow(i, 2);
                smoke.y = Math.log10(i) * 50;
                smoke.r = i;
                smoke.o = 1 - i / this.modulo;
                return smoke;
            });
        });
    }
}
