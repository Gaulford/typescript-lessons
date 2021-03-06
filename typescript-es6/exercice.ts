// Exercise 1 - Maybe use an Arrow Function?
var double = (value:number): number => {
    return value * 2;
};
console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
var greet = function (name: string = "Max") {
    console.log("Hello, " + name);
};
greet();
greet("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
 
// Exercise 4 - I have to think about Exercise 3 ...
var newArray: number[] = [55, 20];
Array.prototype.push(...numbers);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
const [
    result1,
    result2,
    result3
] = [3.89, 2.99, 1.38];

console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
const scientist = {firstName: "Will", experience: 12};
const { firstName, experience } = scientist;

console.log(firstName, experience);