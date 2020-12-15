import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export enum SelectableActionTypes {
    LOAD_PRODUCTS = "[Selectable] Load Products",
    LOAD_PRODUCTS_SUCCESS = "[Selectable] Load Products Success",
    LOAD_PRODUCTS_FALIED = "[Selectable] Load Products Failed",
    ADD_PRODUCT = "[Selectable] Add Product",
    ADD_PRODUCT_SUCCESS = "[Selectable] Add Product Success",
    ADD_PRODUCTS_FAILED = "[Selectable] Add Product Failed",
    REMOVE_PRODUCT = "[Selectable] Remove Product",
    REMOVE_PRODUCT_SUCCESS = "[Selectable] Remove Product Success",
    REMOVE_PRODUCT_FAILED = "[Selectable] Remove Product Failed"
}

//Load Products Actions
export class LoadProducts implements Action {
    readonly type = SelectableActionTypes.LOAD_PRODUCTS
}

export class LoadProductsSuccess implements Action {
    readonly type = SelectableActionTypes.LOAD_PRODUCTS_SUCCESS

    constructor(public payload: Product[]) {}
}

export class LoadProductsFailed implements Action {
    readonly type = SelectableActionTypes.LOAD_PRODUCTS_FALIED

    constructor(public payload: string) {}
}

//Add Products Actions
export class AddProduct implements Action {
    readonly type = SelectableActionTypes.ADD_PRODUCT

    constructor(public payload: Product) {}
}

export class AddProductSuccess implements Action {
    readonly type = SelectableActionTypes.ADD_PRODUCT_SUCCESS

    constructor(public payload: Product) {}
}

export class AddProductFailed implements Action {
    readonly type = SelectableActionTypes.ADD_PRODUCTS_FAILED

    constructor(public payload: string) {}
}

//Remove Products Actions
export class RemoveProduct implements Action {
    readonly type = SelectableActionTypes.REMOVE_PRODUCT
    
    constructor(public payload: Product) {}
}

export class RemoveProductSuccess implements Action {
    readonly type = SelectableActionTypes.REMOVE_PRODUCT_SUCCESS

    constructor(public payload: Product) {}
}

export class RemoveProductFailed implements Action {
    readonly type = SelectableActionTypes.REMOVE_PRODUCT_FAILED

    constructor(public payload: string) {}
}

export type Actions = 
LoadProducts | 
LoadProductsSuccess | 
LoadProductsFailed | 
AddProduct |
AddProductSuccess |
AddProductFailed |
RemoveProduct |
RemoveProductSuccess |
RemoveProductFailed;