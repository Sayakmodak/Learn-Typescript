// Object]
const person: {
    name: string;
    age: number,
    address: string[]
} = {
    name: "Ravi",
    age: 22,
    address: ["Kolkata", "Delhi"]
}

console.log(person.name);

// Array
let fruits: string[];
fruits = ["apple", "mango", "pineapple"];
console.log(fruits[0]);


// tuple
const human : {
    name: string,
    age: number,
    products: [number, string]
}= {
    name: "Rohan",
    age: 22,
    products: [10, "P_name"]
}

console.log(human.age);
console.log(human.products[1]);


// Enum
enum Role {Admin, User};

const man = {
    name: "Patel",
    age: 21,
    product: [10, "Macbook"],
    role: Role.User
}

if(man.role == Role.Admin){
    console.log("Admin");
} else{
    console.log("User");
}