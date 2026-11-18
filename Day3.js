// Spread and Rest Operators
// 1. What is the Spread Operator?
// Definition: The Spread Operator (...) expands the elements of an array or the properties of an object into individual elements or properties.

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(numbers); // Output: [1, 2, 3]
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]

const person = { name: "John", age: 30 };
const newPerson = { ...person, city: "New York" };
console.log(person); // Output: { name: "John", age: 30 }
console.log(newPerson); // Output: { name: "John", age: 30, city: "New York" }  

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, ...arr1];
console.log(arr2); // Output: [4, 5, 6, 1, 2, 3]

const add=(...numbers)=>{
    let sum=0;
    for(let number of numbers){
        sum+=number;
    }
    return sum;
};
console.log(add(10,20)); // Output: 30
console.log(add(10,20,30)); // Output: 60
console.log(add(10,20,30,40)); // Output: 100


const user={
    name:"Avi",
    age:30,
    city:"Bhubaneswar"
};
const copyUser={...user};
copyUser.name="Rahul";
console.log(user); // Output: { name: "
console.log(copyUser); // Output: { name: "Rahul", age: 30, city: "Bhubaneswar" }