// 1.
const color = []

const colors : Array<string> = []

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
function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("Chai")
wrapInArray(10)
wrapInArray({})



// 4.
function pair<T,U>(item1: T, item2: U): [T, U] {
    return [item1, item2]
}

pair("Chai", "10")