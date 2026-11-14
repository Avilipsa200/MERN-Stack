

let value = "John"; // Here value is a variable that stores the string value "John".
console.log(value); // This will output: John

// Var Example
function varExample() {
    var varVariable = "I am a var variable"; // var is function-scoped
    console.log(varVariable);
}
varExample();


// console.log(varVariable); // This will throw an error because varVariable is not accessible outside the function.

var salary = 20000;

console.log(salary); // 20000

salary = 30000;

console.log(salary); // 30000

var salary = 35000; // Redeclaration allowed

console.log(salary); // 35000

// let /const Example
let name = "Rahul"; // let is block-scoped
if (true) {
    let name = "Amit";
    console.log(name); // This will output: Amit
}
console.log(name); // This will output: Rahul

let cartQuantity = 1;

console.log(cartQuantity); // 1

cartQuantity = 3;

console.log(cartQuantity); // 3


if (true) {
    const number = 20;
    console.log(number); // This will output: 20
}
// console.log(number); // This will show error

const companyNumber = "COMP12345";

console.log(companyNumber);

// companyNumber = "COMP67890"; 
// Error: Assignment to constant variable



// Arrow Function Example
const add=(a,b)=>{
    
    let result = a + b;
    return result;
};
const result = add(5, 10);
console.log(result); // This will output: 15


// Multiple Calculation with the arrow function 

const calculation=(a,b,operation)=>{
if(operation === "add"){
    return a + b;   
}
else if(operation === "subtract"){
    return a - b;           
}
else if(operation === "multiply"){
    return a * b;
}
else if(operation === "divide"){
    return a / b;   
}
else{
    return "Invalid operation";
}
};
console.log(calculation(10,5,"add"));
console.log(calculation(10,5,"subtract"));
console.log(calculation(10,5,"multiply"));
console.log(calculation(10,5,"divide"));
