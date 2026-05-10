"use strict";
// 1.
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(5, 5));
// 2.
const greet = (name) => {
    console.log(`Hi, ${name}`);
};
// 3.
function sum(num1, num2, cb) {
    const sum = num1 + num2;
    cb(sum);
}
sum(5, 10, (sum) => {
    console.log(sum);
});
