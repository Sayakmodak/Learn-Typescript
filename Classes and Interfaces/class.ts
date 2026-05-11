// Fundamental Class Structure and access modifiers
class Person {
    private name: string    // variable with type 
    persons: string[]
    readonly age : number

    constructor(n : string){
        this.name = n
        this.persons = []
        this.age = 20
    }
    describe(){
        console.log("Person name is ", this.name)
    }

    addPersons(indPerson: string){
        this.persons.push(indPerson)
    }
    totalPersons(){
        console.log(this.persons)
    }

    tryTomodifyReadOnlyProperty(){
        // this.age = 21   --> Cannot assign to 'age' because it is a read-only property.
    }
}

const p = new Person("Sayak");
// p.name  --> Property 'name' is private and only accessible within class 'Person
p.describe();
p.addPersons("Mohit")   // adding two persons
p.addPersons("Komal")
p.totalPersons()