//const text = <HTMLInputElement>document.getElementById("text")!;
// OR
const text = document.getElementById("text") ! as HTMLInputElement;
text.value = "Hello there";

console.log(text.value);

// ! --> the value of the text variable will be something but not null