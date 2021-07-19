const getColorBySeason = (season: string) => {
  switch (season) {
    case "outono":
      return { bgColor: "bg-fall", highlight: "bg-fall-highlight" };
    case "inverno":
      return { bgColor: "bg-winter", highlight: "bg-winter-highlight" };
    case "primavera":
      return { bgColor: "bg-spring", highlight: "bg-spring-highlight" };
    default:
      return { bgColor: "bg-summer", highlight: "bg-summer-highlight" };
  }
};

export default getColorBySeason;
