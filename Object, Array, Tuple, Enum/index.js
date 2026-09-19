"use strict";
// Object]
const person = {
    name: "Ravi",
    age: 22,
    address: ["Kolkata", "Delhi"]
};
console.log(person.name);
// Array
let fruits;
fruits = ["apple", "mango", "pineapple"];
console.log(fruits[0]);
// tuple
const human = {
    name: "Rohan",
    age: 22,
    products: [10, "P_name"]
};
console.log(human.age);
console.log(human.products[1]);
// Enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
;
const man = {
    name: "Patel",
    age: 21,
    product: [10, "Macbook"],
    role: Role.User
};
if (man.role == Role.Admin) {
    console.log("Admin");
}
else {
    console.log("User");
}
