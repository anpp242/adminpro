import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu: any[] = [];

  constructor() {
    this.menu = [
      {
        title: 'Dashboard',
        icono: 'mdi mdi-gauge',
        submenu: [
          { title: 'Main', path: '/' },
          { title: 'ProgressBar', path: 'progress' },
          { title: 'Graphics', path: 'grafica1' },
          { title: 'Promesas', path: 'promesas' },
          { title: 'RXJS', path: 'rxjs' },
        ]
      }
    ]
  }
}
