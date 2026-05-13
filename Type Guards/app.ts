// Fundamental of Type Guards
type personInfoA = {
    name: string
}

type personInfoB = {
    age : number
}

type personInfo = personInfoA & personInfoB

const personInfoA : personInfoA = {
    name: "Sayak"
}

const personInfoB : personInfoB = {
    age: 20
}


/* const personInfo : {
    name: string,
    age: number
} = {
    name: "Anil",
    age: 20
}
*/

// OR

const personInfo : personInfo = {  // do not need to write two times
    name: "Anil",
    age: 20
}





// Typeguard with Classes
class Car {
    drive() : void{
        console.log("Driving...")
    }
}

class Truck {
    drive() : void {
        console.log("Driving a truck...")
    }

    loadWoods(quantity: number): void{
        console.log(`Loading woods of ${quantity}...`)
    }
}

type Vehicle = Car | Truck         // Either Car class or Truck classc will come

const c = new Car()
const t = new Truck()

function display(vehicle: Vehicle, quantity: number){
    if(vehicle instanceof Truck){
        t.loadWoods(quantity);
    }
    else{
        c.drive()
    }
}

display(c, 0)      // Driving...
display(t, 500)    // Loading woods of 500...    