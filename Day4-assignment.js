// Assignment 1 – Copy an array

// Create an array of five numbers. Copy it using Spread. Add a new number to the copied array and print both arrays.

const originalArray = [10, 20, 30, 40, 50];
const copiedArray = [...originalArray];
copiedArray.push(60);
console.log("Original Array:", originalArray); // Output: [10, 20, 30, 40, 50]
console.log("Copied Array:", copiedArray); // Output: [10, 20, 30, 40, 50, 60]

// Assignment 2 – Update an object

// Create an employee object with name, age and salary. Create a copied object and update the salary without modifying the original object.

const employee = {
    name: "John",
    age: 30,
    salary: 50000
};
const copiedEmp={...employee};
copiedEmp.salary=60000;
console.log("Original Employee:", employee); // Output: { name: "John", age: 30, salary: 50000 }
console.log("Updated Employee:", copiedEmp); // Output: { name: "John", age: 30, salary: 60000 }

// Assignment 4 – Rest function

// Create an arrow function that accepts any number of arguments and returns their total.
const add=(...num)=>{
    let total=0;
    for(const number of num){
        total+=number;
    }
    return total;
}
console.log(add(1,2,3)); // Output: 6
console.log(add(10,20,30,40)); // Output: 100