export default (expenses) => {
  let total;
  return expenses
    .map((x) => x.amount)
    .reduce((a, b) => {
      return a + b;
    }, 0);
};
