import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainD3Component } from './main-d3/main-d3.component';
import { PieChartDemoComponent } from './pie-chart-demo/pie-chart-demo.component';
import { TrainsComponent } from './trains/trains.component';
import { TrainComponent } from './train/train.component';
import { LocomotiveComponent } from './locomotive/locomotive.component';
import { WagonComponent } from './wagon/wagon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainD3Component,
    PieChartDemoComponent,
    TrainsComponent,
    TrainComponent,
    LocomotiveComponent,
    WagonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
