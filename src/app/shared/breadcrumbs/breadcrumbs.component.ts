import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{
  public title;
  public titulosSub: Subscription;

  constructor(
    private router : Router
  ) {
    this.titulosSub = this.getArgumentsRoute()
    .subscribe( data=>{
      this.title = data.title;
      document.title = `Adminpro - ${this.title}`;
    });
  }

  ngOnDestroy(): void {
    this.titulosSub.unsubscribe();
    console.log('cerro');
  }

  getArgumentsRoute(){
    return this.router.events
      .pipe(
        filter( res => res instanceof ActivationEnd ),
        filter( (res:ActivationEnd) => res.snapshot.firstChild === null  ),
        map( (res:ActivationEnd) => res.snapshot.data ),
      )     
  }

}
