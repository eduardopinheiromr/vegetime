import {
  getSeason,
  getMonth,
  getColorBySeason,
  getSeasonText,
  getFoodByMonth,
} from "@utils";
import styles from "@styles/home.module.scss";
import FoodList from "@components/FoodList";
import PageTags from "@components/PageTags";

export default function Home() {
  const month = getMonth();

  const season = getSeason();

  const seasonText = getSeasonText(season);

  const { bgColor, highlight } = getColorBySeason(season);

  const data = getFoodByMonth(month);

  // groupFoodByType("frutas");

  return (
    <>
      <PageTags />
      <div className={`px-7 min-h-screen ${bgColor}`}>
        <div className="container mx-auto text-center py-10">
          <div className={styles.introduction}>
            <p>
              Atualmente você pode encontrar uma grande variedade de frutas,
              verduras e legumes, nos supermercados durante todo o ano.
            </p>
            <p>
              Essa disponibilidade é o resultado de técnicas modernas de
              produção agrícola, envolvendo sementes modificadas, adubos, e até
              agrotóxicos.
            </p>
            <p>
              Pode parecer positivo, mas não é. O ideal é escolher alimentos
              orgânicos e da época, que a natureza produz sem a intervenção
              tecnológica mais intensa.
            </p>
            <p>
              Dessa forma, você contribui para a redução do impacto ambiental,
              ajuda a impulsionar a economia local e economiza dinheiro(devido a
              maior oferta no período).
            </p>
          </div>
          <h1 className="text-3xl leading-normal sm:text-5xl font-bold my-10 sm:leading-normal">
            Principais alimentos de{" "}
            <span className={`${highlight} rounded-md p-3`}>{month}</span>
          </h1>
          <FoodList />
          <div className={`mt-10 p-3 rounded-md ${highlight}`}>
            <h2 className="text-3xl capitalize font-bold mb-3">{season}</h2>
            <p>{seasonText}</p>
          </div>
        </div>
      </div>
    </>
  );
}
