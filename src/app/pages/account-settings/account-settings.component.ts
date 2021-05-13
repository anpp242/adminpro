import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector( "#theme" );
  public links:NodeListOf<Element>;

  constructor(
    private settingsService: SettingsService,
  ) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme()
  }

  changeColor( theme: string ){
    this.settingsService.changeColor( theme )
  }

  
}
