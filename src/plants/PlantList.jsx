import PlantListItem from "./PlantListItem";

import "./plants.css";

export default function PlantList({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2 className="title-plant">Plants</h2>
      <ul>
        {plants.map((plant) => (
          <PlantListItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
