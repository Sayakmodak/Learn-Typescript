// Generics
function user<T extends number, U extends string>(uid: T, name: U): void{
    console.log(`${uid} is ${name}`);
}

user(10, "Rohan");

interface personInfo {
    pid: number,
    name: string,
    address: string
};

const person: personInfo = {
    pid: 10,
    name: "James",
    address: "Holand"
}
console.log(person);


type personA = {
    pid: number
}

type personB = {
    name: string
}

type person = personA & personB;

const personInfo: person = {
    pid: 10,
    name: "Kerlin"
}
console.log(personInfo);