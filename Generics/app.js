"use strict";
// 1.
const colors = []; // Only array of strings can come
colors.push("Blue");
colors.push("Yellow");
console.log(colors);
const boy = {
    name: "Mohit",
    address: "ABC"
};
const personInfo = [{ name: "Sunil", address: "XYZ" }];
console.log(personInfo);
// 3.
function mergeObject(objA, objB) {
    return { ...objA, ...objB };
}
console.log(mergeObject({ name: "Mohan" }, { age: 20 }));
// 4.
function createObject(key, value, isActive) {
    return {
        key: key,
        value: value,
        isActive: isActive
    };
}
console.log("From createObject ", createObject("Kishan", 20, true)); // throw an error, cuz "T" can only accept string.
// 3.
function wrapInArray(item) {
    return [item];
}
wrapInArray("Chai");
wrapInArray(10);
wrapInArray({});
// 4.
function pair(item1, item2) {
    return [item1, item2];
}
console.log(pair("Chai", "10"));
const mohit = {
    name: "mohit",
    sid: 20,
};
console.log(mohit);
