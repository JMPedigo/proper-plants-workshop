import { useState } from "react";

import PLANTS from "./data";

import Cart from "./cart/Cart";
import PlantList from "./plants/PlantList";

/** User can add plants to a cart, increase and decrease quantity, and remove items from cart */
export default function App() {
  const [cart, setCart] = useState([]);
  /** I need to see if the plant exists in the cart.
   * If it does, then create a new copy of the cart by mapping over and increasing quantity.
   * If it doesn't, then create a cart item with quantity: 1
   */
  const addToCart = (plant) => {
    const itemInCart = cart.includes(`item.name`);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };
  /** I need to use map to decrease the quantity of the item that needs removed by 1
   * Keep only items that have a quantity
   */
  const removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantList plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </main>
    </>
  );
}
