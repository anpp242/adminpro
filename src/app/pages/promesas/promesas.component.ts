import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    //FIRST PROMISE
    const promesa = new Promise( (resolve, reject)=>{
      let n = 2;
      if(n === 2){
        resolve('Success');
      }else{
        reject('Error')
      }
    } );

    promesa.then( (res)=>{
      //console.log( 'Respuesta positiva: ', res );
    } )
    .catch((rej)=>{
      //console.log('Ocurrio un error en la promesa: ', rej);
    });

    //SECOND PROMISE  
    this.getUsers().then( resolve=>{
      console.log( resolve )
    } );
  }


  getUsers(){
    const promesa = new Promise( resolve =>{
      fetch('https://reqres.in/api/users')
      .then(  resp => resp.json() )
      .then( body => resolve( body.data ) );
    } );
    return promesa;
  }
}
