const getMonth = () => {
  const time = new Date();
  return time.toLocaleString("default", { month: "long" });
};

export default getMonth;
