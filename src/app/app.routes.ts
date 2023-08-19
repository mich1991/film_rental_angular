import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch:'full'},
  {path : 'stores', component: HomeComponent, pathMatch:'full'},
  {path : 'movies', component: HomeComponent, pathMatch:'full'},
  {path : 'actors', component: HomeComponent, pathMatch:'full'},
  {path : 'admin-staff', component: HomeComponent, pathMatch:'full'},
];
