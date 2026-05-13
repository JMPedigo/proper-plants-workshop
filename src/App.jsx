import { useState } from "react";
import PLANTS from "./data";

/** User can add plants to a cart, increase and decrease quantity, and remove items from cart */
export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants />
        <Cart />
      </main>
    </>
  );
}
