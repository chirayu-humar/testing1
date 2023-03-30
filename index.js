let addDays = require("date-fns/addDays");

function newDate(days) {
  const result = addDays(new Date("2020-07-22"), days);
  let temp = `${result.getDate()}-${
    result.getMonth() + 1
  }-${result.getFullYear()}`;
  return temp;
}

// let temp = newDate(10);
// console.log(temp);

module.exports = newDate;
