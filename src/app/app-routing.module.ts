import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { ClientListComponent } from './client-list/client-list.component';  
import { AddEmplComponent } from './add-empl/add-empl.component';  
import {UpdateEmployeeComponent} from './update-employee/update-employee.component'
  
const routes: Routes = [  
  { path: '', redirectTo: 'add-empl', pathMatch: 'full' },  
  { path: 'view-client', component: ClientListComponent },  
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'add-empl', component: AddEmplComponent },  
];  
  
 
export  const routing = RouterModule.forRoot(routes);
