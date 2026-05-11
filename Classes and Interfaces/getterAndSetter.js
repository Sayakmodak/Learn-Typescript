"use strict";
class Person {
    firstName;
    lastName;
    pId;
    constructor(f_name, l_name, p_id) {
        this.firstName = f_name;
        this.lastName = l_name;
        this.pId = p_id;
    }
    // set the pId
    set setPersonId(id) {
        this.pId = id;
    }
    // get the pId
    get getPersonId() {
        return this.pId;
    }
    describe() {
        console.log(this.firstName, this.lastName, this.pId);
    }
}
const p = new Person("Mohit", "Sing", 101);
p.describe();
p.setPersonId = 102;
console.log(p.getPersonId);
