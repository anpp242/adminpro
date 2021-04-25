import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public saleGraph = {
    title: '',
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    data: [350, 450, 100],
    type: 'doughnut'
  }

  public managersGraph = {
    title: 'Managers Graphic',
    labels: ['Donald', 'Mickey', 'Goofy', 'Lucas'],
    data: [55, 37, 150, 12],
    type: 'doughnut'
  }

  public herosGraph = {
    title: 'Heros Graphic',
    labels: ['Ironman', 'Batman', 'Flash'],
    data: [88, 20, 60],
    type: 'doughnut'
  }

  public reportGraph = {
    title: 'General Report Graphic',
    labels: ['Legal', 'Sales', 'Finance', 'MK'],
    data: [555, 327, 150, 112],
    type: 'doughnut'
  }

}
