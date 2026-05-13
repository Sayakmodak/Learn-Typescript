"use strict";
const personInfoA = {
    name: "Sayak"
};
const personInfoB = {
    age: 20
};
/* const personInfo : {
    name: string,
    age: number
} = {
    name: "Anil",
    age: 20
}
*/
// OR
const personInfo = {
    name: "Anil",
    age: 20
};
// Typeguard with Classes
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadWoods(quantity) {
        console.log(`Loading woods of ${quantity}...`);
    }
}
const c = new Car();
const t = new Truck();
function display(vehicle, quantity) {
    if (vehicle instanceof Truck) {
        t.loadWoods(quantity);
    }
    else {
        c.drive();
    }
}
display(c, 0); // Driving...
display(t, 500); // Loading woods of 500...    
