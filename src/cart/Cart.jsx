export default function Cart({ cart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add a plant.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
