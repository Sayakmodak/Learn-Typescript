"use strict";
// UNION --> any type can come(p1: number | string)
function union(p1, p2) {
    if (typeof (p1) == "number" && typeof (p2) == "number") {
        console.log(p1 + p2);
    }
    else {
        const result = p1.toString() + p2.toString();
        console.log(result);
    }
}
union(10, "20");
// Literals
function literals(num1, num2, conversionType) {
    let result;
    if (typeof (num1) == "number" && typeof (num2) == "number" || conversionType == "as-number") {
        return result = +num1 + +num2;
    }
    else {
        return result = num1.toString() + num2.toString();
    }
}
console.log("Number ", literals(10, 10, "as-number")); // 20
-console.log("As-number ", literals(10, "10", "as-number")); // 20
function combine(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
}
console.log(combine(10, 10));
const person = {
    name: "Sayak",
    address: "Mahanad"
};
console.log(person.name);
function info(user) {
    console.log(user.name);
}
