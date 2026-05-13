import CartItemQuantity from "./CartItemQuantity";

/** I need a component to populate a list item with name, image, and quantity, with two
 *  buttons that add to cart or remove from cart */

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <CartItemQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}
