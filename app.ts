import Cashier from "./entities/cashier";
import { Burger } from "./menu/burger";
import { Drink } from "./menu/drink";
import { Potatoes } from "./menu/fries";

const cashier = Cashier.getInstance();

const FIRST_ORDER = cashier.order({
    items: [
        { product: new Burger("big-mac", "large"), quantity: 2 },
        { product: new Potatoes("croquettes"), quantity: 3 },
    ],
});

const FIRST_ORDER_TICKET = cashier.initOrder(FIRST_ORDER);
console.log("order number: ", FIRST_ORDER_TICKET);

const SECOND_ORDER = cashier.order({
    meals: [
        {
            items: [
                new Burger("cheeseburger", "large"),
                new Drink("coca-cola"),
                new Potatoes("curly"),
            ],
        },
    ],
});
const SECOND_ORDER_TICKET = cashier.initOrder(SECOND_ORDER);
console.log("order number: ", SECOND_ORDER_TICKET);
