import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'', component: AuthComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: '*', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
