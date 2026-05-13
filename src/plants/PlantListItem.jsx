export default function PlantListItem({ plant }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}></button>
    </li>
  );
}
