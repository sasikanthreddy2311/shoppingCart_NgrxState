import * as ProductActions from './actions';
import { Product } from '../models/product.model';
import * as fromRoot from '../../state/app.state';
import { state } from '@angular/animations';
import { act } from '@ngrx/effects';

export interface ProductState {
    products: Product[],
    loading: boolean,
    loaded: boolean,
    error: string,
}

export const initialState: ProductState = {
    products: [],
    loading: false,
    loaded: false,
    error: "",
}

export function productReducer ( state: ProductState = initialState, action: ProductActions.Actions ) {
    switch(action.type) {
        case ProductActions.SelectableActionTypes.LOAD_PRODUCTS: {
            return {
                ...state,
                loading: true
            }
        }
        case ProductActions.SelectableActionTypes.LOAD_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                products: action.payload
            }
        }
        case ProductActions.SelectableActionTypes.LOAD_PRODUCTS_FALIED: {
            return {
                ...state,
                loading: false,
                loaded: false,
                products: [],
                error: action.payload
            }
        }
        case ProductActions.SelectableActionTypes.ADD_PRODUCT: {
            return {
                ...state,
                loading: true            }
        }
        case ProductActions.SelectableActionTypes.ADD_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                products: state.products.map(
                        (item, index) => (item.name === action.payload.name) 
                        ? Object.assign({}, item, { noOfItemsInCart: item.noOfItemsInCart + 1 })
                        : item
                ) 
            }
        }
        case ProductActions.SelectableActionTypes.ADD_PRODUCTS_FAILED: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            }
        }
        case ProductActions.SelectableActionTypes.REMOVE_PRODUCT: {
            return {
                ...state,
                loading: true            }
        }
        case ProductActions.SelectableActionTypes.REMOVE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                products: state.products.map(
                        (item, i) => (item.name === action.payload.name) 
                        ? Object.assign({}, item, { noOfItemsInCart: item.noOfItemsInCart - 1 })
                        : item
                ) 
            }
        }
        case ProductActions.SelectableActionTypes.REMOVE_PRODUCT_FAILED: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}