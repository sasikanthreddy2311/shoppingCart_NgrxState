import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectableItemsComponent } from './dashboard/selectable-items/selectable-items.component';
import { CartItemsComponent } from './dashboard/cart-items/cart-items.component';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";

import { productReducer } from "../app/_shared/redux/reducers";
import { ProductEffect } from "../app/_shared/redux/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectableItemsComponent,
    CartItemsComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({"productReducer": productReducer}),
    EffectsModule.forRoot([ProductEffect]),
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
