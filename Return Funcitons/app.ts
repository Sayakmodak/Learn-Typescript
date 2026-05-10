// 1.
const add = (num1: number, num2: number): number => {
    return num1 + num2
}

console.log(add(5, 5));


// 2.
const greet = (name: string): void => {
    console.log(`Hi, ${name}`);
}


// 3.
type CB = (n: number) => void
function sum(num1: number, num2: number, cb: CB): void {
    const sum = num1 + num2;
    cb(sum)
}

sum(5, 10, (sum) => {
    console.log(sum);
})