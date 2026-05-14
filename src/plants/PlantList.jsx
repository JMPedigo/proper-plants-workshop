import PlantListItem from "./PlantListItem";

export default function PlantList({ plants, addToCart }) {
  return (
    <article className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <PlantListItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </article>
  );
}
