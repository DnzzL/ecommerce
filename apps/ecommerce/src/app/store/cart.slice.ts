import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const CART_FEATURE_KEY = 'cart';

/*
 * Update these interfaces according to your requirements.
 */
export interface CartEntity {
  id: number;
}

export interface Product {
  id: number;
  brand: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  images: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState extends EntityState<CartEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
  items: CartItem[];
}

export const cartAdapter = createEntityAdapter<CartEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchCart())
 * }, [dispatch]);
 * ```
 */
export const fetchCart = createAsyncThunk(
  'cart/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getCarts()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialCartState: CartState = cartAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: '',
  items: [],
});

export const cartSlice = createSlice({
  name: CART_FEATURE_KEY,
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const idx = state.items.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      return {
        ...state,
        items: [
          ...state.items.slice(0, idx),
          action.payload,
          ...state.items.slice(idx + 1),
        ],
      };
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const idx = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );
      return idx !== -1
        ? {
            ...state,
            items: state.items.filter(
              (item) => item.product.id !== action.payload.id
            ),
          }
        : state;
    },
  },
});

/*
 * Export reducer for store configuration.
 */
export const cartReducer = cartSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(cartActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const cartActions = cartSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllCart);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = cartAdapter.getSelectors();

export const getCartState = (rootState: any): CartState =>
  rootState[CART_FEATURE_KEY];

export const selectAllCart = createSelector(getCartState, selectAll);
export const selectCartEntities = createSelector(getCartState, selectEntities);
export const selectCartItems = createSelector(
  getCartState,
  (state) => state.items
);
