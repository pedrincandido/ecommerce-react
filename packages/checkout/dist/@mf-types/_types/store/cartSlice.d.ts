export interface CartItem {
    id: string;
    title: string;
    quantity?: number;
    price: number;
}
export interface CartState {
    items: CartItem[];
}
export declare const addItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<CartItem, "cart/addItem">, removeItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
}, "cart/removeItem">, clearCart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cart/clearCart">;
declare const _default: import("redux").Reducer<CartState, import("redux").UnknownAction, CartState>;
export default _default;
