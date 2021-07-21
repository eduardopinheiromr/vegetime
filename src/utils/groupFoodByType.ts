import data from "@data/all.json";
import { groupBy } from "@utils";

const groupFoodByType = (foodType: string) => {
  const months = [
    "janeiro",
    "fevereiro",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  let repeticoes = [];

  months.forEach((month) => {
    // VAI RODAR 12X (OS 12 MESES)
    data.meses[month][foodType].forEach((food) => {
      // VAI RODAR CADA FRUTA
      data.meses[month][foodType].includes(food) &&
        repeticoes.push({ food, month });
    });
  });

  console.log({ repeticoes });

  // console.log(groupBy(repeticoes, "food"));
  const comidasAgrupadas = groupBy(repeticoes, "food");

  const arrayComidasAgrupadas = Object.entries(comidasAgrupadas).map(
    ([key, value]) => ({ [key]: value })
  );
  const teste = arrayComidasAgrupadas.map((food) => {
    // VAI RODAR CADA COMIDA AGRUPADA

    console.log(food);
    // return {
    //   comida: food[0].food,
    //   meses: food.map((mes) => mes.month),
    // };
  });
  // console.log({ teste });
};

export default groupFoodByType;
