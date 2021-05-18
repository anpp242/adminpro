import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscriber, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public subscriber: Subscription;

  constructor() {
    /*this.returnObservable()
    .pipe(
      retry(1)  // Lo intenta de nuevo
    )
    .subscribe( 
      valor => console.log( 'Subs:', valor ) ,
      error => console.log( 'Error:', error ) ,
      ()=> console.log( 'Completo: se completo el proceso' ) 
    );*/

    this.subscriber = this.returnInterval()
      .subscribe( valor => console.log(valor) );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subscriber.unsubscribe();
  }

  returnInterval(){
    return interval(100)
      .pipe( //Permite transformar la información, todos se ejecutan de forma consecutiva
        map(res => res + 1), //transforma y muta la información
        filter( value => ( value % 2 === 0 ) ? true : false ), //Filtra la información y decide cual pasa, en este caso solo pares
        //take( 10 ), //Cuantos quiero que arroje
      );
  }

  returnObservable():Observable<number>{
    let n = -1;
    return new Observable<number>( observer=>{
      const interval = setInterval(()=>{
        n++;
        observer.next(n);
        if(n === 4){
          clearInterval(interval);
          observer.complete();
        }

        if(n === 2){
          observer.error('El contador llegó a 2')
        }
      }, 1000);

    } );
  }

}
