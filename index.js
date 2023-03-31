let addDays = require("date-fns/addDays");

const newDate = (days) => {
  const result = addDays(new Date(2020, 7, 22), days);
  let temp = `${result.getDate()}-${
    result.getMonth() + 1
  }-${result.getFullYear()}`;
  return temp;
};

// let temp = newDate(10);
// console.log(temp);

module.exports = newDate;
