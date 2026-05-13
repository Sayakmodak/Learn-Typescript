/*
interface Person {
    name: string;
    address: string;
    greet(text: string): void
}

let user : Person

user = {
    name: "Mohit",
    address: "ABC",
    greet(str: string){
        console.log(`Hello ${str}`)
    }
}
*/



interface Person {
    name: string,
    address: string
    greet(text: string): void
}

const person : Person = {
    name: "ABC",
    address: "XYZ",
    greet(name: string){
        console.log(`Hello ${name}`);
    }
}

console.log("Name is ", person.name)
console.log(person.greet("Mohit"))