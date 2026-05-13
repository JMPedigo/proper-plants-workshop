import { useState } from "react";

import PLANTS from "./data";

import PlantList from "./plants/PlantList";

/** User can add plants to a cart, increase and decrease quantity, and remove items from cart */
export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantList />
        <Cart />
      </main>
    </>
  );
}
