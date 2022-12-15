import { MENU } from "./menu";
import { Product } from "../types";

export class Potatoes implements Product {
    type: "fries" | "curly" | "croquettes";
    price;

    constructor(type: Potatoes["type"]) {
        this.type = type;
        this.price = MENU[type];
    }
}
