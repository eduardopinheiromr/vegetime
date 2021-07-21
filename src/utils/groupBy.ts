const groupBy = (array: any, key: any) => {
  return array.reduce((previous, current) => {
    (previous[current[key]] = previous[current[key]] || []).push(current);
    return previous;
  }, {});
};

export default groupBy;
