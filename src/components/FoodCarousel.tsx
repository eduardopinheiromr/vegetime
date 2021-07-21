import Carousel from "nuka-carousel";

type Props = {
  food: string[];
};

export default function FoodCarousel({ food }: Props) {
  return (
    <Carousel>
      {food.map((item, key) => (
        <div className="capitalize mb-2" key={key}>
          {item}
        </div>
      ))}
    </Carousel>
  );
}
