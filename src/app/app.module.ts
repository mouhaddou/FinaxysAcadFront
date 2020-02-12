import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {DataTablesModule} from 'angular-datatables';  
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AddEmplComponent } from './add-empl/add-empl.component';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmplComponent,
    ClientListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
