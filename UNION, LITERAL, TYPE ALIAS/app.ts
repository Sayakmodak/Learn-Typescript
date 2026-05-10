// type alias
type Combine = string | number

function combine(num1: Combine, num2: Combine) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2
    }
}

console.log(combine(10, 10));



type User = {
    name: string,
    address: string
}

const person: User = {
    name: "Sayak",
    address: "Mahanad"
}
console.log(person.name);