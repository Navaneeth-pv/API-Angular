import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ToDoComponent } from './to-do/to-do.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"productlist",
    component:ProductListComponent
  
  },
  {
    path:"uspublicdata",
   component:UsPublicDataComponent
  },
  {
    path:"userinfo",
    component:UserInfoComponent

  },
  {
    path:"passenger",
    component:ViewPassengerComponent

  },
  {
    path:"quotes",
    component:UserInfoComponent

  },
  {
    path:"data",
    component:UserDataComponent

  },
  {
    path:"todo",
    component:ToDoComponent

  }
]


@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    UsPublicDataComponent,
    UserInfoComponent,
    ProductListComponent,
    UserDataComponent,
    ToDoComponent,
    QuotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
