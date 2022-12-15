import { Burger } from "./burger";
import { Drink } from "./drink";
import { Potatoes } from "./fries";

type Menu = {
    [kye in Burger["type"] | Drink["type"] | Potatoes["type"]]: number;
};

export const MENU: Menu = {
    cheeseburger: 1,
    "mc-crispy": 1.5,
    "big-mac": 2,
    "coca-cola": 1,
    sprite: 1,
    fanta: 1,
    fries: 1,
    curly: 1.5,
    croquettes: 1.5,
};
