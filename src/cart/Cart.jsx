import CartItem from "./CartItem";

import "./cart.css";

export default function Cart({ cart, removeFromCart, addToCart }) {
  return (
    <section className="cart">
      <h2 className="title-cart">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add a plant.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
