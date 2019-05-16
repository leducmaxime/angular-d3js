import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainD3Component } from './main-d3/main-d3.component';

const routes: Routes = [
    { path: 'main-d3', component: MainD3Component },
    { path: '',   redirectTo: '/main-d3', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
