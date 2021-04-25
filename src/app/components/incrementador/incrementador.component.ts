import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  ngOnInit(): void {
    this.buttonClass = `btn ${this.buttonClass}`;
  }

  @Input('valor') progress: number = 50;
  @Input() buttonClass: string;
  @Output() changeValue: EventEmitter<number> = new EventEmitter;

  get getProgress(){
    return `${this.progress}%`
  }

  setValue(value: number){
    if(this.progress > 100){
      this.changeValue.emit(100);
      return this.progress = 100;
    }

    if(this.progress < 0){
      this.changeValue.emit(0);
      return this.progress = 0;
    }

    this.progress = this.progress + value;
    this.changeValue.emit( this.progress );
  }

  onChanges( nuevoValor: number ){
    if( nuevoValor > 100 ){
      this.progress = 100;
    } else if(nuevoValor < 0){
      this.progress = 0;
    } else{
      this.progress = nuevoValor;
    }

    this.changeValue.emit( this.progress );    
  }
  
}
