import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {authGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: "full"},
  {path: 'panel', component: LoginComponent, pathMatch: "full", canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
