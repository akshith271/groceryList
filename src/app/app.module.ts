import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import {FormsModule} from "@angular/forms";
import {DataService} from "./services/data.service";
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './filter/filter.component';
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    GroceryItemComponent,
    CartComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbDropdownModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
