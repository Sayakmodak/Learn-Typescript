// UNION --> any type can come(p1: number | string)
function union(p1: number | string, p2: number|string){
    if(typeof(p1) == "number" && typeof(p2) == "number"){
        console.log(p1 + p2);
    }
    else{
        const result = p1.toString() + p2.toString();
        console.log(result);
    }
}

union(10, "20");



// Literals
function literals(num1: number | string, num2: number | string, conversionType: "as-number"){
    let result;
    if(typeof(num1) == "number" && typeof(num2) == "number" || conversionType == "as-number"){
        return result = +num1 + +num2;
    }
    else{
        return result = num1.toString() + num2.toString();
    }
}

console.log("Number ", literals(10, 10, "as-number")); // 20
console.log("As-number ", literals(10, "10", "as-number")); // 20



// type alias / custom types
type Anyofthem = string | number

function combine(num1: Anyofthem, num2: Anyofthem) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2
    }
}
console.log(combine(10, 10));


type User = {
    name: string,
    address: string,
    age: number
}

const person: User = {
    name: "Sayak",
    address: "Mahanad",
    age: 22
}

function info(user: User){
    console.log(user.name);
}