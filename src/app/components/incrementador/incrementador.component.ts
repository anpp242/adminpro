import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() progress: number = 50;

  get getProgress(){
    return `${this.progress}%`
  }

  setValue(value: number){
    if(this.progress >= 100 && this.progress > 100){
      return this.progress = 100;
    }

    if(this.progress <= 0 && this.progress < 0){
      return this.progress = 0;
    }

    this.progress = this.progress + value;
    //console.log(this.progress);
  }


}
