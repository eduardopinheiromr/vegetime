const getMonth = () => {
  const time = new Date();
  return time.toLocaleString("pt-BR", { month: "long" });
};

export default getMonth;
