"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Fundamental Class Structure and access modifiers
class Person {
    name; // variable with type, can not accessable outside the class
    persons;
    age; // can be initiated only once
    constructor(n) {
        this.name = n;
        this.persons = [];
        this.age = 20;
    }
    describe() {
        console.log("Person name is ", this.name);
    }
    addPersons(indPerson) {
        this.persons.push(indPerson);
    }
    totalPersons() {
        console.log(this.persons);
    }
    tryTomodifyReadOnlyProperty() {
        // this.age = 21   --> Cannot assign to 'age' because it is a read-only property.
    }
}
const p = new Person("Sayak");
// p.name  --> Property 'name' is private and only accessible within class 'Person
p.describe();
p.addPersons("Mohit"); // adding two persons
p.addPersons("Komal");
p.totalPersons();
//# sourceMappingURL=class.js.map