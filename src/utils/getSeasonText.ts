const getSeasonText = (season: string) => {
  switch (season) {
    case "outono":
      return "Do latim: autumno, é nesta época ocorrem as grandes colheitas. Os dias ficam mais curtos e mais frescos. As folhas e frutas, já estão bem maduras e começam a cair no chão.";
    case "inverno":
      return "Do latim: hibernu, é a estação mais fria do ano. A noite chega mais cedo, devido aos dias mais curtos.";
    case "primavera":
      return "Do latim: primo vere, é a estação mais florida do ano! Os dias voltam a ser mais longos e quentes, com temperaturas muito agradáveis.";
    default:
      return "Do latim: veranum, é a estação mais quente do ano. Os dias são mais longos. As árvores estão verdes e carregadas de frutas. Neste período a Terra recebe mais chuva por causa da vaporização das águas.";
  }
};

export default getSeasonText;
