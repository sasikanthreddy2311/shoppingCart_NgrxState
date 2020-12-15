import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  carItem = null;
  cartProducts = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  getCartItem(event) {
    this.store.subscribe(state =>
      this.cartProducts = state.productReducer.products
    )
    this.carItem = this.cartProducts
  }

}
