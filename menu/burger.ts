import { MENU } from "./menu";
import { Product } from "../types";

export class Burger implements Product {
    type: "cheeseburger" | "mc-crispy" | "big-mac";
    size: "small" | "large";
    price;

    constructor(type: Burger["type"], size: Burger["size"]) {
        this.type = type;
        this.size = size;
        this.price = MENU[type];
    }
}
