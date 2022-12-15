import { MENU } from "./menu";
import { Product } from "../types";

export class Drink implements Product {
    type: "coca-cola" | "sprite" | "fanta";
    price;

    constructor(type: Drink["type"]) {
        this.type = type;
        this.price = MENU[type];
    }
}
