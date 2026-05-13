/** I decided to make a new component because CartItem was getting too bulky */

export default function CartItemQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div className="cart-item-quantity">
      <button onClick={() => removeFromCart(item)}>-</button>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
