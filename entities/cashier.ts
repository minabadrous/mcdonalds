import Order from "./order";
import { OrderType, ProductType } from "../types";
import Kitchen from "./kitchen";

class Cashier {
    private static instance: Cashier;

    private constructor() {}

    public static getInstance(): Cashier {
        if (!Cashier.instance) {
            Cashier.instance = new Cashier();
        }

        return Cashier.instance;
    }

    order(order: OrderType) {
        return new Order(order);
    }

    initOrder(order: Order) {
        Kitchen.getInstance().cook(order);
        return order.getTicket();
    }

    update(item: ProductType) {
        let message = `${item} is finished.`;
        console.log(message);
    }

    notify(ticket: Order["ticket"]) {
        let message = `Order finished for ticket number ${ticket}.`;
        console.log(message);
    }
}

export default Cashier;
