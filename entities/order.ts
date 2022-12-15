import { MENU } from "../menu/menu";
import resolveMealIntoItems from "../resolveMealIntoItems";
import { OrderItem, OrderType, ProductType } from "../types";

class Order {
    cost: number = 0;
    items: OrderType["items"];
    private ticket: number = 0;

    constructor(order: OrderType) {
        this.ticket++;
        this.items = order.items ?? [];
        if (order.meals) {
            const orderItems: OrderItem[] = resolveMealIntoItems(order.meals);
            this.items!.push(...orderItems);
        }
        this.cost += this.priceItems(this.items!);
    }

    private priceItems(items: OrderType["items"]) {
        const totalPrice = items!.reduce(
            (reducedPrice, { product, quantity }) => {
                const productPrice =
                    MENU[product.type as ProductType] * quantity;
                return reducedPrice + productPrice;
            },
            0
        );

        return totalPrice;
    }

    getTicket() {
        return this.ticket;
    }
}

export default Order;
