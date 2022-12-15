import Order from "./order";
import { ProductType } from "../types";
import Cashier from "./cashier";

class Kitchen {
    private static instance: Kitchen;

    private constructor() {}

    public static getInstance() {
        if (!Kitchen.instance) {
            Kitchen.instance = new Kitchen();
        }

        return Kitchen.instance;
    }

    queueOrderItem() {}

    cook(order: Order) {
        const interval = 1000;
        let promise = Promise.resolve();

        order.items!.forEach(({ product, quantity }) => {
            promise = promise.then(function () {
                return new Promise(function (resolve) {
                    Cashier.getInstance().update(product.type as ProductType);
                    setTimeout(resolve, interval * quantity);
                });
            });
        });

        promise.then(function () {
            Cashier.getInstance().notify(order.getTicket());
        });
    }
}

export default Kitchen;
