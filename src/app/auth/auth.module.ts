import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

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
    RouterModule, 
    FormsModule
  ]
})
export class AuthModule { }
