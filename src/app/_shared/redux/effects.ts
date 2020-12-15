import { Injectable } from '@angular/core';
import { act, Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ApiServiceService } from '../services/api-service.service';
import * as ProductActions from './actions';
import { Product } from '../models/product.model';

@Injectable()
export class ProductEffect {

    constructor(private actions: Actions, private apiServiceService: ApiServiceService) { }

    @Effect()
    loadProducts = this.actions.pipe(
        ofType<ProductActions.LoadProducts>(ProductActions.SelectableActionTypes.LOAD_PRODUCTS),
        mergeMap(() =>
            this.apiServiceService.getProducts().pipe(
                map((products: Product[]) =>
                    new ProductActions.LoadProductsSuccess(products)
                ),
                catchError(err =>
                    of(new ProductActions.LoadProductsFailed(err))
                )
            )
        )
    )

    @Effect()
    addProduct = this.actions.pipe(
        ofType<ProductActions.AddProduct>(ProductActions.SelectableActionTypes.ADD_PRODUCT),
        mergeMap((action: ProductActions.AddProduct) =>
            this.apiServiceService.addProductInCart(action.payload).pipe(
                map(() =>
                    new ProductActions.AddProductSuccess(action.payload)
                ),
                catchError(err =>
                    of(new ProductActions.AddProductFailed(err))
                )
            )
        )
    )

    @Effect()
    removeProduct = this.actions.pipe(
        ofType<ProductActions.RemoveProduct>(ProductActions.SelectableActionTypes.REMOVE_PRODUCT),
        mergeMap((action: ProductActions.RemoveProduct) =>
            this.apiServiceService.removeProductInCart(action.payload).pipe(
                map(() =>
                    new ProductActions.RemoveProductSuccess(action.payload)
                ),
                catchError(err =>
                    of(new ProductActions.RemoveProductFailed(err))
                )
            )
        )
    )
}
