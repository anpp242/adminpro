import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {
  public progreso1: number = 0;
  public progreso2: number = 0;

  get getProgress1(){
    return `${this.progreso1}%`;
  }

  get getProgress2(){
    return `${this.progreso2}%`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
