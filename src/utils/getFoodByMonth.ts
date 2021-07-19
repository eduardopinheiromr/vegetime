import data from "@data/all.json";

type Data = {
  frutas: string[];
  legumes: string[];
  verduras: string[];
  pescados: string[];
};

const getFoodByMonth = (month: string) => {
  return data.meses[month] as Data;
};

export default getFoodByMonth;
