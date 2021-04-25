import { Component, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent {

  @Input() title: string;
  @Input() dataIn: MultiDataSet;
  @Input() labelsIn: Label;
  @Input() chartTypeIn: ChartType;

  constructor(){
    this.title = 'No title'
  }

}
