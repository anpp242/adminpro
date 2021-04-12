import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

//Shared
import { SaredModule } from '../shared/sared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent
  ],
  exports: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SaredModule
  ]
})
export class PagesModule { }