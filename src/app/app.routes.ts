import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch:'full'},
  {path : 'stores', component: HomeComponent},
  {path : 'movies', component: HomeComponent},
  {path : 'actors', component: HomeComponent},
  {path : 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
];
