// 1.
const colors : Array<string> = []   // Only array of strings can come
colors.push("Blue")
colors.push("Yellow")
console.log(colors);


// 2.
type Person = {
    name: string,
    address: string
}

const boy : Person = {
    name: "Mohit",
    address: "ABC"
}

const personInfo : Array<Person> = [{name: "Sunil", address: "XYZ"}]
console.log(personInfo);


// 3.
function mergeObject<T, U>(objA: T, objB: U){
    return {...objA, ...objB};
}
console.log(mergeObject({name: "Mohan"}, {age: 20}));


// 4.
function createObject<T extends string, U extends number, V extends boolean>(key: T, value: U, isActive: V){
    return {
        key: key,
        value: value,
        isActive: isActive
    }
}
console.log("From createObject ", createObject("Kishan", 20, true)); // throw an error, cuz "T" can only accept string.



//
function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("Chai")
wrapInArray(10)
wrapInArray({})



//
function pair<T,U>(item1: T, item2: U): [T, U] {
    return [item1, item2]
}

console.log(pair("Chai", "10"));