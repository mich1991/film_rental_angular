import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {authGuard} from "../../guards/auth.guard";
import {CustomerPanelComponent} from "./customer-panel/customer-panel.component";

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: "full"},
  {path: 'panel', component: CustomerPanelComponent, pathMatch: "full", canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
