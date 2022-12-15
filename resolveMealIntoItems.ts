import { FamilyMeal, HappyMeal, OrderType } from "./types";

const mapMealToItems = (meal: HappyMeal | FamilyMeal) => {
    const orderItems: OrderType["items"] = meal.items.map((item) => {
        return {
            product: {
                type: item.type,
                price: item.price,
            },
            quantity: 1,
        };
    });

    return orderItems;
};

const resolveMealIntoItems = (meals: Array<HappyMeal | FamilyMeal>) => {
    meals?.length;
    const mealsItems: OrderType["items"] = [];
    meals.forEach((meal) => mealsItems.push(...mapMealToItems(meal)));
    return mealsItems;
};

export default resolveMealIntoItems;
