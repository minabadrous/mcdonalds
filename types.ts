import { Burger } from "./menu/burger";
import { Drink } from "./menu/drink";
import { Potatoes } from "./menu/fries";

export interface Product {
    type: string;
    price: number;
}

export interface HappyMeal {
    items: [Burger, Drink, Potatoes];
}

export interface FamilyMeal {
    items: [
        ...HappyMeal["items"],
        ...HappyMeal["items"],
        ...HappyMeal["items"]
    ];
}

export type ProductType = Burger["type"] | Drink["type"] | Potatoes["type"];
export type OrderItem = { product: Product; quantity: number };

export type OrderType = {
    items?: Array<OrderItem>;
    meals?: Array<HappyMeal | FamilyMeal>;
};
