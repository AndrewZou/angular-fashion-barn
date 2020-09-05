import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
//import { DishMenuComponent } from './menu/dish-menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SwimweardetailComponent } from '../swimweardetail/swimweardetail.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'swimweardetail/:Id', component: SwimweardetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
