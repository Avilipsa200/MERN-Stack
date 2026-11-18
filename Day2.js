const name="Avi";
let marks=90;
function display(){
    let marks1=80;
    console.log(`name is  ${name} and marks are ${marks1}`);
}
console.log(`name is ${name} and marks are ${marks}`);
display();

// With array destructuring:
const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);
const [fir, ,thi]=colors;
console.log(`First: ${fir}, Third: ${thi}`);