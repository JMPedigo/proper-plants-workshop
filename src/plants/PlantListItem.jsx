/** I need a PlantListItem that contains an image and name,
 * and a button to add to cart
 * I also need to add the button component function */

export default function PlantListItem({ plant, addToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
