// Getter and Setter

class Person{
    firstName: string
    lastName: string
    pId: number

    constructor(f_name: string, l_name: string, p_id: number){
        this.firstName = f_name
        this.lastName = l_name
        this.pId = p_id
    }

    // set the pId
    set setPersonId(id: number){
        this.pId = id;
    }

    // get the pId
    get getPersonId(){
        return this.pId;
    }
    describe(){
        console.log(`My name is ${this.firstName}, ${this.lastName}, and person id is ${this.pId}`);
    }
}

const p = new Person("Mohit", "Sing", 101);
p.describe()

p.setPersonId = 102
console.log(p.getPersonId)