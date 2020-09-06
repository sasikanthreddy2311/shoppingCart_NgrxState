import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectableItemsComponent } from './dashboard/selectable-items/selectable-items.component';
import { CartItemsComponent } from './dashboard/cart-items/cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectableItemsComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
