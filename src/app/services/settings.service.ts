import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector( "#theme" );
  private ls = localStorage.getItem('theme');

  constructor() {
    if(this.ls){ 
      const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';   
      this.linkTheme.setAttribute('href', url);
      localStorage.setItem('theme', url);   
    }
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll( ".selector" );
    links.forEach((ele)=>{
      ele.classList.remove('working');
      const btnTheme = ele.getAttribute('data-theme');
      const btnUrlTheme = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      console.log(currentTheme)
      if( btnUrlTheme === currentTheme ){
        ele.classList.add('working');
      }
    });
  }

  changeColor( theme: string ){
    this.linkTheme = document.querySelector( "#theme" );
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme()
  }

}
