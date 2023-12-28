interface BaseStats {
    HP: number;
    Attack: number;
    Defense: number;
}
export interface CardItem {
    id: number;
    price: number;
    quantity: number;
    name: {
        english: string;
    };
    type: string[];
    base: BaseStats;
}
export interface CartState {
    items: CardItem[];
}
export declare const addItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<CardItem, "cart/addItem">, removeItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: number;
}, "cart/removeItem">, clearCart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cart/clearCart">;
declare const _default: import("redux").Reducer<CartState, import("redux").UnknownAction, CartState>;
export default _default;
