export default function PlantListItem({ plant }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h2>{plant.name}</h2>
      <button onClick={() => addToCart(plant)}></button>
    </li>
  );
}
