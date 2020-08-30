const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  return Object.values(employees).reduce((a, b) => a + b, 0)
  // let arr = Object.values(employees);
  // let sum = 0;
  // for (let i = 0; i < arr.length; i += 1) {
  //   sum += arr[i]
  // }
  // return sum
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
//console.log(countTotalSalary(supports));
// 500
