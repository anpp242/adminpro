import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modules
import { PagesRouterModule } from './pages/pages.routing';
import { AuthRouterModule } from './auth/auth.routing';

//Components
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRouterModule,
    AuthRouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
