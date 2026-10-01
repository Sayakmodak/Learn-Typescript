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


let colors : Array<string> = [];
colors.push("White");
colors.push("Yellow");
console.log("@colors from generics", colors);


// tuple
let human : [string, number, string];
human = ["Rohan", 20, "Hooghly"];
console.log(human[0]);


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