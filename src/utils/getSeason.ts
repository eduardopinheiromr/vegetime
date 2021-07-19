const getSeason = () => {
  const time = new Date();

  const day = time.getDate();
  const month = time.getUTCMonth() + 1;

  if (
    (day >= 21 && month === 3) ||
    (month >= 4 && month < 6) ||
    (month === 6 && day < 21)
  ) {
    return "outono";
  }

  if (
    (day >= 21 && month === 6) ||
    (month >= 7 && month < 9) ||
    (month === 9 && day < 23)
  ) {
    return "inverno";
  }

  if (
    (day >= 23 && month === 9) ||
    month === 10 ||
    month === 11 ||
    (month === 12 && day < 21)
  ) {
    return "primavera";
  }

  return "verão";
};

export default getSeason;
