import { getFoodByMonth, getMonth } from "@utils";
import FoodCarousel from "./FoodCarousel";

export default function FoodList() {
  const month = getMonth();
  const food = getFoodByMonth(month);

  const { frutas, legumes, verduras, pescados } = food;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="frutas">
        <h3 className="text-4xl font-bold mb-8">Frutas</h3>
        <FoodCarousel food={frutas} />
      </div>
      <div className="legumes">
        <h3 className="text-4xl font-bold mb-8">Legumes</h3>
        <FoodCarousel food={legumes} />
      </div>
      <div className="verduras">
        <h3 className="text-4xl font-bold mb-8">Verduras</h3>
        <FoodCarousel food={verduras} />
      </div>
      <div className="pescados">
        <h3 className="text-4xl font-bold mb-8">Pescados</h3>
        <FoodCarousel food={pescados} />
      </div>
    </div>
  );
}
