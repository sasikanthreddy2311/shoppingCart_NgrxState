import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/_shared/models/product.model';

import * as productActions from '../../_shared/redux/actions';

@Component({
  selector: 'selectable-items',
  templateUrl: './selectable-items.component.html',
  styleUrls: ['./selectable-items.component.scss']
})
export class SelectableItemsComponent implements OnInit {

  @Output() ItemAddedToCart = new EventEmitter<Product>()

  products = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new productActions.LoadProducts());
    this.store.subscribe(state =>
      this.products = state.productReducer.products
    )
  }

  addItemToCart(item) {
    this.store.dispatch(new productActions.AddProduct(item));
    this.ItemAddedToCart.emit(item);
    this.store.subscribe(state =>
      this.products = state.productReducer.products
    )
  }

  removeItemToCart(item) {
    this.store.dispatch(new productActions.RemoveProduct(item));
    this.ItemAddedToCart.emit(item);
    this.store.subscribe(state =>
      this.products = state.productReducer.products
    )
  }

}
