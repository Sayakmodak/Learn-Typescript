"use strict";
// Fundamental Class Structure
class Person {
    name; // variable with type 
    persons;
    constructor(n) {
        this.name = n;
        this.persons = [];
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
}
const p = new Person("Sayak");
p.describe();
p.addPersons("Mohit");
p.addPersons("Komal");
p.totalPersons();
