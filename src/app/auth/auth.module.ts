import { NgModule } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,  
  ],
  exports: [
    LoginComponent,
    RegisterComponent,  
  ],
  imports: [
    RouterModule
  ]
})
export class AuthModule { }
